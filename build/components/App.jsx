import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { BookList } from "./index"

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Router history={browserHistory} >
          <Route path="/" component={BookList} text="booklist" />
        </Router>
      </div>
    )
  }
};