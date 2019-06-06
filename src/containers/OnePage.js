import React, { Component } from "react";

// components
import MainNav from "../components/MainNav";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Advantages from "../components/Advantages";
import Subscribe from "../components/Subscribe";
import Blog from "../components/Blog";

export default class OnePage extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Jumbotron />
        <Carousel />
        <Advantages />
        <Subscribe />
        <Blog />
      </div>
    );
  }
}
