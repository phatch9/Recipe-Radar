import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import homePage from '/Users/timkim/Desktop/CMPE133/Recipe-Radar/frontend/src/homepage/homepage.js';
import './App.css';
import navbar from './components/navigation';
//<Route path='/' exact component={Home} />
function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src= "RecipeLogo.jpg" className="App-logo" alt="logo" />
        
      </header>
    </div>
=======
    <>
    <Router>
      <navbar/>
      <Switch>
        <Route path = '/homepage.js' exact component = {homePage}></Route>
      </Switch>
    </Router>
    </>
>>>>>>> main
  );
}

export default App;
