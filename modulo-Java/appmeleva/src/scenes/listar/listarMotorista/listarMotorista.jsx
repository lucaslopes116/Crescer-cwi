import React, { Component,Fragment } from 'react';
import motoristaService from './../../../services/motoristaService'
import Menu from './../../menu/Menu'
import './listarMotorista.css'

class listarMotorista extends Component {

    constructor(){
        super()
        this.state ={
            listaDeMotoristas: []
        }
    }

    componentDidMount(){

        this.motoristaService = new motoristaService()
        this.motoristaService.listarMotorista().then((response ) =>{
            console.log(response.data)
            this.setState({listaDeMotoristas: response.data.content})            
        }).catch((err) => {
            alert( err.response.data.message)
        })

    }

    renderListarMotoristas(){
        return this.state.listaDeMotoristas.map((motorista) =>{            
            return <Fragment>
                        <div className="listaMotoristas--container">

                            <h1>Motorista</h1>
                            <h3>Id: {motorista.id}</h3>
                            <h3>Nome: {motorista.nome}</h3>
                            <h3>Email: {motorista.email}</h3>
                            <h3>Data de nascimento: {motorista.dataNascimento}</h3>
                            <h2>Carteira de habilitação</h2>
                            <h3>Numero do documento da CNH: {motorista.carteiraDeHabilitacao.numeroDoDocumento}</h3>
                            <h3>Categoria da CNH: {motorista.carteiraDeHabilitacao.categoria}</h3>
                            <h3>Data de vencimento da CNH: {motorista.carteiraDeHabilitacao.dataVencimento}</h3>
                            <h3>Conta virtual: R$ {motorista.saldo} reais</h3>
                                
                        </div>
                     </Fragment>

        })
    }
    render() {
        return (
            <Fragment>
                <Menu/>
                {this.renderListarMotoristas()}
            </Fragment>
        );
    }
}

export default listarMotorista;