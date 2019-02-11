import React, { Component, Fragment } from 'react';
import Logo from '../img/Group.svg'
import Lupa from '../img/magnifying-glasspesquisar.png'
import Sino from '../img/ringsino.png'

import './Header.css'

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="menu">
                    <div className="menu-escondido">
                        <label for="menu-check">
                            <img src="../img/menumenu.png" alt="menu-hamburguer" className="menu-hamburguer"/>
                        </label>      
                    </div>      
                    <ol>
                        <li className="logo">
                            <img src={Logo} alt="logo da villa" className="logo-frase"/>
                            <img src="../img/stairslogo-mobile.png" alt="logo da villa" className="logo-imagem"/>
                        </li>
                        <li className="detalhe-menu-centro">
                            <input type="text" className="procura" placeholder="Pesquisar"/>
                            <img src={Lupa} alt="lupa para pesquisar" className="pesquisar"/>
                        </li>
                        <li className="detalhe-menu-esquerda">
                            <img src={Sino} className="sino" alt="sino"/>
                        </li>
                    </ol>
                </header>
            </Fragment>
        );
    }
}

export default Header;