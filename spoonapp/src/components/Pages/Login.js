import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [generalError, setGeneralError] = useState(""); // Add general error state
  const history = useHistory();

  function setUserEmail(event) {
    setEmail(event.target.value);
  }

  function validateEmail() {
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }

  function setUserPassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting

    if (!email || !password) {
      setGeneralError("Please enter your email and password"); // Set general error if fields are empty
    } else {
      // Add any additional login validation here (e.g., API call to authenticate user)
      // If login is successful, navigate to the Account page
      history.push("./AccountPage"); // Navigate to the account page
    }
  }

  return (
    <div>
      <br />
      <div className="login-container">
        <div className="login-form-section">
          <center>
            <h2>Login</h2>
          </center>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={setUserEmail}
              onBlur={validateEmail}
            />
            <center>{emailError && <div style={{ color: "red" }}>{emailError}</div>}</center>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={setUserPassword}
            />
            <center>
              {generalError && <div style={{ color: "red" }}>{generalError}</div>}
            </center>

            <button type="submit" className="login-account-btn">
              Login
            </button>
          </form>
          <div className="sign-up-link">
            Don't have an account? <a href="/SignUp">Sign Up Here</a>
          </div>
        </div>
        <div className="login-info-section">
          <p className="login-header-text">
            <b>Recipe Radar</b>
          </p>
          <p className="login-subtext">Where Daily Recipes are Simplified</p>
        </div>
      </div>
    </div>
  );
}

export default Login;