import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
//Importing importing routing functions used for navbar
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Pages/Homepage.js';
import AccountPage from './components/Pages/AccountPage';
import Login from './components/Pages/Login.js';
import Menu from './components/Pages/MenuPage.js';
import SignUp from './components/Pages/SignUp';
import Firebase from "firebase/app";
import "firebase/auth";
function App() {
  //Used React.js' Routing function to create hyperlinking between all the pages shown below
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* Switch inside Navbar makes that when a component (tab in the navbar) is clicked, will re-direct the user to that page*/}
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