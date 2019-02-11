import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom'
import Form from './../../components/form/Form'
import Label from './../../components/label/Label'
import Input from './../../components/input/Input'
import Button from './../../components/button/Button'
import InputSemRequired from './../../components/input/InputSemRequired'
import RegistrarService from './../../services/ResgistrarService'
import swal from 'sweetalert2'
import './registro.css'

class Registro extends Component {

    constructor() {
        super()
        this.state = {
            nomeCompleto: "",
            apelido: "",
            email: "",
            senha: "",
            dataNascimento: "",
            fotoPerfil: "",     
            deveRedirecionarParaLogin: false           
        }        

        this.registrarService = new RegistrarService;
    }

    

    onSubmit = (e) => {
        e.preventDefault()
        this.registrarService.register(this.state.nomeCompleto, this.state.apelido, this.state.email,
             this.state.senha, this.state.dataNascimento, this.state.fotoPerfil).then((response) => {
                swal({
                    position: 'center',
                    type: 'success',
                    title: 'Cadastro efetuado com sucesso',
                    showConfirmButton: false,
                    timer: 1500
                  })
            this.setState({
                deveRedirecionarParaLogin: true
            })
        }).catch((err) => {
            swal({
                position: 'center',
                type: 'error',
                title: 'Algo aconteceu',
                showConfirmButton: false,
                timer: 1500
              })

        })
    }

    onChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    routeChange=()=>{
        let path = "/login";
        this.props.history.push(path);
        }

   

    render() {
        return (
            this.state.deveRedirecionarParaLogin ? <Redirect to="/login" /> :
            <Fragment>
                <div className="registro"> 
                <Form onSubmit={this.onSubmit} className={"registro_form"}>
                    <Label nome={"Nome completo"} className={"registro_label"}/>
                    <Input type={"text"} placeholder={"Informe seu nome"}  name={"nomeCompleto"} className={"registro_input"} value={this.state.nomeCompleto} onChange={this.onChange}/>
                    <Label nome={"Apelido"} className={"registro_label"}/>
                    <InputSemRequired type={"text"} placeholder={"Informe o seu apelido"} name={"apelido"} className={"registro_input"} value={this.state.apelido} onChange={this.onChange}/>
                    <Label nome={"Email"} className={"registro_label"}/>
                    <Input type={"email"} placeholder={"Informe o seu email"} name={"email"} className={"registro_input"} value={this.state.email} onChange={this.onChange}/>
                    <Label nome={"Senha"} className={"registro_label"}/>
                    <Input type={"password"} placeholder={"Informe sua senha"} name={"senha"} className={"registro_input"} value={this.state.senha} onChange={this.onChange}/>
                    <Label nome={"Data de nascimento"} className={"registro_label"}/>
                    <Input type={"date"} placeholder={"Informe a data de nascimento"} name={"dataNascimento"} className={"registro_input"} value={this.state.dataNascimento} onChange={this.onChange}/>
                    <Label nome={"Foto de perfil"} className={"registro_label"}/>
                    <Input type={"url"} placeholder={"Informe sua foto"} name={"fotoPerfil"} className={"registro_input"} value={this.state.fotoPerfil} onChange={this.onChange}/>
                    <Button nome={"Registrar"} className={"registro_button"}/>                    
                </Form>
                    <Button nome={"Voltar"} className={"registro_button--voltar"} onClick={this.routeChange} />
                </div>
            </Fragment>
        );
    }
}

export default Registro;