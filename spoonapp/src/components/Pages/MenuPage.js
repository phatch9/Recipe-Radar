import React, { useState, useEffect } from "react";
import { auth, database } from "../../firebase/firebaseConfig"; // Assuming path is correct
import { doc, getDoc } from "firebase/firestore";
import "./MenuPage.css";
import MealList from "../MealList";

function MenuPage() {
    //Setters of updating values for 4 paramters (calories, protein, fiber, and carbs)
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    const [protein, setProtein] = useState(50);
    const [fiber, setFiber] = useState(20);
    const [carbs, setCarbs] = useState(50);
    const [loggedIn, setIsLoggedIn] = useState(false);
    const [userPreferences, setUserPreferences] = useState({
        allergens: [],
        diet: []
    });

    useEffect(() => {
        const fetchPreferences = async () => {
            const user = auth.currentUser;
            if (user) {
                const docRef = doc(database, "Users", user.uid);
                const docSnap = await getDoc(docRef); //Stores all the data of a user that's signed in
                if (docSnap.exists()) {
                    const data = docSnap.data(); //Retrieving only the fields and their values for a user
                    setUserPreferences({
                        //Getting and setting values of user preferences
                        allergens: [
                            ...(data.hasPeanuts ? ["Peanuts"] : []),
                            ...(data.hasSoy ? ["Soy"] : []),
                            ...(data.hasMilk ? ["Milk"] : []),
                            ...(data.hasEggs ? ["Egg"] : []),
                            ...(data.hasWheat ? ["Wheat"] : []),
                            ...(data.hasTreeNuts ? ["Tree Nut"] : []),
                            ...(data.hasFish ? ["Fish"] : []),
                            ...(data.hasShellFish ? ["Shellfish"] : []),
                            ...(data.hasSesame ? ["Sesame"] : []),
                        ],
                        diet: [
                            ...(data.isVegetarian ? ["Vegetarian"] : []),
                            ...(data.isVegan ? ["Vegan"] : []),
                            ...(data.isGlutenFree ? ["Gluten Free"] : []),
                            ...(data.isKetogenic ? ["Ketogenic"] : []),
                            ...(data.isPescetarian ? ["Pescetarian"] : []),
                        ]
                    });
                    setIsLoggedIn(true);
                } else {
                    console.log("No user data found");
                }
            }
        };

        fetchPreferences();
    }, []);

    function shuffleArray(array) {
        //Shuffling generated recipes
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    function getMealData() {
        //API call to retrieve a recipe based off user's saved criteria
        if(loggedIn){
            const apiUrl = `https://api.spoonacular.com/mealplanner/generate?apiKey=64f5e7990ea442e6b3f5587af154aa71&timeFrame=day&intolerances=${userPreferences.allergens.join(',')}&diet=${userPreferences.diet.join(',')}&maxCalories=${calories}&maxProtein=${protein}&maxFiber=${fiber}&maxCarbs=${carbs}&number=10`;
        
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); //Error case: invalid response
                }
                return response.json();
            })
            .then(data => { //Gathers data from API response, shuffles them, and puts them to display in an array
                console.log('API Response:', data);
                if (data.meals && Array.isArray(data.meals)) {
                    shuffleArray(data.meals); 
                    setMealData(data.meals);
                } else {
                    console.error("Expected 'data.meals' to be an array, got:", data);
                }
            })
            .catch(error => {
                console.log("Error fetching data: ", error);
            });
        }
        else{
            return;
        }
    }

    return (
        <div>
            <section>
                {/* Elements for the boxes to input parameters for fiber, calories, protein, and carbs*/}
                <div className="user_inputs">
                    <center><div className="header--text">Find the Perfect Recipe for You!</div></center>
                    <div className="input--grid">
                        <div className="input-container">
                            <label>Max Calories</label>
                            <input type="number" placeholder="Max # of calories" onChange={(e) => setCalories(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Max Protein</label>
                            <input type="number" placeholder="Max grams of protein" onChange={(e) => setProtein(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Max Fiber</label>
                            <input type="number" placeholder="Max grams of fiber" onChange={(e) => setFiber(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Max Carbs</label>
                            <input type="number" placeholder="Max grams of carbs" onChange={(e) => setCarbs(e.target.value)} />
                        </div>
                    </div>
                    {/* Button function to generate recipes */}
                    <button className="btn--recipe" onClick={getMealData}>Generate Recipes</button>
                </div>
            </section>
            {mealData && <MealList mealData={mealData} />}
        </div>
    );
}

export default MenuPage;
