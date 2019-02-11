import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import Login from './screen/login/Login'
import Dashboard from './screen/dashboard/Dashboard'
import Registro from './screen/registro/Registro'
import BuscarAmigos from './screen/BuscarAmigos/BuscarAmigos'
import './App.css';

class App extends Component {
  render() {
    return(<Fragment>
      <Route component={Dashboard} path="/dashboard" />      
      <Route component={Login} path="/login" />
      <Route component={Registro} path="/registrar" />
      <Route component={BuscarAmigos} path="/buscarAmigos" />
      <Route component={Login} path="/" exact/>            
  </Fragment>
)
}
}

export default App;
