import React from "react";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./Components/Home/Home";
import Task from "./Components/Tasks/Task";
import User from "./Components/User/User";
import Login from "./Components/Login/Login";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

// Protected Route
import Protected from "./Components/ProtectedRoute/Protected";

// import css
import "./app.css";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Cant access this routes without login */}
        <Protected exact path="/" component={Home} />
        <Protected exact path="/task" component={Task} />
        <Protected exact path="/user" component={User} />
        {/* Cant access this routes without login */}

        {/* Login */}
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        {/* Login */}

        {/* 404 page */}
        <Route path="*">
          <ErrorPage />
        </Route>
        {/* 404 page */}
      </Switch>
    </Router>
  );
};

export default App;
