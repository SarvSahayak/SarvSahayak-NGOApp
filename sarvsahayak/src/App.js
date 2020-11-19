import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from "./components/Main.js";
import Error from "./components/Error.js"
// import Login from './Login';
import Dashboard from './components/Dashboard';
// import { createBrowserHistory } from 'history'
// import { browserHistory } from "react-router";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={Error} />
      </Switch>
    </>
  )

};

export default App;
