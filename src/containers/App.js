import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "containers/Layout/Layout";
import News from "containers/News/News";
import Profile from "containers/Profile/Profile";
import Login from "containers/Login/Login";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={News} />
        <Route path="/news" component={News} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
    </Layout>
  );
};

export default App;
