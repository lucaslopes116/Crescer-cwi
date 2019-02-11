import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import UserService from '../../Services/UserService'
import './Dashboard.css'
import Perfil from "../../components/Aside/Perfil/Perfil";
import Header from "../../components/Header/Header";
import BotaoPerfil from "../../components/BotaoPerfil/BotaoPerfil";
import BotaoNovaPostagem from "../../components/BotaoNovaPostagem/BotaoNovaPostagem";
import Evento from "../Evento/Evento";
import Grupo from "../Grupo/Grupo";
class Dashboard extends Component {

constructor() {
    super()
    this.state = {
        deveRedirecionarParaLogin: false,
        deveRedirecionarParaEditar: false,
        pagina: false,
        firstName: '',
        imageUrl: ''
    }
}

componentDidMount() {
    this.userService = new UserService()
    if (!this.userService.getToken()) {
        this.setState({
            deveRedirecionarParaLogin: true
        })
    }
    this.userService.usuarioLogado().then((response) => {
        this.setState({ firstName: response.data.firstName,
            imageUrl: response.data.imageUrl })
    })
}


    ajustaPerfil = (event) =>{
        this.setState({
            deveRedirecionarParaEditar: true
        })
    }

renderPosts() {
    return (
        this.state.deveRedirecionarParaEditar ? <Redirect to="/editar" /> :
        this.state.deveRedirecionarParaLogin ? <Redirect to="/login" /> :
        <Fragment>
            <Header/>
            <aside className="barra-lateral--dashboard">
            <div className="perfil--dashboard">
                 <Perfil fotoPerfil={this.state.imageUrl} nomePerfil={this.state.firstName} />
                <BotaoPerfil InfoBotao={'Meu perfil'} onClick={this.ajustaPerfil}/>
                <Grupo/>
                <Evento/>
            </div>
            </aside>
            <BotaoNovaPostagem InfoBotao={'Nova postagem'} criarPost={this.onPostarClick}/>
        </Fragment>
    )
}

    render() {

        return this.state.pagina ? this.renderNovoPost() : this.renderPosts()
    }
}

export default Dashboard;
