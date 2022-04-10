import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import googleLogo from "../../images/google.svg"

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form >
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required/>
          </div>
          <input className="form-submit" type="submit" value="Login" />
        <p style={{textAlign: 'center'}}>New to Ema-John? <Link className="form-link" to="/signup">Create New Account</Link></p>
        <fieldset>
            <legend>or</legend>
        </fieldset>
        </form>
        <button className="google-btn" type="submit"><img src={googleLogo} alt="" /> Continue With Google</button>
      </div>
    </div>
  );
};

export default Login;
