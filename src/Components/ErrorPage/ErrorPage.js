import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";

function ErrorPage() {
  return (
    <div>
      <NavBar />
      <h1>404 Error page</h1>
      <button className="btn task-btn goToHome-btn ">
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
}

export default ErrorPage;
