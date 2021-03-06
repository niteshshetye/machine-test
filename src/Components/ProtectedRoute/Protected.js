import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const Protected = ({component:Component,...rest}) =>(
    <Route
    {...rest}
    render={(props)=>
        localStorage.getItem('user')? (
            <Component {...props} />
        ) : 
        (
            <Redirect to="/login" />
        )
    } 
    />
)

export default Protected;