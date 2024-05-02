import React, { useState } from "react";

import "./MenuPage.css"; // Import the css 

function Menu(){
    const[mealData, setMealData] = useState(null);
    const[calories, setCals] = useState("");
    const[protein, setPro] = useState("");
    const[fiber, setFib] = useState("");
    const[carbs, setCarbs] = useState("");
    function setCalories(cals) {
        setCals(cals.target.value)
    }
    function setProtein(protein) {
        setPro(protein.target.value)
    }
    function setFiber(fiber) {
        setFib(fiber.target.value)
    }
    function setCarbohydrates(carbs) {
    setCarbs(carbs.target.value)
    }
    function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}` //fix to meet all input criteria
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
    return(
        
        <div className = "user_inputs">
            <center><div className="header--text">Find the Perfect Recipe for You!</div></center>
            <div className="input--grid">
                <div className="input-container">
                    <label>Max Calories</label>
                    <input type="number" placeholder="Max # of calories" onChange={setCalories} />
                </div>
                <div className="input-container">
                    <label>Max Protein</label>
                    <input type="number" placeholder="Max grams of protein" onChange={setProtein} />
                </div>
                <div className="input-container">
                    <label>Max Fiber</label>
                    <input type="number" placeholder="Max grams of fiber" onChange={setFiber} />
                </div>
                <div className="input-container">
                    <label>Max Carbs</label>
                    <input type="number" placeholder="Max grams of carbs" onChange={setCarbohydrates} />
                </div>
            </div>
            <button className="btn--recipe">Generate Recipes</button>
        </div>
    );
}
export default Menu;