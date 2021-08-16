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
<<<<<<< HEAD
import Protected from "./Components/ProtectedRoute/Protected";

// import css
import "./app.css";
=======
import Protected from './Components/ProtectedRoute/Protected'
>>>>>>> faa7e300e78c5621d1ec221d08eb40f994faaf2c

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Cant access this routes without login */}
        <Protected exact path="/" component={Home} />
        <Protected exact path="/task" component={Task} />
<<<<<<< HEAD
        <Protected exact path="/user" component={User} />
        {/* Cant access this routes without login */}

        {/* Login */}
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        {/* Login */}

=======
        {/* Cant access this routes without login */}


        {/* user */}
        <Route exact path="/user" render={(props) => <User {...props} />} />
        {/* user */}
        
        {/* Login */}
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        {/* Login */}
        
>>>>>>> faa7e300e78c5621d1ec221d08eb40f994faaf2c
        {/* 404 page */}
        <Route path="*">
          <ErrorPage />
        </Route>
        {/* 404 page */}
<<<<<<< HEAD
=======

>>>>>>> faa7e300e78c5621d1ec221d08eb40f994faaf2c
      </Switch>
    </Router>
  );
};

export default App;
