import React, { Component } from 'react';
import './header.css'
export default class Titulo extends React.Component{
    
        render(){
            return(
                <header class="header">
                    <div>
                        <h1 class="header-title">{this.props.tituloSite}</h1>
                    </div>
                </header>
            )
              
                
                
        }
        
    }