import React, { Component, Fragment } from 'react';
import Logo from '../img/Group.svg'
import './HeaderLogin.css'

class HeaderLogin extends Component {
    render() {
        return (
            <Fragment>
                <header className="menu">
                    <div className="menu-escondido">
                        <label for="menu-check">
                            <img src="../img/Group.svg" alt="menu-hamburguer" className="menu-hamburguer"/>
                        </label>
                    </div>
                    <ol>
                        <li className="logo">
                            <img src={Logo} alt="logo da villa" className="logo-frase"/>
                            <img src="../img/stairslogo-mobile.png" alt="logo da villa" className="logo-imagem"/>
                        </li>
                    </ol>
                </header>
            </Fragment>
        );
    }
}

export default HeaderLogin;