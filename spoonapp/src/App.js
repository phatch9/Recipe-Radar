import React from 'react';
import Navbar from '/Users/ryantang/CMPE133/Recipe-Radar/spoonapp/src/components/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '/Users/ryantang/CMPE133/Recipe-Radar/spoonapp/src/components/Pages/Homepage.js';
import AccountPage from './components/Pages/AccountPage';
import Login from '/Users/ryantang/CMPE133/Recipe-Radar/spoonapp/src/components/Pages/Login.js';
import Menu from '/Users/ryantang/CMPE133/Recipe-Radar/spoonapp/src/components/Pages/MenuPage.js';
import SignUp from './components/Pages/SignUp';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/accountpage' exact component={AccountPage} />
          <Route path='/login' component={Login} />
          <Route path='/menu' component={Menu} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;