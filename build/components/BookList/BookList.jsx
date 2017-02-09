import React from "react";
require("./BookList.scss");

export default class BookList extends React.Component{
  render() {
    return (
      <main>
        <span>{this.props.text}</span>
      </main>
    )
  }
};