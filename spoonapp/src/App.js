import React from 'react';
import Navbar from '/Users/timkim/Desktop/CMPE133/Recipe-Radar/spoonapp/src/components/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '/Users/timkim/Desktop/CMPE133/Recipe-Radar/spoonapp/src/components/Pages/Homepage.js';
import Login from '/Users/timkim/Desktop/CMPE133/Recipe-Radar/spoonapp/src/components/Pages/Login.js';
import Menu from '/Users/timkim/Desktop/CMPE133/Recipe-Radar/spoonapp/src/components/Pages/MenuPage.js';
import SignUp from './components/Pages/SignUp';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/login' component={Login} />
          <Route path='/menu' component={Menu} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;