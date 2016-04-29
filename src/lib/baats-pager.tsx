import * as React from 'react';


// currentPage is one based
// because flip flopping sucks
export interface IProps {
  hideFirstLast?: boolean;
  showPages?: number;
  totalPages: number;
  currentPage: number;
  itemCount?: number; // include if you want item count to show
  onPageChange(page: number): void;
}

interface IPageProps {
  page: number;
  pager: IProps;
}


const SHOW_PAGES_DEFAULT = 5;


enum NavEnds { First, Prev, Next, Last };

const NavName = (x: NavEnds) => {
  switch (x) {
    case NavEnds.First: return "First";
    case NavEnds.Prev: return "Previous";
    case NavEnds.Next: return "Next";
    case NavEnds.Last: return "Last";
  }
};


const NavSymbol = (x: NavEnds) => {
  switch (x) {
    case NavEnds.First: return <span aria-hidden="true">&lsaquo;</span>;
    case NavEnds.Prev: return <span aria-hidden="true">&laquo;</span>;
    case NavEnds.Next: return <span aria-hidden="true">&raquo;</span>;
    case NavEnds.Last: return <span aria-hidden="true">&rsaquo;</span>;
  }
};


const EndBlock = (t: NavEnds, p: IProps) => {
  let value = getChangeNum(t, p);
  let onClick = value ? e => p.onPageChange(value) : undefined;
  return <li className={!!value ? "" : "disabled"}><a href="#" aria-label={NavName(t) } onClick={onClick}>{NavSymbol(t) }</a></li>;
};

const ItemsBlock = (n: number) => {
  let s = `${n} item${n===1?"":"s"}`;
  return <li className="disabled"><a href="#" aria-label={s}>{s}</a></li>;
};


const Page = (page:number, p: IProps) => (page === p.currentPage)
  ? <li key={page} className="active"><a href="#">{page}</a></li>
  : <li key={page}><a href="#" onClick={e => p.onPageChange(page) }>{page}</a></li>
  ;

const Pages = (p: IProps) => {
  let [first, last] = getPageRange(p);
  let xs : JSX.Element[] = [];
  for(let i=first; i<=last; i++) { 
    xs.push(Page(i,p));
  }
  return xs;
};

export class Pager extends React.Component<IProps, {}> {
  render() {
    let first = this.props.hideFirstLast ? null : EndBlock(NavEnds.First, this.props); 
    let last = this.props.hideFirstLast ? null : EndBlock(NavEnds.Last, this.props);
    let itemCount = this.props.itemCount ? ItemsBlock(this.props.itemCount) : null; 
    return (
      <div>
        <nav>
          <ul className="pagination">
            {first}
            {EndBlock(NavEnds.Prev, this.props) }
            {Pages(this.props) }
            {EndBlock(NavEnds.Next, this.props) }
            {last}
            {itemCount}
            </ul>
          </nav>
        </div>
    );
  }
}

function getChangeNum(t: NavEnds, p: IProps) : number {
  if (t === NavEnds.First && (p.currentPage !== 1)) {
    return 1;
  } else if (t === NavEnds.Prev && (p.currentPage !== 1)) {
    let n = getPageRange(p)[0] - 1;
    return (n > 0) ? n : 1;
  } else if (t === NavEnds.Next && (p.currentPage !== p.totalPages)) {
    let n = getPageRange(p)[1] + 1;
    return (n < p.totalPages) ? n : p.totalPages;
  } else if (t === NavEnds.Last && (p.currentPage !== p.totalPages)) {
    return p.totalPages;
  }
}


export function getItemRange(pageSize: number, totalItems: number, itemNum: number): [number, number] {
  let rows = Math.floor(totalItems / pageSize);
  let row = Math.floor((itemNum - 1) / pageSize);
  let firstPage = (row * pageSize) + 1;
  return [ firstPage,  Math.min(totalItems, firstPage + pageSize - 1) ];
}


export function getPageRange(p: IProps) {
  return getItemRange(p.showPages || SHOW_PAGES_DEFAULT, p.totalPages, p.currentPage);
} 

