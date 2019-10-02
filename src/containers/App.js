import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "containers/Layout/Layout";
import News from "containers/News/News";

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={News} />
          <Route path="/news" component={News} />
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
