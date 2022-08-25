import React from "react";
import { Redirect, Route, Switch } from "react-router";
import loadable from "@loadable/component";

const SignUp = loadable(() => import("@pages/SignUp"));
const LogIn = loadable(() => import("@pages/LogIn"));
const Main = loadable(() => import(`@layouts/Main`));

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="main" />
      </Route>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/main/:main" component={Main} />
    </Switch>
  );
};

export default App;
