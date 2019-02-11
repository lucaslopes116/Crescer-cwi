import React, { Component,Fragment } from 'react';
import passageiroService from './../../../services/passageiroService'
import Menu from './../../menu/Menu'
import './listarPassageiro.css'


class listarPassageiro extends Component {

    constructor(){
        super()
        this.state ={
            listaDePassageiros: []
        }
    }

    componentDidMount(){

        this.passageiroService = new passageiroService()
        this.passageiroService.listarPassageiro().then((response ) =>{
            this.setState({listaDePassageiros: response.data.content})
        }).catch((err) => {
            alert( err.response.data.message)       
            this.setState({ mensagemErro: err.response.data.detail })
    
        })
    }

    renderListarPassageiros(){
        return this.state.listaDePassageiros.map((passageiro) =>{            
            return <Fragment>                        
                        <div className={'listaPassageiros--container'}>  
                            <h1>Passageiro</h1>
                            <h3>Id: {passageiro.id}</h3>
                            <h3>Nome: {passageiro.nome}</h3>
                            <h3>Email: {passageiro.email}</h3>
                            <h3>Data de nascimento: {passageiro.dataNascimento}</h3>
                            <h3>Conta virtual: R$ {passageiro.saldo} reais</h3>                             
                        </div>   
                     </Fragment>

        })
    }
    render() {
        return (
            <Fragment>
                <Menu/>
                {this.renderListarPassageiros()}
            </Fragment>
        );
    }
}

export default listarPassageiro;