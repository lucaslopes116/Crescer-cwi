import React, { Component } from 'react';
import './noticias.css';
export default class Noticia extends React.Component{
    
        render(){
            return(
                <div class="noticia--item">
                    <div class="noticia--imagem">
                        <img class="noticia--imagem__img" src={this.props.imagem}/>
                    </div>
                    <div class="noticia--content">
                        <div class="noticia--content__categoria">
                            {this.props.categoria}
                        </div>
                        <div class="noticia--content__titulo">
                            {this.props.tituloNoticia}
                        </div>
                        <div class="noticia--content__descricao">
                            {this.props.descricao}
                        </div>
                        <div class="noticia--content__horario">
                            HÁ {this.props.tempo} - {this.props.categoria}
                        </div>
                    </div>
                </div>
            )
              
                
                
        }
        
    }