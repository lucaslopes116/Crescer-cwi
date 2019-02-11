import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
    CardTitle, Form, FormGroup, Input, Badge,Table } from 'reactstrap';
import { Button, Label, FormText } from 'reactstrap';
import UserService from './../../services/UserService'
import AmigosService from './../../services/AmigosService'
import Navbar from './../../components/navBar/NavBar'
import swal from 'sweetalert2'
import './buscarAmigos.css'

export default class BuscarAmigos extends React.Component {
    constructor(){
        super()
        this.state ={
            nome:"",
            email:"",
            listaDeUsuarios: [],
            deveRedirecionarParaPesquisaPorNome: false,
            deveRedirecionarParaPesquisaPorEmail: false            
        }
        this.userService = new UserService();
        this.amigosService = new AmigosService;
        
    }

    routeChange=()=>{
        let path = "/dashboard";
        this.props.history.push(path);
        this.setState({
            deveRedirecionarParaResultadoPesquisaNome: false
        })
        }

    onChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmitNome = (e) => {
        e.preventDefault()          
        this.userService.procurarUsuarioPorNome(this.state.nome).then((response)=>{

        swal({
            position: 'center',
            type: 'success',
            title: 'Pesquisa por nome realizada com sucesso',
            showConfirmButton: false,
            timer: 1500
            })             
            this.setState({
                deveRedirecionarParaResultadoPesquisaNome: true
               
            })

           
        }).catch((err)=>{
            swal({
                position: 'center',
                type: 'error',
                title: 'Algo aconteceu',
                showConfirmButton: false,
                timer: 1500
                }) 
           
        })         
    }

    novoPost=()=>{
        this.setState({
            deveRedirecionarParaResultadoPesquisaNome: true
           
        })
    }

  

    onSubmitTodos = (e) => {
        e.preventDefault()          
        this.userService.listarUsuario(this.state.nome).then((response)=>{
            this.setState({
                listaDeUsuarios: response.data.content,
                deveRedirecionarParaResultadoPesquisaNome: true
            })     
       
        swal({
            position: 'center',
            type: 'success',
            title: 'Pesquisa por todos realizada com sucesso',
            showConfirmButton: false,
            timer: 1500
            })             
        
        }).catch((err)=>{
            swal({
                position: 'center',
                type: 'error',
                title: 'Algo aconteceu',
                showConfirmButton: false,
                timer: 1500
                })   
         
        })         
    }
  render() {
      
    return (
        this.state.deveRedirecionarParaResultadoPesquisaNome ? this.renderResultadoBusca()  :
        <Fragment> 
        <Navbar />     

        <Form className="buscarAmigos_form" onSubmit={this.onSubmitTodos}>
            <FormGroup>
            <Label>Procurar todos os usuarios</Label>
            <Input type="text" value={this.state.nome} onChange={this.onChange} name="nome" placeholder="digite um nome" />
            </FormGroup>
            <Button>Procurar caçadores</Button>
        </Form>
        <Button onClick={this.routeChange}>Voltar</Button>
      </Fragment>
    )
  }

  renderResultadoBusca() {
      
    return <Fragment>
        <Navbar /> 
        <div className="buscarAmigos_body">  
        <Table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Convite</th>
          </tr>
        </thead>
        <tbody>
          {this.renderPesquisa()}
        </tbody>
      </Table>
         
        <Button onClick={this.routeChange}>Voltar</Button>
        </div>
      </Fragment>
    
    }
    onClick=(id)=>{     
        debugger      
      
        this.amigosService.mandarConviteDeAmizade(id).then((response)=>{
            swal({
                position: 'center',
                type: 'success',
                title: 'Solicitação enviada com sucesso',
                showConfirmButton: false,
                timer: 1500
                }) 
        }).catch((err)=>{
            swal({
                position: 'center',
                type: 'error',
                title: 'Algo aconteceu',
                showConfirmButton: false,
                timer: 1500
                })   
        })
    }
   

    renderPesquisa() {
        return (
            this.state.listaDeUsuarios.map((usuario, index) => {
              return (
                <tr key={index}>
                    <img className="img-perfil-amigo" src={usuario.fotoPerfil} />
                    <td><Link to={`/dashboard/?id=${usuario.id}`}>{usuario.nomeCompleto}</Link></td>
                    <td>{usuario.email}</td>
                    <td><button className="buscarAmigos_tableButton" onClick={()=> this.onClick(usuario.id)}>Vamos caçar</button></td>
                  </tr>
              )
            })

          )
    }

   
  }