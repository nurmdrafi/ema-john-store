import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../images/google.svg";
import auth from "../../../src/firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";



const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [showError, setShowError] = useState("");

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user,
    loading,
    error,] = useSignInWithEmailAndPassword(auth);

  
  
  const handleEmail = (e) => {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setEmail({ value: "", error: "Please provide valid email." });
    } else {
      setEmail({ value: e.target.value, error: "" });
    }
  };

  const handlePassword = (e) => {
    if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        e.target.value
      )
    ) {
      setPassword({
        value: "",
        error:
          "Your password should contain at least one uppercase, one lowercase, one numeric, one special character and minimum 8 characters.",
      });
    } else {
      setPassword({ value: e.target.value, error: "" });
    }
  };

  const handleUserLogIn = (e) => {
    e.preventDefault();
    if(email.value !== "" && password.value !== ""){
      signInWithEmailAndPassword(email.value, password.value)
    }
  };

  useEffect(() => {

    if (user) {
      navigate('/shop');
    }

    if(error){
      console.log(error)
      const message = error.message;
      if(message.includes("user-not-found")){
        setShowError("User Not Found")
      } else if(message.includes("wrong-password")){
        setShowError("Wrong Password")
      }
    }
  
  }, [user, error])

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onClick={handleUserLogIn}>
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
             <p style={{color: 'red', width: '415px'}}>{showError}</p>
          </div>
          <input className="form-submit" type="submit" value="Login" />
          <p style={{ textAlign: "center" }}>
            New to Ema-John?{" "}
            <Link className="form-link" to="/signup">
              Create New Account
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

export default Login;
