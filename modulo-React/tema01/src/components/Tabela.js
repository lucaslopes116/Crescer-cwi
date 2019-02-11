import React, { Component } from 'react';
import TabelaInfo from './TabelaInfo'
import './tabela.css'
export default class Tabela extends React.Component {

    render() {

        return (
            
                
                <tbody>                    
                    <tr class="classificacao--table__tr">
                        <td class="classificacao--table__time">
                            <b>{this.props.posicao}</b> - {this.props.time}
                        </td>
                        <td class="classificacao--table__pontos">
                        {this.props.pontuacao}
                        </td>
                    </tr>
                </tbody>
            

        )



    }

}