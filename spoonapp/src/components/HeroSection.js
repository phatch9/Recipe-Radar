import React from "react";
import "/Users/ryantang/CMPE133/Recipe-Radar/spoonapp/src/components/Homepage.css";
function HeroSection(){
    return(
        <div className = "homepage">
            <img className = 'homepage-img' src={require('/Users/ryantang/CMPE133/Recipe-Radar/spoonapp/src/images/istockphoto-1405383649-170667a.jpg') } autoPlay loop/>
            <h1>Recipe Radar</h1>
            <p>Daily Recipes Simplified</p>
        </div>
    );
}
export default HeroSection;