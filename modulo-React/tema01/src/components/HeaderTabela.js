import React, { Component } from 'react';
import './tabela.css'
export default class HeaderTabela extends React.Component{
    
        render(){

            return(
                    <div class="classificacao--header">
                        {this.props.tituloTabela}
                    </div>
                   
                )
              
                
                
        }
        
    }