import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import BotaoPadrao from '../../../components/botaoPadrao/botaoPadrao'
import userService from './../../../services/userService'
import Menu from './../../menu/Menu'
import swal from 'sweetalert';
import './login.css'

  


class login extends Component {

    constructor() {
        super()
        this.state = {           
            email: '',    
            password: '',      
            deveRedirecionarParaPassageiroCadastrado: false
        }
        this.userService = new userService()
    }
    
    
    onChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.userService.post(this.state.email, this.state.password).then((response) => {  
            swal("Sucesso!","Logado com sucesso", "success")
            this.setState({                   
                    deveRedirecionarParaPassageiroCadastrado: true
            })
        }).catch((err) => {
            alert( err.response.data.message)       
            this.setState({ mensagemErro: err.response.data.detail })
        })
    }

    // renderPassageiroCriado(){
    //     return (<Fragment>
    //             <Menu/>      
    //                 <div className="retornoCadastro--passageiro">
    //                     <h3>Id: {this.state.id}</h3>
    //                     <h3>Nome: {this.state.nome}</h3>
    //                     <h3>Data de nascimento: {this.state.email}</h3>
    //                     <h3>E-mail: {this.state.dataNascimento}</h3>
    //                 </div>
    //             </Fragment>
    //     )
        
    // }

    renderError() {
        if (this.state.mensagemErro) {
            return alert(this.state.mensagemErro)
        }
    }

    render() {
        return (
            // this.state.deveRedirecionarParaPassageiroCadastrado ? this.renderPassageiroCriado() :
            <Fragment>   
                <Menu/>          
                <div className="containerFormRegistro--passageiro">
                    <form onSubmit={this.onSubmit} className="formularioLoginRegistro--passageiro" autocomplete="off" >
                        <div className="textoEntrar">Login</div>                 
                        <label className="name--passageiro">Email</label>
                        <input type="email" className="campoEmail" required placeholder='Digite seu email' name="email" onChange={this.onChange} value={this.state.email}/>
                        <label className="name--passageiro">Senha</label>
                        <input type="password" className="nascimento--passageiro" name="password" required="required"  onChange={this.onChange} value={this.state.password}/>
                        <BotaoPadrao InfoBotao={'Cadastrar'} tipoType={'submit'}/>
                    </form>
                </div>                
            </Fragment>
        )
    }
}

export default login;


