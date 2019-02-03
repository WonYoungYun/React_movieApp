import React, { Component } from "react";
import "./TopButton.css";

export default class TopButton extends Component {
  scrollTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <button
        onClick={this.scrollTop}
        className={this.props.isLoadPage ? "display-button" : "disable-button"}
      >
        &and;
      </button>
    );
  }
}
