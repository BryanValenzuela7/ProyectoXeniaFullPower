import React, {Component, useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/auth'

const PrivateRoute = ({ component: Component, ...rest}) =>{
    const { user } = userContext(AuthContext)


    const render = props => {
        if(!isAuthenticated) {
            return <Redirect to="/login"/>
        }

        return <Component {...props}/>
    }

    return <Route {...rest} render={render}/>
}

export default PrivateRoute;