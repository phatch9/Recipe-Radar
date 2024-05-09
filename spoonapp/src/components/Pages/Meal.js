import React, { useState, useEffect } from "react";
import "./Meal.css"; // Import the css

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");
    const [readyInMinutes, setReadyInMinutes] = useState('');
    const [servings, setServings] = useState('');
    const [sourceUrl, setSourceUrl] = useState("");

    useEffect(() => {
        if (meal && meal.id) {
            const url = `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=baa02e633f0644c4901fd0fb28f4b177&includeNutrition=false`;
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setImageUrl(data.image || '/default-placeholder.png');
                    setReadyInMinutes(data.readyInMinutes);
                    setServings(data.servings);
                    setSourceUrl(data.sourceUrl); // Store the source URL in the state
                })
                .catch(error => {
                    console.log("Error fetching image data: ", error);
                    setImageUrl('/default-placeholder.png');
                });
        }
    }, [meal.id]);

    const handleGoToRecipe = () => {
        if (sourceUrl) {
            window.open(sourceUrl, '_blank');
        } else {
            console.log("No valid URL provided.");
        }
    };

    return (
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