import React, { Component } from "react";

// components
import MainNav from "../components/MainNav";
import Jumbotron from "../components/Jumbotron";

export default class OnePage extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Jumbotron />
      </div>
    );
  }
}
