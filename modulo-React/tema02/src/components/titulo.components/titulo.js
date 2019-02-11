import React, { Component } from 'react';
import './titulo.css'
export default class Titulo extends React.Component {

    render() {
        return (
            <div className="titulo">
                <p className="frase">No momento você possui {this.props.tamanho} pokemons na sua Pokedex</p>
            </div>
        )
    }

}