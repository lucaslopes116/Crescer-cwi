import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import BotaoPadrao from '../../../components/botaoPadrao/botaoPadrao'
import BotaoVoltar from './../../../components/botaoVoltar/botaoVoltar'
import motoristaService from './../../../services/motoristaService'
import Menu from './../../menu/Menu'
import './cadastrosMotoristas.css'
import swal from 'sweetalert';


class cadastroMotoristas extends Component {

    constructor() {
        super()

        this.state = {
            id: '',
            nome: '',
            email: '',
            dataNascimento: '',
            carteiraDeHabilitacao: {
            numeroDoDocumento: '' ,
            categoria: '',
            dataVencimento: ''
            },             
            deveRedirecionarParaMotoristaCadastrado: false
        }
        this.motoristaService = new motoristaService()
    }
    
    
    onChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }
    

    handleChangeCategoria(event) {
        let value = event.target.value;
        this.setState({
            categoria: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.motoristaService.criarMotorista(this.state.nome, this.state.email, this.state.dataNascimento,this.state.numeroDoDocumento,this.state.categoria,this.state.dataVencimento).then((response) => {
            swal("Sucesso!","Motorista cadastrado com sucesso", "success")
            console.log(response.data)  
            this.setState({
                id: response.data.id,
                deveRedirecionarParaMotoristaCadastrado: true
                
            })
            console.log(response.data) 
        }).catch((err) => {
            alert( err.response.data.message)                             
            this.setState({ mensagemErro: err.response.data.detail })    
        })
    }

    renderError() {
        if (this.state.mensagemErro) {
            return alert(this.state.mensagemErro)
        }
    }

    renderMotoristaCriado(){
        return (<Fragment>
                <Menu/>  
                    <div className="retornoCadastro--motorista">
                        <h3>Id: {this.state.id}</h3>
                        <h3>Nome: {this.state.nome}</h3>
                        <h3>E-mail: {this.state.email}</h3>
                        <h3>Data de nascimento: {this.state.dataNascimento}</h3>
                        <h3>Carteira de habilitação</h3>
                        <h3>Numero do documento da CNH: {this.state.numeroDoDocumento}</h3>
                        <h3>Categoria da CNH: {this.state.categoria}</h3>
                        <h3>Data de vencimento da CNH: {this.state.dataVencimento}</h3>
                    </div>
                </Fragment>
        )
    }

    render() {
        return (
            this.state.deveRedirecionarParaMotoristaCadastrado ? this.renderMotoristaCriado() :
            <Fragment>   
                <Menu/>          
                <div className="containerFormRegistro--motorista">
                    <form onSubmit={this.onSubmit} className="formularioLoginRegistro--passageiro" autocomplete="off" >
                        <div className="textoEntrar">Cadastrar motorista</div>
                        <label className="name--motorista">Nome completo</label>
                        <input type="text" className="campoFirstName" placeholder='Digite seu nome' minlength="8"  required name="nome" onChange={this.onChange} value={this.state.nome}/>                      
                        <label className="name--motorista">Email</label>
                        <input type="email" className="campoEmail" placeholder='Digite seu email' required name="email" onChange={this.onChange} value={this.state.email}/>
                        <label className="name--motorista">Data de nascimento</label>
                        <input type="date" className="nascimento--motorista" name="dataNascimento" min="1918-01-01" required onChange={this.onChange} value={this.state.dataNascimento}/>                       
                        <label className="name--motorista">Carteira de habilitação: Numero do documento</label>
                        <input type="text" required="required" pattern="[0-9]+$" className="campoFirstName" placeholder='Digite seu numero da CNH' name="numeroDoDocumento" onChange={this.onChange} value={this.state.numeroDoDocumento}/> 
                        <label className="name--motorista">Carteira de habilitação: Categoria</label>                        
                        <select className="name--motorista" onChange={(e) => this.handleChangeCategoria(e)}>
                            <option  value="A">A</option>
                            <option  value="ACC">ACC</option>
                            <option  value="B">B</option>
                            <option  value="C">C</option>
                            <option  value="D">D</option>
                            <option  value="E">E</option>
                        </select>
                        <label className="name--motorista">Carteira de habilitação: Data de vencimento</label>
                        <input type="date" className="nascimento--motorista" name="dataVencimento"  required onChange={this.onChange} value={this.state.dataVencimento}/>                         
                        <BotaoPadrao InfoBotao={'Cadastrar'}/>                       
                        {this.renderError()}
                    </form>
                </div>                
            </Fragment>
        )
    }
}

export default cadastroMotoristas;
