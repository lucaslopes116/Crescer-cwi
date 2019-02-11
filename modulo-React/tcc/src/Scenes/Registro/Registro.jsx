import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import RegistroService from '../../Services/RegistroService'
import BotaoPadrao from './../../components/BotaoPadrao/BotaoPadrao'
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";
import './Registro.css'

class Registro extends Component {

    constructor() {
        super()
        this.state = {
            login: '',
            password: '',
            mensagemErro: '',
            firstName: '',
            lastName: '',
            imageUrl: '',
            email: '',
            deveRedirecionarParaLogin: false
        }
        this.registroService = new RegistroService()
    }


    onChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.registroService.register(this.state.email, this.state.login, this.state.password, this.state.imageUrl, this.state.firstName, this.state.lastName).then((response) => {
            this.setState({
                deveRedirecionarParaLogin: true
            })
        }).catch((err) => {
            this.setState({ mensagemErro: err.response.data.detail })

        })
    }

    renderError() {
        if (this.state.mensagemErro) {
            return alert(this.state.mensagemErro)
        }
    }

    voltaPage = (event) =>{
        this.setState({
            deveRedirecionarParaLogin: true
        })
    }

    render() {
        return (
            this.state.deveRedirecionarParaLogin ? <Redirect to="/login" /> :
            <Fragment>
                <HeaderLogin/>
                <div className="containerForm--registro">
                    <form onSubmit={this.onSubmit} className="formularioLogin--registro" autocomplete="off" >
                        <div className="textoEntrar">Registrar</div>
                        <label className="labelName">Primeiro nome</label>
                        <input type="text" className="campoFirstName" placeholder='Digite seu nome' name="firstName" onChange={this.onChange} value={this.state.firstName}/>
                        <label className="labelName">Ultimo nome</label>
                        <input type="text" className="campoLastName" placeholder="Ultimo nome" name="lastName" onChange={this.onChange} value={this.state.lastName}/>
                        <label className="labelName">Foto de perfil</label>
                        <input type="text" className="campoImagem" name="imageUrl" onChange={this.onChange} value={this.state.imageUrl}/>
                        <label className="labelName">Usuario</label>
                        <input type="text" className="campoUserName" name="login" onChange={this.onChange} value={this.state.login}/>
                        <label className="labelName">Email</label>
                        <input type="text" className="campoEmail" name="email" onChange={this.onChange} value={this.state.email}/>
                        <label className="labelName">Senha</label>
                        <input type="password" className="campoSenha" name="password" onChange={this.onChange} value={this.state.password}/>
                        <BotaoPadrao InfoBotao={'Registrar'} tipoType={'submit'}/>
                        <BotaoVoltar InfoBotao={'Voltar'} onClick={this.voltaPage}/>
                        {this.renderError()}
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Registro;
