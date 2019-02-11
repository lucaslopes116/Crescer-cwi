import React, { Component, Fragment } from 'react';
import Button from './../button/Button'
import './aside.css'

class Aside extends Component {
    render() {
        return (
            <Fragment>
                <div className="aside">
                    <div className="aside_perfil">
                    <div className="aside_perfil--img">
                        <img src={this.props.imagem} alt="imagem de perfil"/>
                    </div>
                        <footer className="aside_perfil_nome">
                            <p>{this.props.nome}</p>
                        </footer>
                    </div>                  
                    {this.props.children}                     
                </div>               
            </Fragment>
        );
    }
}

export default Aside;