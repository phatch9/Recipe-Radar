import React, { useState } from "react";
import "/Users/timkim/Desktop/CMPE133/Recipe-Radar/spoonapp/src/components/Pages/SignUp.css"; // Import the css 

function SignUp(){
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[emailError, setEmailError] = useState("");
    const[password, setPass] = useState("");

    function setUser(username) {
        setUsername(username.target.value)
    }
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
    return(
        <div> 
            <br></br>
            <div className="signup-container">
                <div className="signup-form-section">
                    <center><h2>Create Account</h2></center>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={setUser}
                        />
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