import React, { Component, Fragment } from 'react';
import EventoService from "../../Services/EventoService";
import Pontinhos from '../../components/img/Vector3pontinhos.png'
import './Evento.css'

class Evento extends Component {

    constructor(){
        super()
        this.state ={
            evento: []
        }
    }



componentDidMount(){

    this.eventoService = new EventoService()
    this.eventoService.buscaEvento().then((response ) =>{
        this.setState({evento: response.data})
    })

}

renderEvento(){
    return this.state.evento.map((item) =>{
      return          <div className="eventos--eventos">
              <div className="eventos--image">
                  <img src={item.urlImagem} className="eventos--foto"/>
              </div>
              <div className="eventos--textos">{item.nome}</div>
                </div>


    })
    }


    render(){
        return(
            <Fragment>
                <hr/>
                <div className="eventos">
                    <div className="eventos--header">
                        <div className="eventos--meus">Meus Eventos</div>
                        <div className="eventos--opcoes">
                            <img src={Pontinhos} />
                        </div>
                    </div>
                    {this.renderEvento()}
                </div>
                <hr/>
            </Fragment>
        )
    }
}

export default Evento