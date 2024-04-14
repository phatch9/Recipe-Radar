import React, { useState } from "react";
import '../../App.css';
import "./Menu.css"; // Import the css 

function Menu(){
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