import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import PostService from '../../services/PostService';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Form, FormGroup, Label, Input, Badge } from 'reactstrap';
import Button from './../../components/button/Button'
import NavBar from './../../components/navBar/NavBar'
import Aside from './../../components/aside/Aside'
import UserService from './../../services/UserService'
import AmigosService from './../../services/AmigosService'
import Aside_amizade from './../../components/aside_amizade/Aside_amizade'
import swal from 'sweetalert2'
import './dashboard.css'

class Dashboard extends Component {

    constructor(){
        super()
        this.state ={
            tituloPost:"",
            descricaoPost:"",
            imagemPost:"",
            listaDePost: [],
            listaDeSolicitacoesDeAmizade: [],
            nomeCompleto:"",
            imagemPost:"",
            fotoPerfil:"",
            idUsuario:"",
            idAmigo:"",
            id:"",
            deveRedirecionarParaCriarPost: false,
            deveRedirecionarParaLogin: false,
            deveRedirecionarParaDashboard: false,
            deveRedirecionarParaEditar: false,
            deveRedirecionarParaRender: false
        }
    }

    getInitialState(){
        return{
            fotoPerfil:"",
            idUsuario:"",
            listaDeSolicitacoesDeAmizade: [],
            tituloPost:"",
            descricaoPost:"",
            imagemPost:"",
            listaDePost: [],
            idAmigo:"",
            id:""
        }
    }

    componentWillReceiveProps(nextProps) {
        const id = nextProps.match.params.id
        if(id !== this.state.id) {
            const initialState = this.getInitialState()
            this.setState({ ...initialState, id }, () => {
                this.getUser()
            })
        }
    }

    getUser(){
        
        if(this.state.id > 0){
            this.getUserById()
        }else{
            this.getUsuarioLogado()
        }
    }

    getUsuarioLogado(){
        this.userService.usuarioLogado().then((response) => {
          
            this.setState({ nomeCompleto: response.data.nomeCompleto,
                fotoPerfil: response.data.fotoPerfil ,
                idUsuario: response.data.id
            })
        })
    }

    getUserToken(){
        this.userService = new UserService()
        if (!this.userService.getToken()) {
            this.setState({
                deveRedirecionarParaLogin: true
            })
        }
    }

    getUserById(id){
        this.userService.usuarioPorIdNoParametro(id).then((response) => {
           
            this.setState({ nomeCompleto: response.data.nomeCompleto,
                fotoPerfil: response.data.fotoPerfil ,
                id: this.state.idUsuario
            })
            
        })
    }
    
    getSolicitacaoDeAmizade(){
        this.amigosService = new AmigosService
        this.amigosService.listarSolicitacoes().then((response) => { 
            
            if(response.data.content.length > 0){               
                this.setState({listaDeSolicitacoesDeAmizade: response.data.content,
                    idAmigo: response.data.content[0].idAmigo.id 
                    })
            }else{this.setState({
                idAmigo: "" 
            })
               
            }
        })
    }

    getListaPost(){
        this.postService = new PostService()
        this.postService.listarPost().then((response ) =>{            
            this.setState({listaDePost: response.data.content})            
        }).catch((err) => {        
        })
    }


    componentDidMount(){
        this.getUserToken()
        this.getUser()
        this.getSolicitacaoDeAmizade()
        this.getListaPost()
    }

    componentWillMount(){
        this.postService = new PostService()
        this.postService.listarPost().then((response) =>{            
            this.setState({listaDePost: response.data.content})            
        }).catch((err) => {            
        })
    }

    renderListaDePost(){
        return this.state.listaDePost.map((post) =>{            
            return <Fragment>         
                                <Card>                                     
                                    <p>Data da postagem: {post.dataPost}</p>            
                                                
                                    <CardBody className="card-body">
                                        <CardTitle><h2>{post.tituloPost}</h2></CardTitle>                              
                                        <CardText>{post.descricaoPost}</CardText>
                                        <div className="img_post">  
                                        <CardImg top width="100%" src={post.imagemPost} alt="Imagem post" /> 
                                        </div>                            
                                        {/* <p>Permissao: {post.tipoPermissao}</p> */}
                                        <div className="dashboard_post--button">
                                            <Button nome={"Curtir"} className={"dashboard_button"}/> 
                                            <Button nome={"Comentar"} className={"dashboard_button"}/>
                                        </div>  
                                    </CardBody>                        
                                </Card>           
                     </Fragment>

        })
    }

    aceitarAmizade = () => {
        this.amigosService.aceitarAmizade(this.state.idUsuario,this.state.idAmigo).then(() =>{
            swal({
                position: 'center',
                type: 'success',
                title: 'Pedido de amizade aceito',
                showConfirmButton: false,
                timer: 1500
                })            
                window.location.reload()
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

    recusarAmizade = () => {
        this.amigosService.recusarAmizade(this.state.idUsuario,this.state.idAmigo).then(() =>{
            swal({
                position: 'center',
                type: 'success',
                title: 'Pedido de amizade aceito',
                showConfirmButton: false,
                timer: 1500
                })            
                window.location.reload()
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

    renderListaDeSolicitacoesDeAmizade(){
        return this.state.listaDeSolicitacoesDeAmizade.map((amizade) =>{            
            return <Fragment>         
                            <div className="dasboard_solicitacao_amizade">
                                <p>O usuario {amizade.idAmigo.nomeCompleto}, quer ser seu amigo, voce aceita?</p>
                                <button className="dasboard_solicitacao_amizade--button" onClick={this.aceitarAmizade}>Aceitar</button>
                                <button className="dasboard_solicitacao_amizade--button" onClick={this.recusarAmizade}>Recusar</button>

                            </div>      
                     </Fragment>

        })
    }


    onChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()        
        this.postService.criarPost(this.state.tituloPost,this.state.descricaoPost,this.state.imagemPost).then((response)=>{
  
            this.setState({
                listaDePost:[...this.state.listaDePost,response.data]
            })           
        swal({
            position: 'center',
            type: 'success',
            title: 'Post criado com sucesso',
            showConfirmButton: false,
            timer: 1500
            })             
            this.routeChange() 
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

    renderCriarPost(){                   
            return (               
                this.state.deveRedirecionarParaDashboard ? <Redirect to="/dashboard" />  :
            <Fragment>
                <NavBar/>
                <div className="dashboard_home">
                <Aside nome={this.state.nomeCompleto}  imagem={this.state.fotoPerfil}>
                    <Button className={"aside_button"} nome={"Perfil"} onClick={this.ajustaPerfil}/> 
                    <Aside_amizade >                 
                    <p className="dashboard_paragrafy">Quantidade de solicitacoes: <Badge color="secondary">{this.state.listaDeSolicitacoesDeAmizade.length}</Badge></p>                 
                    {this.renderListaDeSolicitacoesDeAmizade()}
                    </Aside_amizade>
                </Aside>
                <div className="dashboard_container--novoPost">
                    <Form className="dashboard_form--novoPost" onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="titulo">Titulo</Label>
                            <Input  required type="text" name="tituloPost"  placeholder="titulo" onChange={this.onChange} value={this.state.tituloPost}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="descricao">Descrição</Label>
                            <Input required type="text" name="descricaoPost" placeholder="descricao" onChange={this.onChange} value={this.state.descricaoPost}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="imagem">Imagem</Label>
                            <Input required type="url" name="imagemPost" placeholder="imagem" onChange={this.onChange} value={this.state.imagemPost}/>
                        </FormGroup>
                        <Button className={"dashboard_button--criaPost"} nome={"Criar"}/>
                    </Form> 
                                                  
                    <Form className="dashboard_form--novoPost">
                        <FormGroup>
                            <div className="campo">
                            <h1>Titulo</h1>
                            {this.state.tituloPost}
                            </div>
                        </FormGroup>
                        <FormGroup>
                        <div className="campo">
                            <h1>Descricao</h1>
                            {this.state.descricaoPost}
                        </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="campo">
                            <h1>Imagem</h1>
                            <img src={this.state.imagemPost}/>
                        </div>
                        </FormGroup>                                
                    </Form>
                    <Button className={"dashboard_button--voltar"} nome={"Voltar"} onClick={this.voltarDashboard}/>
                </div>
                </div> 
                                                   
            </Fragment>

        )
    }

    novoPost=()=>{
        this.setState({
            deveRedirecionarParaCriarPost: true,
            deveRedirecionarParaDashboard: false  
        })
    }

    voltarDashboard=()=>{
        window.location.reload()
        this.setState({
            deveRedirecionarParaDashboard: true,
            deveRedirecionarParaCriarPost: false            
        })
    }

    ajustaPerfil = (event) =>{
        this.setState({
            deveRedirecionarParaEditar: true
        })
    }

    routeChange=()=>{
        let path = "/dashboard";
        this.props.history.push(path);
        }

    render() {
        return (            
            this.state.deveRedirecionarParaCriarPost ? this.renderCriarPost()  :             
            this.state.deveRedirecionarParaEditar ? <Redirect to="/editar" />   :
            this.state.deveRedirecionarParaLogin ? <Redirect to="/login" />   :
            
                     
            
            <Fragment>
                <NavBar/>
                <div className="dashboard_home">               
                <Aside nome={this.state.nomeCompleto}  imagem={this.state.fotoPerfil}>
                    <Button className={"aside_button"} nome={"Perfil"} onClick={this.ajustaPerfil}/> 
                    <Aside_amizade >                 
                    <p className="dashboard_paragrafy">Quantidade de solicitacoes: <Badge color="secondary">{this.state.listaDeSolicitacoesDeAmizade.length}</Badge></p>                 
                    {this.renderListaDeSolicitacoesDeAmizade()}
                    </Aside_amizade>
                </Aside>
                <div className="dashboard_container"> 
                    {this.renderListaDePost()}                    
                    
                    <Button nome={"Criar post"}  className={"dashboard_button--novoPost"} onClick={this.novoPost}/>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;