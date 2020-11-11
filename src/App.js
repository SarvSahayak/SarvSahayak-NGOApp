import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from "./Main";
import Error from "./Error"

function App() {
  return (
    <>
      <Switch>
        <Route exact path = '/' component = {Main} />
        <Route component = {Error} />
      </Switch>
    </>
  )
    
};

export default App;
