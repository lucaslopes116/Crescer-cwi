import React, { Component, Fragment } from 'react';
import './Perfil.css'

class Perfil extends Component {



    render() {
        return (
            <Fragment>
              <img src={this.props.fotoPerfil} className="perfil-foto" alt=""/>
              <span className="perfil-nome">{this.props.nomePerfil}</span>
            </Fragment>
        );
    }
}

export default Perfil;