import React, { Component } from "react";
import "assets/scss/style.scss";
import Header from "parts/Header";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}
