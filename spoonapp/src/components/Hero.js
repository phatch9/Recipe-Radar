import React from "react";
import "/Users/timkim/Desktop/CMPE133/Recipe-Radar/spoonapp/src/components/Hero.css";
function Hero(){
    return(
        <div className = "hero-section">
            <img className = 'hero-section-img' src={require('/Users/timkim/Desktop/CMPE133/Recipe-Radar/spoonapp/src/images/istockphoto-1405383649-170667a.jpg') } autoPlay loop/>
            <h1>Recipe Radar</h1>
            <p>Daily Recipes Simplified</p>
        </div>
    );
}

export default Hero;