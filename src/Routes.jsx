import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import BlankContent from "./BlankContent";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/BlankContent" component={BlankContent} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
