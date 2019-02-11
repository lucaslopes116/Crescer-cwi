import React, { Component } from 'react';
export default class AdicionarPokemonBotao extends React.Component {

    irFomulario = () =>{}

    render() {
        
        return (
            <button className="botao-adiciona" type="submit" onClick={this.props.irFomulario}>
                <div>
                    <p className="mais">+</p>
                    <p className="frase-adiciona">Adicionar Pokemon</p>
                </div>
            </button>
        )
    }
}