import React, { Component,Fragment } from 'react';
import corridaService from '../../../services/corridaService'
import Menu from './../../menu/Menu'
import './listarCorrida.css'

class listarCorrida extends Component {

    constructor(){
        super()
        this.state ={
            idPassageiro:'',            
            listarCorrida: []
        }
    }

    componentDidMount(){

        this.corridaService = new corridaService()
        this.corridaService.listarCorrida(this.state.idPassageiro).then((response ) =>{
            {console.log(response.data)}
            this.setState({listarCorrida: response.data})            
        }).catch((err) => {
            alert( err.response.data.message)
        })

    }

    renderListarCorridas(){
        return this.state.listarCorrida.map((corridas) =>{            
            return <Fragment>
                        <div className="listaCorrida--container">  
                                                                              
                           
                                <h1>Lista de corridas do passageiro {corridas.passageiro.nome}</h1>
                                <h3>Id da corrida: {corridas.id}</h3>
                                <h3>Ponto inicial: {corridas.pontoInicial}</h3>
                                <h3>Ponto Final: {corridas.pontoFinal}</h3>
                                <h3>Valor da corrida: R${corridas.valorCorrida} reais</h3>
                                <h3>Data inicio: {corridas.dataInicioCorrida}</h3>
                                <h3>Data final: {corridas.dataFimCorrida}</h3>
                                <h3>Tempo estimado: {corridas.tempoEstimado} minutos</h3>
                                <h3>Status da corrida: {corridas.status}</h3>
                                <h3>Avaliação do motorista: {corridas.avaliacaoMotorista}</h3>
                                <h3>Avaliação do passageiro: {corridas.avaliacaoPassageoiro}</h3>                             
                                <h2>Passageiro</h2>
                                <h3>Id do passageiro: {corridas.passageiro.id}</h3>
                                <h3>Nome: {corridas.passageiro.nome}</h3>
                                <h3>Email: {corridas.passageiro.email}</h3>
                                <h3>Data de nascimento: {corridas.passageiro.dataNascimento}</h3>
                                <h3>Conta virtual: R$ {corridas.passageiro.saldo} reais</h3>
                                <h2>Dados do motorista</h2>                                
                                <h3>Id do motorista: {corridas.veiculo.motorista.id}</h3>
                                <h3>Nome: {corridas.veiculo.motorista.nome}</h3>
                                <h3>email: {corridas.veiculo.motorista.email}</h3> 
                                <h2>Dados do veiculo</h2>                                
                                <h3>Id do veiculo: {corridas.veiculo.id}</h3>
                                <h3>Marca: {corridas.veiculo.marca}</h3>
                                <h3>Modelo: {corridas.veiculo.modelo}</h3>
                                <h3>Ano: {corridas.veiculo.ano}</h3>
                                <h3>Cor: {corridas.veiculo.cor}</h3>
                                <img src={corridas.veiculo.foto} alt="foto do veiculo"/>                              
                                                  
                        </div>
                     </Fragment>

        })
    }
    render() {
        return (
            <Fragment>
                <Menu/>
                {this.renderListarCorridas()}
            </Fragment>
        );
    }
}

export default listarCorrida;