import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import EditarService from '../../Services/EditarService'
import BotaoPadrao from './../../components/BotaoPadrao/BotaoPadrao'
import './Editar.css'
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";
import BotaoDeslogar from "../../components/BotaoDeslogar/BotaoDeslogar";
import UserService from "./../../Services/UserService"

class Editar extends Component {

    constructor() {
        super()
        this.state = {
            login: '',
            mensagemErro: '',
            firstName: '',
            lastName: '',
            imageUrl: '',
            email: '',
            deveRedirecionarParaDashboard: false,
            deveRedirecionarParaLogin: false
        }
        this.editarService = new EditarService()
        this.userService = new UserService()
    }
    onChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.editarService.alterar(this.state.email, this.state.login, this.state.imageUrl, this.state.firstName, this.state.lastName).then((response) => {
          this.setState({
                deveRedirecionarParaDashboard: true
            })
        }).catch((err) => {
            this.setState({ mensagemErro: err.response.data.detail })

        })
    }

    funcaoVoltar = (event) => {
        this.setState({
            deveRedirecionarParaDashboard: true
        })
    }

    deslogaPerfil = (event) => {
         this.userService.removeToken()
        this.setState({
            deveRedirecionarParaLogin: true
        })
    }




    renderError() {
        if (this.state.mensagemErro) {
            return alert(this.state.mensagemErro)
        }
    }

    render() {
        return (
            this.state.deveRedirecionarParaDashboard ? <Redirect to="/dashboard" /> :
            this.state.deveRedirecionarParaLogin ? <Redirect to="/login" /> :
            <Fragment>
                {console.log(this.state.firstName)}
                <HeaderLogin/>
                <div className="containerForm">
                    <form onSubmit={this.onSubmit} className="formularioLogin">
                        <div className="textoEntrar">Editar</div>
                        <label className="labelName">Primeiro nome</label>
                        <input type="text" className="campoFirstName" placeholder={this.state.firstName}  name="firstName" onChange={this.onChange} value={this.state.firstName}/>
                        <label className="labelName">Ultimo nome</label>
                        <input type="text" className="campoLastName" placeholder="Ultimo nome" name="lastName" onChange={this.onChange} value={this.state.lastName}/>
                        <label className="labelName">Foto de perfil</label>
                        <input type="text" className="campoImagem" name="imageUrl" onChange={this.onChange} value={this.state.imageUrl}/>
                        <label className="labelName">Usuario</label>
                        <input type="text" className="campoUserName" name="login" onChange={this.onChange} value={this.state.login}/>
                        <label className="labelName">Email</label>
                        <input type="text" className="campoEmail" name="email" onChange={this.onChange} value={this.state.email}/>
                        <BotaoPadrao InfoBotao={'Editar'} tipoType={'submit'}/>
                        <BotaoVoltar InfoBotao={'Voltar'} onClick={this.funcaoVoltar}/>
                        <BotaoDeslogar InfoBotao={'Deslogar'} onClick={this.deslogaPerfil}/>
                        {this.renderError()}
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Editar;
