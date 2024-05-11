import React, { useState } from "react";
import "./Login.css"; // Import the css 
import { auth} from "../../firebase/firebaseConfig";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {toast} from "react-toastify";
import { useHistory } from "react-router-dom";
function Login(){
    const[email, setEmail] = useState("");
    const[emailError, setEmailError] = useState("");
    const[password, setPass] = useState("");
    const [generalError, setGeneralError] = useState(""); // Add general error state
    const history = useHistory();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if (!email || !password) {
          setGeneralError("Please enter your email and password"); // Set general error if fields are empty
        } else {
          // Add any additional login validation here (e.g., API call to authenticate user)
          // If login is successful, navigate to the Account page
          history.push("./AccountPage"); // Navigate to the account page
        }
        try{
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully.");
            toast.success("User logged in successfully!",{
            position: "top-center",
        });
        window.location.href = "/accountpage";
        }
        catch(error){
            console.log(error.message);
            toast.success(error.message,{
                position: "bottom-center",
            })
        }
    }
    function setUserEmail(email) {
        setEmail(email.target.value)
    }
    function validateEmail() { //THIS MIGHT CHANGE To check for user authentication
        if (!email.includes('@')) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    }
    function setPassword(password) {
        setPass(password.target.value)
    }
    return(
        <div> 
            <br></br>
            <div className="login-container">
                <div className="login-form-section">
                    <center><h2>Login</h2></center>
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
                        <button type="submit" className="login-account-btn">Login</button>
                    </form>
                    <div className="sign-up-link">
                        Don't have an account? <a href="/SignUp">Sign Up Here</a>
                    </div>
                </div>
                <div className="login-info-section">
                    <p className="login-header-text"> <b>Recipe Radar</b> </p>
                    <p className="login-subtext">Where Daily Recipes are Simplified</p>
                </div>
            </div>
        </div>
    );
}
export default Login;