import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";

// Css
import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === undefined || password === undefined) {
      alert("Enter Email and Password");
    } else {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      props.history.push(""); // Push to home after login succefully
    }
  };
  return (
    <>
      <NavBar />
      <div className="login-div">
        <form className="login-form">
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Valid Email"
              className="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Valid Password"
              className="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="btn"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
