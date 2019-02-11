import React, { Component } from 'react';
import './input.css';
export default class Input extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            obrigatorio: true
        }
    }

    verificaCampoObrigatorio = () =>{
        this.setState({obrigatorio: this.props.value || false})
    }
 
    mostraMensagem(){
        if(this.state.obrigatorio){
            return null
        }
        return <div className="mensagem">Campo obrigatorio</div>
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Digite o nome do pokemon" name={this.props.name} className="nomeAdicionarTexto"
                 onChange={this.props.onHandle} onBlur={this.verificaCampoObrigatorio}/>
                 {this.mostraMensagem()}
            </div>          

        )
    }
}