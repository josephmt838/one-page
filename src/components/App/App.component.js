import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// import components here
import OnePage from "../../containers/OnePage";
import NoMatch from "../../containers/noMatch";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" exact component={OnePage} />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    );
  }
}
