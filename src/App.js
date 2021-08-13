import React from 'react'

// React Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Pages
import Home from './Components/Home/Home'
import Task from './Components/Tasks/Task'
import User from './Components/User/User'
import ErrorPage from './Components/ErrorPage/ErrorPage'

// NavBar
import NavBar from './Components/NavBar/NavBar'


const App = () => { 
    return  (
    <Router>
        <NavBar />
        <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/task'><Task /></Route>
            <Route exact path='/user'><User /></Route>
            <Route path='*'><ErrorPage /></Route>
        </Switch>
    </Router>
    )
}

export default App