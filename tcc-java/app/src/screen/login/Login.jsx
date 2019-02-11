import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom'
import Form from './../../components/form/Form'
import Label from './../../components/label/Label'
import Input from './../../components/input/Input'
import Button from './../../components/button/Button'
import UserService from './../../services/UserService'
import swal from 'sweetalert2'
import './login.css'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            senha: '',            
            deveRedirecionarParaDashboard: false,
            deveRedirecionarParaRegistro: false 
        }        

        this.userService = new UserService()
    }

    onSubmit = (e) => {
        e.preventDefault()        
        this.userService.logar(this.state.email, this.state.senha).then((response) => {
            this.userService.salvarToken(response.data.accessToken)
            swal({
                position: 'center',
                type: 'success',
                title: 'Bem vindo',
                showConfirmButton: false,
                timer: 1500
              })                        
            this.setState({
                deveRedirecionarParaDashboard: true
            })
        }).catch((err) => {
            swal({
                position: 'center',
                type: 'error',
                title: 'Email ou senha inválido',
                showConfirmButton: false,
                timer: 1500
              })
           
        })     
    }

    routeChange=()=>{
        let path = "/registrar";
        this.props.history.push(path);
        }

        onChange = (e) => {
            const target = e.target
            this.setState({
                [target.name]: target.value
            })
        }

    render() {
        return (
            this.state.deveRedirecionarParaDashboard ? <Redirect to="/dashboard" /> :
            this.state.deveRedirecionarParaRegistro ? <Redirect to="/registrar" /> :
            <Fragment>
                <div className="login"> 
                <Form onSubmit={this.onSubmit} className={"login_form"}>
                    <Label nome={"Email"} className={"login_label"}/>
                    <Input type={"email"} placeholder={"Informe seu email"} name={"email"} className={"login_input"} onChange={this.onChange} value={this.state.email}/>
                    <Label nome={"Senha"} className={"login_label"}/>
                    <Input type={"password"} placeholder={"Informe sua senha"} name={"senha"} className={"login_input"} onChange={this.onChange} value={this.state.senha}/>
                    <Button nome={"Entrar"} className={"login_button"}/>                    
                </Form>
                <Button nome={"Registrar"} className={"login_button--registrar"} onClick={this.routeChange}/>
                </div>
            </Fragment>
        );
    }
}

export default Login;