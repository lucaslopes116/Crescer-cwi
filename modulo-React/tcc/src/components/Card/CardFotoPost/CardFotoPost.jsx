import React, { Component, Fragment } from 'react';
import './CardFotoPost.css'

class CardFotoPost extends Component {
    render() {
        return (
            <Fragment>
                <div className="foto-posts">
                      <h2 className="titulo-post">{this.props.tituloPost}</h2>
                      <p className="texto-post">{this.props.conteudoPost}
                      </p>
                      <img src={this.props.imagemDoPost} alt=""/>
                  </div>
            </Fragment>
        );
    }
}

export default CardFotoPost;