import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from "./Main";
import Login from "./Login";
import Error from "./Error"

function App() {
  return (
    <>
      <Switch>
        <Route exact path = '/' component = {Main} />
        <Route path = '/login'  component = {Login} />
        <Route component = {Error} />
      </Switch>
    </>
  )
    
};

export default App;
