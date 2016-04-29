import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pager, IProps as IPagerProps } from "../lib/baats-pager";

export interface IAppState {
  currentPage: number;
}


function getPProps1(state: IAppState, updatePage: (page: number) => void): IPagerProps {
  return {
    totalPages: 50,
    currentPage: state.currentPage,
    onPageChange: undefined
  };
}

function getPProps2(state: IAppState, updatePage: (page: number) => void): IPagerProps {
  let x = getPProps1(state, updatePage);
  x.itemCount = 77;
  return x;
}

function getPProps3(state: IAppState, updatePage: (page: number) => void): IPagerProps {
  let x = getPProps2(state, updatePage);
  x.hideFirstLast = true;
  return x;
}



export class App extends React.Component<{}, IAppState> {
  constructor(p) {
    super(p);
    this.state = { currentPage: 1 };
  }


  private updatePage(page: number) {
    this.setState((s, p) => {
      s.currentPage = page;
      return s;
    });
  }

  public render() {
    let pagers = [getPProps1, getPProps2, getPProps3]
      .map((getPp, i) => {
        let props = getPp(this.state, this.updatePage);
        props.onPageChange = (x) => this.updatePage(x);
        let pager = React.createElement(Pager, props);
        return <div key={i} className="row">{pager}</div>;
      });
    return <div className="container">
        <div className="row"><h1>Page Test</h1></div>
        <div className="row">Page: {this.state.currentPage}</div>
        <div className="row"></div>
        {pagers}
      </div>;
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById("approot")
);
