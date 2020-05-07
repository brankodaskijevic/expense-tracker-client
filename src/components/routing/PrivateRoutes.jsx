import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as Cookie from 'es-cookie'

const isLoggedIn = () => {
  return Cookie.get('token') !== undefined
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => !isLoggedIn() ? (<Redirect to='/login' />) : (<Component {...props} />)} />
)

export default PrivateRoute
