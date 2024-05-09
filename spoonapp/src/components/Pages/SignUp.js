import React, { useState } from "react";
import "./SignUp.css"; // Import the css
import { auth, database} from "../../firebase/firebaseConfig";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {setDoc, doc} from "firebase/firestore";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp(){
    
    const[email, setEmail] = useState("");
    const[emailError, setEmailError] = useState("");
    const[password, setPass] = useState("");

    function setUserEmail(email) {
        setEmail(email.target.value)
    }
    function validateEmail() {
        if (!email.includes('@')) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    }
    function setPassword(password) {
        setPass(password.target.value)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        if(user){
            await setDoc(doc(database, "Users", user.uid),{
                Email: user.email,
               // Password: password,
                isVegetarian: false,
                 isVegan: false,
                 isGlutenFree: false,
                 isKetogenic: false,
                 isPescetarian: false,
                 hasPeanuts: false,
                 hasTreeNuts: false,
                 hasSoy: false,
                 hasMilk: false,
                 hasEggs: false,
                 hasWheat: false,
                 hasFish: false,
                 hasShellFish: false,
                 hasSeasame: false,
            })
        }
        console.log("User registered successfully.")
        toast.success("User Registered Successfully!",{
            position: "top-center",
        })
        }
        catch (error){
            console.log(error.message);
            toast.success(error.message,{
                position: "bottom-center",
            })
        }
        //add try catch for handling submit, if exception is caught then set state of setEmailError; if not, redirect
    }
    return(
        <div> 
            <br></br>
            <div className="signup-container">
                <div className="signup-form-section">
                    <center><h2>Create Account</h2></center>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={setUserEmail}
                            onBlur={validateEmail}
                        />
                        <center>{emailError && <div style={{ color: 'red' }}>{emailError}</div>}</center>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={setPassword}
                        />
                        <button type="submit" className="create-account">Create Account</button>
                    </form>
                    <div className="login-link">
                        Already have an account? <a href="/Login">Login</a>
                    </div>
                </div>
                <div className="signup-info-section">
                    <p className="signup-header-text"> <b>Recipe Radar</b> </p>
                    <p className="signup-subtext">Where Daily Recipes are Simplified</p>
                </div>
            </div>
        </div>
    );
}
export default SignUp;