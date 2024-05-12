import React, { useState } from "react";

import "./Menu.css"; // Import the css 

function Menu(){
  //Retrieval and setters for parameters of a menu
    const [mealData, setMealData] = useState(null);
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
      {/* Function to find meal data for correct criteria*/}
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=64f5e7990ea442e6b3f5587af154aa71&timeFrame=day&targetCalories=${calories}` 
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
      //Creation of 4 parameter user input boxes
        <div className = "user_inputs">
            <section className = "selection">
                <input
                type = "number"
                placeholder="Max # of calories"
                onChange={setCalories}
                />
                <button>Enter</button>
            </section>
            <section className = "selection">
                <input
                type = "number"
                placeholder="Max grams of protein"
                onChange={setProtein}
                />
                <button>Enter</button>
            </section>
            <section className = "selection">
                <input
                type = "number"
                placeholder="Max grams of fiber"
                onChange={setFiber}
                />
                <button>Enter</button>
            </section>
            <section className = "selection">
                <input
                type = "number"
                placeholder="Max grams of carbs"
                onChange={setCarbohydrates}
                />
                <button>Enter</button>
            </section>
        </div>
    );
}
export default Menu;