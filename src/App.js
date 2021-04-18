import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage';


import Login from "./components/Login";
import "./styles.scss";

function App() {
  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link data-testid="logoutButton" href="#" onClick={logout}>logout</Link>
        </header> 
        <Switch>
          <PrivateRoute exact path="/protected" component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute X
//2. Build the logout button to remove the localStorage Item. X