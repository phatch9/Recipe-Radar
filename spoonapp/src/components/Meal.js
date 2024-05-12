import React, { useState, useEffect } from "react";
import "./Meal.css"; // Import the css

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");
    const [readyInMinutes, setReadyInMinutes] = useState('');
    const [servings, setServings] = useState('');
    const [sourceUrl, setSourceUrl] = useState("");  // Renamed to use the correct API field

    useEffect(() => {
        if (meal && meal.id) {
            const url = `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=64f5e7990ea442e6b3f5587af154aa71&includeNutrition=false`;
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("API data:", data); // Log the whole response to see its structure
                    setImageUrl(data.image || '/default-placeholder.png');
                    setReadyInMinutes(data.readyInMinutes);
                    setServings(data.servings);
                    setSourceUrl(data.spoonacularSourceUrl || '#'); // Changed to 'spoonacularSourceUrl'
                })
                .catch(error => {
                    console.log("Error fetching image data: ", error);
                    setImageUrl('/default-placeholder.png'); // Fallback image
                    setSourceUrl('#'); // Fallback URL
                });
        }
    }, [meal.id]);

    const handleGoToRecipe = () => {
        if (sourceUrl && sourceUrl !== '#') {
            window.open(sourceUrl, '_blank');
        } else {
            console.log("No valid URL provided.");
            
        }
    };

    return (
        //Returns final version of the recipe for the user
        <article>
            <center><b><div className="meal-title">{meal.title}</div></b></center>
            <img src={imageUrl} alt={meal.title || "Recipe Image"} />
            <ul className="instructions">
                <li>Preparation time: {readyInMinutes ? `${readyInMinutes} minutes` : 'N/A'}</li>
                <li>Number of servings: {servings ? servings : 'N/A'}</li>
            </ul>
            <center> <button onClick={handleGoToRecipe} className="go-to-recipe">Go to Recipe</button></center>
        </article>
    );
}