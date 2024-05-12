import React, { useState } from "react";
import { auth, database } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore";
import { useHistory } from "react-router-dom"; // Import useHistory hook for navigation
import "./SignUp.css"; // Import the css

function SignUp() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // State for success message
    const history = useHistory(); // Initialize useHistory
    const setUserEmail = (email) => {
        setEmail(email.target.value);
    };
    //Checks for a valid email input from the user
    const validateEmail = () => {
        if (!email.includes('@')) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    const setPasswordValue = (password) => {
        setPassword(password.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password); //Creates a new user from the inputted email and password
            const user = userCredential.user;
            if (user) {
                //Presets all preferences to be false
                await setDoc(doc(database, "Users", user.uid), {
                    Email: user.email,
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
                });
                setSuccessMessage("Account created successfully"); // Set success message
                setTimeout(() => {
                    history.push("/AccountPage"); // Navigate to login page after 3 seconds
                }, 3000);
            }
           
        } catch (error) {
            console.error(error.message);
            // Handle error if needed
        }
    };

    return (
        <div>
            <br />
            {/* Creation of sign up section (left side of the page)*/}
            <div className="signup-container">
                <div className="signup-form-section">
                    <center><h2>Create Account</h2></center>
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {/* If account is created successfully, sets email*/}
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={setUserEmail}
                            onBlur={validateEmail}
                        />
                        {/* Displays email error if error apepars*/}
                        <center>{emailError && <div style={{ color: 'red' }}>{emailError}</div>}</center>
                        {/* If account is created successfully, sets password*/}
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={setPasswordValue}
                        />
                        <button type="submit" className="create-account">Create Account</button>
                    </form>
                    <div className="login-link">
                        Already have an account? <a href="/Login">Login</a>
                    </div>
                </div>
                {/* Creation of sign up title (right side of the page)*/}
                <div className="signup-info-section">
                    <p className="signup-header-text"> <b>Recipe Radar</b> </p>
                    <p className="signup-subtext">Where Daily Recipes are Simplified</p>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
