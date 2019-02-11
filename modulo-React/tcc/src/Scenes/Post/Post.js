import React, { Component, Fragment } from 'react';
import UserService from "../../Services/UserService";
import PostService from "../../Services/PostService";
import Perfil from "../../components/Aside/Perfil/Perfil";
import BotaoPerfil from "../../components/BotaoPerfil/BotaoPerfil";
import BotaoNovaPostagem from "../../components/BotaoNovaPostagem/BotaoNovaPostagem";
import Header from "../../components/Header/Header";
import CardInfoPosts from "../../components/Card/CardInfoPosts/CardInfoPosts";
import CardFotoPost from "../../components/Card/CardFotoPost/CardFotoPost";
import BotaoPadrao from "../../components/BotaoPadrao/BotaoPadrao";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import './Post.css'
class Post extends Component {

    constructor() {
        super()

        this.state = {
            post: [],
            titulo: '',
            descricao: '',
            imageUrl: '',
            firstName: '',
            imagemPerfil: '',
            deveRedirecionarParaHome: false
        }

        this.post = new PostService();
        this.usuario = new UserService()

    }

    componentDidMount() {
        this.usuario.usuarioLogado().then(response => {
            this.setState({firstName: response.data.firstName, imagemPerfil: response.data.imageUrl})
        })
        this.post.getPosts().then(response => {
            this.setState({post: response.data})
        })
    }

   onChange = (e) =>{
        const target = e.target
       this.setState({
           [target.name] : target.value
       })
   }

   onSubmit = (e) =>{
        e.preventDefault()
       this.post.novoPost(this.state.titulo, this.state.descricao, this.state.imageUrl).then(() =>{
           alert('post criado')
       }).catch((err) =>{
            alert(err.response.data.detail)
       })
   }



   renderPreview(){
        return(<div onSubmit={this.onSubmit} className='card-preview'>
            <div className='titulo-preview'>
                {this.state.titulo}
                <p>AAAAAAAAAAAAA</p>
            </div>
            <div className='descricao-preview'>
                {this.state.descricao}
                <p>AAAAAAAAAAAAA</p>
            </div>
            <div className='url-preview'>
                {this.state.imageUrl}
                <p>AAAAAAAAAAAAA</p>
            </div>
            </div>
        )
   }

    criarPost() {
        return (
            <div className="criarPost">
                <div>
                    <h1>Nova Postagem</h1>
                    <Label texto={'Dê um título para sua postagem'} />
                    <Input tipo={'text'} name={'titulo'} value={this.state.titulo} onChange={this.onChange} />
                    <Label texto={'O que você quer compartilhar?'} />
                    <Input tipo={'text'} name={'descricao'} value={this.state.descricao} onChange={this.onChange} />
                    <Label texto={'Que tal usar uma imagem?'} />
                    <Input tipo={'text'} name={'imageUrl'} value={this.state.imageUrl} onChange={this.onChange} />
                    <div className="buttonCard">
                        <BotaoNovaPostagem InfoBotao={'Cancelar'} />
                        <BotaoPadrao InfoBotao={'Postar'} onClick={this.onClick} />
                    </div>
                </div>
                <div>
                    <CardInfoPosts imagemUsuario={this.state.imagemPerfil}
                                   nomeUsuario={this.state.firstName} time={"hoje"} />
                    <CardFotoPost tituloPost={this.state.titulo} conteudoPost={this.state.descricao} />
                    <CardFotoPost imagemDoPost={this.state.imageUrl} />
                    <div className="visualizacao">
                        <h1>PRÉ-VISUALIZAÇÃO</h1>
                    </div>
                </div>
            </div>)
    }

   renderOutroCard(){
        return(<form onSubmit={this.onSubmit} className='card-verdadeiro'>
                <CardInfoPosts imagemUsuario={this.state.imagemPerfil} nomeUsuario={this.state.firstName} />
                <CardFotoPost tituloPost={this.state.titulo} conteudoPost={this.state.descricao} imagemDoPost={this.state.imageUrl} value={this.state.imageUrl} onChange={this.onChange}/>
                <BotaoPadrao InfoBotao={'Criar post'}/>
            </form>

        )
   }

    render(){
        return(<Fragment>
            {/*{this.renderContent()}*/}
            <Header/>
            <aside className="barra-lateral--post">
                <div className="perfil--post">
                    <Perfil fotoPerfil={this.state.imagemPerfil} nomePerfil={this.state.firstName} />
                    <BotaoPerfil InfoBotao={'Meu perfil'}/>
                </div>
            </aside>
                {/*{this.criarPost()}*/}
        </Fragment>


        )
    }
}



export default Post;