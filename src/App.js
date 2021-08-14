import React from "react";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./Components/Home/Home";
import Task from "./Components/Tasks/Task";
import User from "./Components/User/User";
import Login from "./Components/Login/Login";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/task">
          <Task />
        </Route>
        {/* user */}
        <Route exact path="/user" render={(props) => <User {...props} />} />
        {/* user */}
        {/* Login */}
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        {/* Login */}
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
