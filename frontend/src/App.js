import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
//<Route path='/' exact component={Home} />
function App() {
  return (
    <>
    <Router>
      <navbar/>
      <Switch>
        <Route path = '/homepage.js' exact component = {homePage}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
