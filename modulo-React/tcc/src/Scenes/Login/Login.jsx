import React, { Component, Fragment } from 'react';
import UserService from '../../Services/UserService'
import { Redirect } from 'react-router-dom'
import BotaoPadrao from './../../components/BotaoPadrao/BotaoPadrao'
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import BotaoIrRegistro from "../../components/BotaoIrRegistro/BotaoIrRegistro";
import './Login.css';


class Login extends Component {

constructor() {
    super()
    this.state = {
        username: '',
        password: '',
        mensagemErro: '',
        deveRedirecionarParaDashboard: false,
        deveRedirecionarParaRegistro: false

    }
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
    this.userService.post(this.state.username, this.state.password).then((response) => {
        this.userService.salvarToken(response.data.id_token)
        this.setState({
            deveRedirecionarParaDashboard: true
        })
    }).catch((err) => {
        this.setState({ mensagemErro: err.response.data.detail })


    })
}

registra = (event) =>{
    this.setState({
        deveRedirecionarParaRegistro: true
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
        this.state.deveRedirecionarParaRegistro ? <Redirect to="/registro" /> :
    <Fragment>
        <HeaderLogin/>
        <div className="containerForm--login">
            <form onSubmit={this.onSubmit} className="formularioLogin--login">
                <div className="textoEntrar">Entrar</div>
                <label className="labelName">Usuário</label>
                <input type="text" className="campoEmail" name="username" onChange={this.onChange} value={this.state.username}/>
                <label className="labelName">Senha</label>
                <input type="password" className="campoSenha" name="password" onChange={this.onChange} value={this.state.password}/>
                <BotaoPadrao InfoBotao={'Entrar'}/>
                <BotaoIrRegistro InfoBotao={'Criar uma conta'} onClick={this.registra}/>
                {this.renderError()}
            </form>

        </div>
        </Fragment>
    );
}
}  
export default Login;
