import React, { Component ,Fragment} from 'react';
import logo from './logo.svg';
import CardInfoPosts from './components/Card/CardInfoPosts/CardInfoPosts'
import CardFotoPost from './components/Card/CardFotoPost/CardFotoPost'
import CardBotao from './components/Card/CardBotao/CardBotao'
import BotaoPadrao from './components/BotaoPadrao/BotaoPadrao'
import Perfil from './components/Aside/Perfil/Perfil'
import Header from './components/Header/Header'
import Login from './Scenes/Login/Login'
import Registro from './Scenes/Registro/Registro'
import Editar from './Scenes/Editar/Editar'
import UserService from "./Services/UserService";
import Dashboard from "./Scenes/Dashboard/Dashboard";
import { Redirect, Link, Route } from 'react-router-dom'
import Grupos from "./components/Aside/Grupos/Grupos";
import Post from "./Scenes/Post/Post";




class App extends Component {

    constructor(){
        super()

        this.state = {

            firstName: '',
            imageUrl: ''
        }
    }

    componentDidMount() {
        this.userService = new UserService()
        this.userService.usuarioLogado().then((response) => {
            this.setState({ firstName: response.data.firstName,
                imageUrl: response.data.imageUrl })
        })
    }

  render1() {
    return (<Fragment>
       <html lang="pt-br">
      <body>
      <Header/>
      <input type="checkbox" id="menu-check"/>

      <aside className="barra-lateral">
          <div className="perfil">
              <Perfil fotoPerfil={this.state.imageUrl} nomePerfil={this.state.firstName} />
              <BotaoPadrao InfoBotao='Meu perfil'/>
          </div>
          <hr/>
         <Grupos/>
      </aside>
      <section className="container">
          <div className="teste">
              <div>
                  <Dashboard/>
              </div>           
              <BotaoPadrao InfoBotao={'Nova postagem'}/>
          </div>
      </section>
      </body>
      </html>
      </Fragment>
    );
  }

  render(){
    return(<Fragment>
            <Route component={Login} path="/login" />
            <Route component={Dashboard} path="/dashboard" />
            <Route component={Registro} path="/registro" />
            <Route component={Editar} path="/editar" />
            <Route component={Post} path="/Post" />
        </Fragment>

    )
  }
}



export default App;
