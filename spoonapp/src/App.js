import React, { useState } from "react";
import MealList from "./MealList";
import Navbar from "./components/Navbar.js";
import Menu from "./components/Menu.js";
import HeroSection from "./components/HeroSection.js";
function App() {
  // const [mealData, setMealData] = useState(null);
  // const [calories, setCalories] = useState(2000);

  // function getMealData() {
  //   fetch(
  //     `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMealData(data);
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });
  // }

  // function handleChange(e) {
  //   setCalories(e.target.value);
  // }

  return (
    // <div className="App">
    //   <section className="controls">
    //     <input
    //       type="number"
    //       placeholder="Calories (e.g. 2000)"
    //       onChange={handleChange}
    //     />
    //     <button onClick={getMealData}>Get Daily Meal Plan</button>
    //   </section>
    //   {mealData && <MealList mealData={mealData} />}
    // </div>
    <div className = "App">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}

export default App;