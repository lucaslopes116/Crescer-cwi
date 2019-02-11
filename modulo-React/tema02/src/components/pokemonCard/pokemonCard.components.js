import React, { Component } from 'react';
export default class PokemonCard extends React.Component {

    render() {
        return (
            <div className="pokemon-card">
                <img src={this.props.imageUrl} />               
                    <footer className="nome-pokemon">{this.props.name}</footer>                
            </div>
        )



    }

}