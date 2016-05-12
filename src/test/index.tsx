import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pager, IProps as IPagerProps } from "../lib/baats-pager";

export interface IAppState {
  currentPage: number;
  totalPages: number;
}

interface ITestProps extends IPagerProps {
  name: string;
}

function getPProps1(state: IAppState, updatePage: (page: number) => void): ITestProps {
  return {
    name: "Basic",
    totalPages: state.totalPages,
    currentPage: state.currentPage,
    onPageChange: undefined
  };
}


function getPProps2(state: IAppState, updatePage: (page: number) => void) {
  let x = getPProps1(state, updatePage);
  x.name = "Hide First Last";
  x.hideFirstLast = true;
  return x;
}

function getPProps3(state: IAppState, updatePage: (page: number) => void) {
  let x = getPProps1(state, updatePage);
  x.name = "Item Count";
  x.itemCount = state.totalPages * 20;
  return x;
}


function getPProps4(state: IAppState, updatePage: (page: number) => void) {
  let x = getPProps1(state, updatePage);
  x.name = "Auto Collapse";
  x.autoCollapse = true;
  return x;
}

function getPProps5(state: IAppState, updatePage: (page: number) => void) {
  let x = getPProps3(state, updatePage);
  x.name = "Auto Collapse Items";
  x.autoCollapse = true;
  return x;
}


const PageCount = (values: number[], selected: number, onChange: (n:number) => void) => 
    <select className="form-control" defaultValue={values.indexOf(selected) } 
      onChange={ (e:any) => onChange(values[e.currentTarget.value]) }>
      {values.map((x, i) => <option value={i}>{x}</option>) }
      </select>;


const PAGE_COUNT_VALUES = [1,2,3,4,5,6,7,8,10,16,25,50,75,100];


export class App extends React.Component<{}, IAppState> {
  constructor(p) {
    super(p);
    this.state = { currentPage: 1, totalPages: 50 };
  }

  private updatePageCount(n: number) {
    this.setState((s, p) => {
      s.totalPages = n;
      if (s.currentPage > n ) { s.currentPage = n; } 
      return s;
    });
  }

  private updatePage(page: number) {
    this.setState((s, p) => {
      s.currentPage = page;
      return s;
    });
  }

  public render() {
    let pagers = [getPProps1, getPProps2, getPProps3, getPProps4, getPProps5 ]
      .map((getPp, i) => {
        let props = getPp(this.state, this.updatePage);
        props.onPageChange = (x) => this.updatePage(x);
        let pager = React.createElement(Pager, props);
        return <div key={i} className="row">
          <div className="col-xs-2">
            <div className="pagination row pull-right">{props.name}</div>
          </div>
          <div className="col-xs-10">{pager}</div>
        </div>;
      });
    return <div className="container">
        <div className="row"><h1>Page Test</h1></div>
        <div className="row"></div>
        <div className="row">
          <div className="col-xs-2">{PageCount(PAGE_COUNT_VALUES, this.state.totalPages, (x) => this.updatePageCount(x))}</div>
          <div className="col-xs-10">Page: {this.state.currentPage}</div>
        </div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-10">{pagers}</div>
        </div>
      </div>;
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById("approot")
);
