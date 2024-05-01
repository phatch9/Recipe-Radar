import React, { useState } from "react";
import "/Users/ryantang/CMPE133/Recipe-Radar/spoonapp/src/components/Pages/AccountPage.css"; // Import the css 

function AccountPage() {
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isKetogenic, setIsKetogenic] = useState(false);
    const [isPescetarian, setIsPescetarian] = useState(false);
    const [noPreference, setNoPreference] = useState(false);
    const [hasPeanuts, setHasPeanuts] = useState(false);
    const [hasSoy, setHasSoy] = useState(false);
    const [hasMilk, setHasMilk] = useState(false);
    const [hasEggs, setHasEggs] = useState(false);
    const [hasWheat, setHasWheat] = useState(false);
    const [hasTreeNuts, setHasTreeNuts] = useState(false);
    const [hasFish, setHasFish] = useState(false);
    const [hasShellFish, setHasShellFish] = useState(false);
    const [hasSesame, setHasSesame] = useState(false);

    return (
        <div className="preferences">
            <div className="account-details">
                <h2 className="header-underline">Food Allergens:</h2>
                <p>Username: TestUser1</p>
                <p>Email: user1@gmail.com</p>
            </div>
            <div>
                <h2 className="header-underline">Dietary Preference:</h2>
                <label><input type="checkbox" checked={isVegetarian} onChange={() => setIsVegetarian(!isVegetarian)} /> Vegetarian </label>
                <label><input type="checkbox" checked={isVegan} onChange={() => setIsVegan(!isVegan)} /> Vegan</label>
                <label><input type="checkbox" checked={isGlutenFree} onChange={() => setIsGlutenFree(!isGlutenFree)} /> Gluten Free</label>
                <label><input type="checkbox" checked={isKetogenic} onChange={() => setIsKetogenic(!isKetogenic)} /> Ketogenic</label>
                <label><input type="checkbox" checked={isPescetarian} onChange={() => setIsPescetarian(!isPescetarian)} /> Pescetarian</label>
                <label><input type="checkbox" checked={noPreference} onChange={() => setNoPreference(!noPreference)} /> No Preference</label>
            </div>
            <div>
                <h2 className="header-underline">Food Allergens:</h2>
                <label><input type="checkbox" checked={hasPeanuts} onChange={() => setHasPeanuts(!hasPeanuts)} /> Peanuts</label>
                <label><input type="checkbox" checked={hasTreeNuts} onChange={() => setHasTreeNuts(!hasTreeNuts)} /> Tree Nuts</label>
                <label><input type="checkbox" checked={hasSoy} onChange={() => setHasSoy(!hasSoy)} /> Soy</label>
                <label><input type="checkbox" checked={hasMilk} onChange={() => setHasMilk(!hasMilk)} /> Milk</label>
                <label><input type="checkbox" checked={hasEggs} onChange={() => setHasEggs(!hasEggs)} /> Eggs</label>
                <label><input type="checkbox" checked={hasWheat} onChange={() => setHasWheat(!hasWheat)} /> Wheat</label>
                <label><input type="checkbox" checked={hasFish} onChange={() => setHasFish(!hasFish)} /> Fish</label>
                <label><input type="checkbox" checked={hasShellFish} onChange={() => setHasShellFish(!hasShellFish)} /> Shellfish</label>
                <label><input type="checkbox" checked={hasSesame} onChange={() => setHasSesame(!hasSesame)} /> Sesame</label>
            </div>
        </div>
    );
}

export default AccountPage;