import React, { Component,Fragment } from 'react';
import './aside_amizade.css'

class Aside_amizade extends Component {
    render() {
        return (
            <Fragment>
                 <div className="aside_amigos">
                    <hr/>
                    <div>
                        <h5>Solicitaçoes de amizade</h5>
                    </div>
                       {this.props.children}
                    </div>
            </Fragment>
        );
    }
}

export default Aside_amizade;