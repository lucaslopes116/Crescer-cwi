import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import cadastrosPassageiro from './scenes/cadastros/cadastrosPassageiro/cadastrosPassageiro';
import cadastroMotoristas from './scenes/cadastros/cadastrosMotoristas/cadastrosMotoristas';
import cadastrosVeiculo from './scenes/cadastros/cadastrosVeiculo/cadastrosVeiculo';
import deletarMotorista from './scenes/deletar/deletarMotorista/deletarMotorista';
import listarPassageiro from './scenes/listar/listarPassageiro/listarPassageiro';
import listarMotorista from './scenes/listar/listarMotorista/listarMotorista';
import listarVeiculo from './scenes/listar/listarVeiculo/listarVeiculo';
import chamarCorrida from './scenes/corridas/chamarCorrida/chamarCorrida';
import iniciarCorrida from './scenes/corridas/iniciarCorrida/iniciarCorrida';
import finalizarCorrida from './scenes/corridas/finalizarCorrida/finalizarCorrida';
import listarCorrida from './scenes/corridas/listarCorrida/listarCorrida';
import depositoPassageiro from './scenes/contaVirtual/contaVirtualPassageiro/depositoPassageiro';
import saqueMotorista from './scenes/contaVirtual/contaVirtualMotorista/saqueMotorista';
import avaliarPassageiro from './scenes/corridas/avaliarCorrida/avaliarPassageiro/avaliarPassageiro';
import avaliarMotorista from './scenes/corridas/avaliarCorrida/avaliarMotorista/avaliarMotorista';
import login from './scenes/login/login';
import './App.css';

class App extends Component {
  render(){
    return(<Fragment>         
            
            <Route component={cadastrosPassageiro} path="/passageiros" exact/>
            <Route component={cadastroMotoristas} path="/motoristas" />
            <Route component={cadastrosVeiculo} path="/veiculos" />
            <Route component={deletarMotorista} path="/deletar"/> 
            <Route component={listarPassageiro} path="/listarPassageiro" /> 
            <Route component={listarMotorista} path="/listarMotorista" /> 
            <Route component={listarVeiculo} path="/listarVeiculo" /> 
            <Route component={chamarCorrida} path="/chamarCorrida" /> 
            <Route component={iniciarCorrida} path="/iniciarCorrida" /> 
            <Route component={finalizarCorrida} path="/finalizarCorrida" />
            <Route component={listarCorrida} path="/listarCorrida" />
            <Route component={depositoPassageiro} path="/depositoPassageiro" />
            <Route component={saqueMotorista} path="/saqueMotorista" />
            <Route component={avaliarPassageiro} path="/avaliarPassageiro" />
            <Route component={avaliarMotorista} path="/avaliarMotorista" />
            <Route component={cadastrosPassageiro} path="/" exact/>
            <Route component={login} path="/login" />            
        </Fragment>
    )
  }
}

export default App;
