import React, { useEffect, useState } from "react";
import { auth, database} from "../../firebase/firebaseConfig";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AccountPage.css"; // Import the css 

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
    //const [userData, setUserData] = useState({});
    const [userId, setUserId] = useState("");
    const fetchUserData = async() => {
        auth.onAuthStateChanged(async (user) =>{ // on/off depending on whether user is logged in or not
            const docRef = doc(database, "Users", user.uid); //move user.uid outside to its own variable
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){ //if user exists, set and load user preferences
                console.log(docSnap.data());
                const userData = docSnap.data();
                setIsVegan(userData.isVegan); //sets up locally
                //setIsVegetarian(userData.isVegetarian);
                // setIsGlutenFree(userData.isGlutenFree);
                // setIsKetogenic(userData.isKetogenic);
                // setIsPescetarian(userData.isPescetarian);
                // setHasPeanuts(userData.hasPeanuts);
                // setHasSoy(userData.hasSoy);
                // setHasMilk(userData.hasMilk);
                // setHasEggs(userData.hasEggs);
                // setHasWheat(userData.hasWheat);
                // setHasTreeNuts(userData.hasTreeNuts);
                // setHasFish(userData.hasFish);
                // setHasShellFish(userData.hasShellFish);
                // setHasSesame(userData.hasSesame);
                setUserId(user.uid);
               
            }
            else{
                console.log("User is not logged in.")
            }
        }); 
    };
    const updateUserData = async() =>{ //keyName = isRestriction/Preference, when called, should give opposite and update the field, will check/uncheck
        let data = {}
        let keyName = "isVegetarian";
        switch(keyName){
            case "isVegan":
                data = {"isVegan" : !isVegan};
            // case "isVegetarian":
            //     data = {"isVegetarian" : isVegetarian};
            // case "isGlutenFree":
            //     data = {"isGlutenFree" : !isGlutenFree};
            // case "isKetogenic":
            //     data = {"isKetogenic" : !isKetogenic};
            // case "isPescetarian":
            //     data = {"isPescetarian" : !isPescetarian};
            // case "hasPeanuts":
            //     data = {"hasPeanuts" : !hasPeanuts};
            // case "hasSoy":
            //     data = {"hasSoy" : !hasSoy};
            // case "hasMilk":
            //     data = {"hasMilk" : !hasMilk};
            // case "hasEggs":
            //     data = {"hasEggs" : !hasEggs};
            // case "hasWheat":
            //     data = {"hasWheat" : !hasWheat};
            // case "hasTreeNuts":
            //     data = {"hasTreeNuts" : !hasTreeNuts};
            // case "hasFish":
            //     data = {"hasFish" : !hasFish};
            // case "hasShellFish":
            //     data = {"hasShellFish" : !hasShellFish};
        }
        const docRef = doc(database, "Users", userId);
        await updateDoc(docRef, data);
        console.log("working")
    };
    
    useEffect(() =>{
        fetchUserData()
    },[])
    
    return (
        <div className="preferences">
            <div className="account-details">
                <h2 className="header-underline">Account Details:</h2>
                <p>Username: TestUser1</p>
                <p>Email: 
                </p>
            </div>
            <div>
                <h2 className="header-underline">Dietary Preference:</h2>
                <label><input type="checkbox" checked={isVegetarian} onChange={() => setIsVegetarian(!isVegetarian)} /> Vegetarian </label>
                <label><input type="checkbox" checked={isVegan} onChange={() => { updateUserData("isVegan"); setIsVegan(!isVegan);} }/> Vegan</label>
                <label><input type="checkbox" checked={isGlutenFree} onChange={() => setIsGlutenFree(!isGlutenFree)} /> Gluten Free</label>
                <label><input type="checkbox" checked={isKetogenic} onChange={() => setIsKetogenic(!isKetogenic)} /> Ketogenic</label>
                <label><input type="checkbox" checked={isPescetarian} onChange={() => setIsPescetarian(!isPescetarian)} /> Pescetarian</label>
                {/* <label><input type="checkbox" checked={noPreference} onChange={() => setNoPreference(!noPreference)} /> No Preference</label> */}
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