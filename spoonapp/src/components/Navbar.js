import React, { Component, useState } from 'react';
import { MenuItems } from './MenuItems';
import "./Navbar.css";
import {NavButton} from './Navbutton.js';
class Navbar extends Component{
    
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className = "navbar-items">
                <h1 className = "navbar-logo">
                <img className = 'navbar-img' src={require('images/RRlogo.png') } />
                </h1>
                <div className = "menu-icon" onClick = {this.handleClick}>
                    <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key = {index}>
                                <a className = {item.class} href = {item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <NavButton>Sign Up</NavButton>
            </nav>
        );
    }
}
export default Navbar;