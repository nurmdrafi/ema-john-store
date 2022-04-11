import "./SignUp.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../../images/google.svg";

import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  const navigate = useNavigate();

  const [ createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  
  const handleEmail = (e) => {
    if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
      setEmail({ value: "", error: "Please provide valid email." });  
    } else{
      setEmail({ value: e.target.value, error: "" });
    }
  };

  const handlePassword = (e) => {
      if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(e.target.value)){
      setPassword({ value: e.target.value, error: "Your password should contain at least one uppercase, one lowercase, one numeric, one special character and minimum 8 characters." });    
    } else{
      setPassword({ value: e.target.value, error: "" });
    }
  };

  const handleConfirmPassword = (e) => {
      if(password.value !== e.target.value){
        setConfirmPassword({ value: "", error: "Your password did not match." });  
      }
       else{
      setConfirmPassword({ value: e.target.value, error: "" });
    }
    
  };

  const handleUserSignUp = (e) =>{
    e.preventDefault();
    if(email.value !== "" && password.value !== "" && password.value === confirmPassword.value){
      createUserWithEmailAndPassword(email.value, password.value)
      .then(() =>
      console.log(user)
      )
      .catch(error =>{
        console.error(error.message)
      })
    }

    if(user){
      return navigate('/shop');
    }
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleUserSignUp}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id="email"
              required
            />
            <p style={{color: 'red', width: '415px'}}>{email.error}</p>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              id="password"
              required
            />
            <p style={{color: 'red', width: '415px'}}>{password.error}</p>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPassword}
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
            />
            <p style={{color: 'red', width: '415px'}}>{confirmPassword.error}</p>
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
          <fieldset>
            <legend>or</legend>
          </fieldset>
        </form>
        <button className="google-btn" type="submit">
          <img src={googleLogo} alt="" /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
