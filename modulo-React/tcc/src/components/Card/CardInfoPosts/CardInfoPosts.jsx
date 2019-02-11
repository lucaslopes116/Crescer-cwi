import React, { Component, Fragment } from 'react';
import './CardInfoPosts.css'

class CardInfoPosts extends Component {
    render() {
        return (
            <Fragment>
                <div className="posts">
                      <img src={this.props.imagemUsuario} className="img-post-pequeno" alt=""/>
                      <div className="juncao-info">
                          <p className="info-posts">
                              <strong>{this.props.nomeUsuario}</strong> {this.props.infoDoPost}
                          </p>
                          <small>{this.props.time}</small>
                      </div>
                  </div>
            </Fragment>
        );
    }
}

export default CardInfoPosts;