import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import BotaoPadrao from '../../../components/botaoPadrao/botaoPadrao'
import passageiroService from './../../../services/passageiroService'
import Menu from './../../menu/Menu'
import './cadastrosPassageiro.css'
import swal from 'sweetalert';

  


class cadastrosPassageiro extends Component {

    constructor() {
        super()
        this.state = {
            id: '',
            nome: '',
            email: '',    
            dataNascimento: '',      
            deveRedirecionarParaPassageiroCadastrado: false
        }
        this.passageiroService = new passageiroService()
    }
    
    
    onChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.passageiroService.criarPassageiro(this.state.nome, this.state.email, this.state.dataNascimento).then((response) => {  
            swal("Sucesso!","Passageiro cadastrado com sucesso", "success")
            this.setState({
                    id: response.data.id,
                    deveRedirecionarParaPassageiroCadastrado: true
            })
        }).catch((err) => {
            alert( err.response.data.message)       
            this.setState({ mensagemErro: err.response.data.detail })
        })
    }

    renderPassageiroCriado(){
        return (<Fragment>
                <Menu/>      
                    <div className="retornoCadastro--passageiro">
                        <h3>Id: {this.state.id}</h3>
                        <h3>Nome: {this.state.nome}</h3>
                        <h3>Data de nascimento: {this.state.email}</h3>
                        <h3>E-mail: {this.state.dataNascimento}</h3>
                    </div>
                </Fragment>
        )
        
    }

    renderError() {
        if (this.state.mensagemErro) {
            return alert(this.state.mensagemErro)
        }
    }

    render() {
        return (
            this.state.deveRedirecionarParaPassageiroCadastrado ? this.renderPassageiroCriado() :
            <Fragment>   
                <Menu/>          
                <div className="containerFormRegistro--passageiro">
                    <form onSubmit={this.onSubmit} className="formularioLoginRegistro--passageiro" autocomplete="off" >
                        <div className="textoEntrar">Cadastrar passageiro</div>
                        <label className="name--passageiro">Nome completo</label>
                        <input type="text" className="campoFirstName" placeholder='Digite seu nome' minlength="8"  required  name="nome" onChange={this.onChange} value={this.state.nome}/>                      
                        <label className="name--passageiro">Email</label>
                        <input type="email" className="campoEmail" required placeholder='Digite seu email' name="email" onChange={this.onChange} value={this.state.email}/>
                        <label className="name--passageiro">Data de nascimento</label>
                        <input type="date" className="nascimento--passageiro" name="dataNascimento" required="required" maxlength="10" pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min="1918-01-01" onChange={this.onChange} value={this.state.dataNascimento}/>
                        <BotaoPadrao InfoBotao={'Cadastrar'} tipoType={'submit'}/>
                    </form>
                </div>                
            </Fragment>
        )
    }
}

export default cadastrosPassageiro;
