import React, { Component,Fragment } from 'react';
import veiculoService from './../../../services/veiculoService'
import Menu from './../../menu/Menu'
import './listarVeiculo.css'

class listarVeiculo extends Component {

    constructor(){
        super()
        this.state ={
            listaDeVeiculos: []
        }
    }

    componentDidMount(){

        this.veiculoService = new veiculoService()
        this.veiculoService.listarVeiculo().then((response ) =>{
            {console.log(response.data)}
            this.setState({listaDeVeiculos: response.data.content})            
        }).catch((err) => {
            alert( err.response.data.message)       
            this.setState({ mensagemErro: err.response.data.detail })
    
        })

    }

    renderListarVeiculos(){
        return this.state.listaDeVeiculos.map((veiculos) =>{            
            return <Fragment>
                        <div className="listaVeiculos--container">                                                        
                      
                                <h1>Veiculos</h1>
                                <h3>Id: {veiculos.id}</h3>
                                <h3>Marca: {veiculos.marca}</h3>
                                <h3>Modelo: {veiculos.modelo}</h3>
                                <h3>Ano: {veiculos.ano}</h3>
                                <h3>Cor: {veiculos.cor}</h3>
                                <h3>Categoria necessária para dirigir o veículo: {veiculos.categoriaCnh}</h3>
                                <h3>Quantidade de lugares do veiculo: {veiculos.quantidadeDeLugares}</h3>
                                <img src={veiculos.foto} alt="foto do veiculo"/>
                                <h2>Motorista</h2>
                                <h3>Id: {veiculos.motorista.id}</h3>
                                <h3>Nome: {veiculos.motorista.nome}</h3>
                                <h3>Email: {veiculos.motorista.email}</h3>
                                <h3>Data de nascimento: {veiculos.motorista.dataNascimento}</h3>
                                <h3>Conta virtual: {veiculos.motorista.saldo}</h3>                                  
                                <h2>Carteira de habilitação</h2>
                                <h3>Categoria da CNH: {veiculos.motorista.carteiraDeHabilitacao.categoria}</h3>
                                <h3>Numero do documento da CNH: {veiculos.motorista.carteiraDeHabilitacao.numeroDoDocumento}</h3>
                                <h3>Data de vencimento da CNH: {veiculos.motorista.carteiraDeHabilitacao.dataVencimento}</h3>                                
                        
                                
                        </div>
                     </Fragment>

        })
    }
    render() {
        return (
            <Fragment>
                <Menu/>
                {this.renderListarVeiculos()}
            </Fragment>
        );
    }
}

export default listarVeiculo;