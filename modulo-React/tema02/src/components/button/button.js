import React, { Component } from 'react';
import './button.css';
import './../../formulario.css';
export default class Button extends React.Component {

    

    render() {
        
        return (    
        <div>
            <button className="botao-salvar" type="submit" disabled={this.props.funcaoDisable}>Salvar</button>
            <button className="botao-voltar" onClick={this.props.funcaoVoltar}>Voltar</button>  
        </div>
        )

    }
}