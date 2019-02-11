import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import   './menu.css'

class Menu extends Component {

    constructor(){
        super()
        this.state ={
            deveRedirecionarParaMotoristas : false, 
            deveRedirecionarParaPassageiros : false, 
            deveRedirecionarParaVeiculos : false, 
            deveRedirecionarParaCorridas : false, 
            deveRedirecionarParaDeletarMotorista : false, 
            deveRedirecionarParaListarPassageiro : false,  
            deveRedirecionarParaListarMotorista : false, 
            deveRedirecionarParaListarVeiculo : false, 
            deveRedirecionarParaChamarCorrida  : false,
            deveRedirecionarParaIniciarCorrida : false, 
            deveRedirecionarParaFinalizarCorrida : false, 
            deveRedirecionarParaListarCorrida : false,
            deveRedirecionarParaDepositoPassageiro : false, 
            deveRedirecionarParaSaqueMotorista : false, 
            deveRedirecionarParaAvaliarPassageiro : false, 
            deveRedirecionarParaAvaliarMotorista : false
        }
        
    }

        irParaMotoristas = () =>{
            this.setState({
                deveRedirecionarParaMotoristas: true
            })
            }

        irParaPassageiros = () =>{
        this.setState({
            deveRedirecionarParaPassageiros: true
            })
            }

        irParaVeiculos = () =>{
        this.setState({
            deveRedirecionarParaVeiculos: true
        })
        }

        irParaDeletarMotorista = () =>{
            this.setState({
                deveRedirecionarParaDeletarMotorista: true
            })
            }

        irParaListarPassageiro = () =>{
        this.setState({
            deveRedirecionarParaListarPassageiro: true
            })
            }

        irParaListarMotorista = () =>{
        this.setState({
            deveRedirecionarParaListarMotorista: true
        })
        }

        irParaListarVeiculo = () =>{
            this.setState({
                deveRedirecionarParaListarVeiculo: true
                })
                }

        irParaChamarCorrida = () =>{
        this.setState({
            deveRedirecionarParaChamarCorrida: true
        })
        }

        irParaIniciarCorrida = () =>{
            this.setState({
                deveRedirecionarParaIniciarCorrida: true
            })
            }
    
        irParaFinalizarCorrida = () =>{
            this.setState({
                deveRedirecionarParaFinalizarCorrida: true
                })
                }

        irParaListarCorrida = () =>{
        this.setState({
            deveRedirecionarParaListarCorrida: true
        })
        }

        irParaAvaliarPassageiro = () =>{
            this.setState({
                deveRedirecionarParaAvaliarPassageiro: true
                })
                }

        irParaAvaliarMotorista = () =>{
        this.setState({
            deveRedirecionarParaAvaliarMotorista: true
        })
        }

        irParaDepositoPassageiro = () =>{
            this.setState({
                deveRedirecionarParaDepositoPassageiro: true
                })
                }

        irParaSaqueMotorista = () =>{
        this.setState({
            deveRedirecionarParaSaqueMotorista: true
        })
        }
    

    render() {
        return (this.state.deveRedirecionarParaMotoristas ? <Redirect to="/motoristas"/> :
                this.state.deveRedirecionarParaPassageiros ? <Redirect to="/passageiros"/> :
                this.state.deveRedirecionarParaVeiculos ? <Redirect to="/veiculos"/> :                
                this.state.deveRedirecionarParaDeletarMotorista ? <Redirect to="/deletar"/> :
                this.state.deveRedirecionarParaListarPassageiro ? <Redirect to="/listarPassageiro" /> :
                this.state.deveRedirecionarParaListarMotorista ? <Redirect to="/listarMotorista" /> : 
                this.state.deveRedirecionarParaListarVeiculo ? <Redirect to="/listarVeiculo" /> : 
                this.state.deveRedirecionarParaChamarCorrida ? <Redirect to="/chamarCorrida" /> : 
                this.state.deveRedirecionarParaIniciarCorrida ? <Redirect to="/iniciarCorrida" /> : 
                this.state.deveRedirecionarParaFinalizarCorrida ? <Redirect to="/finalizarCorrida" /> :
                this.state.deveRedirecionarParaListarCorrida ? <Redirect to="/listarCorrida" /> :
                this.state.deveRedirecionarParaDepositoPassageiro ? <Redirect to="/depositoPassageiro" /> :
                this.state.deveRedirecionarParaSaqueMotorista ? <Redirect to="/saqueMotorista" /> :
                this.state.deveRedirecionarParaAvaliarPassageiro ? <Redirect to="/avaliarPassageiro" /> :
                this.state.deveRedirecionarParaAvaliarMotorista ? <Redirect to="/avaliarMotorista" /> :              
            <Fragment>
                   <nav>
                        <ul class="menu">
                                <li><a className="home">Home</a></li>
                                <li><a className="sobre">Sobre</a></li>
                                    <li><a>Cadastro</a>
                                        <ul>
                                            <li><a onClick={this.irParaPassageiros}>Passageiro</a></li>
                                            <li><a onClick={this.irParaMotoristas}>Motorista</a></li>
                                            <li><a onClick={this.irParaVeiculos}>Veículo</a></li>                    
                                        </ul>
                                    </li>
                                    <li><a>Motoristas</a>
                                        <ul>
                                            <li><a onClick={this.irParaListarMotorista}>Visualizar motorista</a></li>                                           
                                            <li><a onClick={this.irParaDeletarMotorista}>Deletar motorista</a></li>                                                               
                                        </ul>
                                    </li>
                                    <li><a>Veículos</a>
                                        <ul>
                                            <li><a onClick={this.irParaListarVeiculo}>Visualizar veículo</a></li>                                                                                                          
                                        </ul>
                                    </li>
                                    <li><a>Passageiros</a>
                                        <ul>
                                            <li><a onClick={this.irParaListarPassageiro}>Visualizar passageiro</a></li>                                                                                                                                                     
                                        </ul>
                                    </li>
                                    <li><a>Corridas</a>
                                        <ul>
                                            <li><a onClick={this.irParaChamarCorrida}>Chamar corrida</a></li>
                                            <li><a onClick={this.irParaIniciarCorrida}>Iniciar corrida</a></li>
                                            <li><a onClick={this.irParaFinalizarCorrida}>Encerrar corrida</a></li>
                                            <li><a onClick={this.irParaListarCorrida}>Listar corrida</a></li>
                                            <li><a onClick={this.irParaAvaliarPassageiro}>Avaliar passageiro</a></li>
                                            <li><a onClick={this.irParaAvaliarMotorista}>Avaliar motorista</a></li>  
                                        </ul>
                                    </li>
                                    <li><a>Conta virtual</a>
                                        <ul>
                                            <li><a onClick={this.irParaDepositoPassageiro}>Passageiro: Depositar</a></li>
                                            <li><a onClick={this.irParaSaqueMotorista}>Motorista: Sacar</a></li>
                                        </ul>
                                    </li>                                        
                        </ul>
                    </nav>          
            </Fragment>
        );
    }
}

export default Menu;