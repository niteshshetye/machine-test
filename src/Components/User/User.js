import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";

import { Redirect } from "react-router-dom";

function User(props) {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("user"));
    console.log(users);
    setEmail(users.email);
    setPassword(users.password);
  }, []);

  const handleChangePassowrd = (e) => {
    e.preventDefault();
    setPassword("");
    setShow(false);
  };

  const handleSavePassowrd = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    setShow(true);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    props.history.push("/login");
  };
  return (
    <>
      <NavBar />
      <div className="user-div">
        <header>
          <h2>Welcome to our Website !</h2>
        </header>
        <div className="login-div">
          <form className="login-form">
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Valid Email"
                className="email"
                value={email}
                readOnly
              />
            </div>
            {/* changes */}
            {show ? (
              <div className="form-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Valid Password"
                  className="password"
                  value={password}
                />
              </div>
            ) : (
              <div className="form-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Valid Password"
                  className="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            )}
            {show ? (
              <button
                type="submit"
                onClick={(e) => {
                  handleChangePassowrd(e);
                }}
                className="btn"
              >
                Change Password
              </button>
            ) : (
              <button
                type="submit"
                onClick={(e) => {
                  handleSavePassowrd(e);
                }}
                className="btn"
              >
                Save Password
              </button>
            )}
            {/* changes */}
            <button
              type="submit"
              onClick={(e) => {
                handleLogout(e);
              }}
              className="btn"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default User;
