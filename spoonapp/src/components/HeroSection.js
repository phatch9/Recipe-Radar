import React from "react";
import "./Homepage.css";
function HeroSection(){
    return(
        <div className = "homepage">
            <img className = 'homepage-img' src={require('/Users/phch/Documents/recipe-radar/Recipe-Radar/spoonapp/src/images/istockphoto-1405383649-170667a.jpg') } autoPlay loop/>
            <h1>Recipe Radar</h1>
            <p>Your Simplified Daily Recipes</p>
        </div>
    );
}
export default HeroSection;