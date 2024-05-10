import React, { useState } from "react";

import "./MenuPage.css"; // Import the css 
import MealList from "/Users/timkim/Desktop/CMPE133/Recipe-Radar/spoonapp/src/components/MealList.js";

function Menu(){
    const[mealData, setMealData] = useState(null);
    const[calories, setCals] = useState(2000);
    const[protein, setPro] = useState(50);
    const[fiber, setFib] = useState(20);
    const[carbs, setCarbs] = useState(50);
    
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
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }
    
    function getMealData() {
        console.log("Generate Button Pressed");
        const apiUrl = `https://api.spoonacular.com/mealplanner/generate?apiKey=51c124678cae4f6f9fed542b9ffa49d7&timeFrame=day&maxCalories=${calories}&maxProtein=${protein}&maxFiber=${fiber}&maxCarbs=${carbs}&number=10`;
    
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('API Response:', data);  // Check the structure of data
                if (data.meals && Array.isArray(data.meals)) {
                    shuffleArray(data.meals); // Shuffle the meals array
                    setMealData(data.meals);
                } else {
                    console.error("Expected 'data.meals' to be an array, got:", data);
                }
            })
            .catch(error => {
                console.log("Error fetching data: ", error);
            });
    }    
   
    return(
        <div>
            <section>
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
                <button className="btn--recipe" onClick={getMealData}>Generate Recipes</button>
                </div>
        </section>
        {mealData && <MealList mealData={mealData} />}
    </div>
    );
}
export default Menu;