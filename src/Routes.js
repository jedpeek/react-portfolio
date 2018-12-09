import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './containers/Login'
import App from './App'

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
);

export default Routes ;
