import React, { Component } from "react";
import { Input, Button } from "reactstrap";

import "./Subscribe.scss";
export default class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }
  inputHandler = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { email } = this.state;
    return (
      <section id="subscribe">
        <section className="subscribe-border">
          <section className="subscribe-text">
            <h3>Want to see more?</h3>
            <h3>Subscribe to our news.</h3>
          </section>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.inputHandler}
            placeholder="Email"
          />
          <Button onClick={this.subscribe}>Subscribe</Button>
        </section>
      </section>
    );
  }
}
