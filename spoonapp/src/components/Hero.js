import React from "react";
import "./Hero.css";
function Hero(){
    //Hero for first part of the home page
    return(
        <div className = "hero-section">
            <img className = 'hero-section-img' src={require('../images/istockphoto-1405383649-170667a.jpg') } autoPlay loop/>
            <h1>Recipe Radar</h1>
            <p>Daily Recipes Simplified</p>
        </div>
    );
}

export default Hero;