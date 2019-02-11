import React, { Component, Fragment } from 'react';
import Pontinhos from '../../components/img/Vector3pontinhos.png'
import GrupoService from "../../Services/GrupoService";
import './Grupo.css'

class Grupo extends Component {

    constructor(){
        super()
        this.state ={
            grupo: []
        }
    }



    componentDidMount(){

        this.grupoService = new GrupoService()
        this.grupoService.buscaGrupo().then((response ) =>{
            this.setState({evento: response.data})
        })

    }

    renderGrupo(){
        return this.state.grupo.map((item) =>{
            return                <div className="grupos--eventos">
                    <div className="grupos--image">
                        <img src={item.urlImagem} className="grupos--foto"/>
                    </div>
                    <div className="grupos--textos">{item.nome}</div>
                      </div>


        })
    }


    render(){
        return(
            <Fragment>
                <hr/>
                <div className="grupos">
                    <div className="grupos--header">
                        <div className="grupos--meus">Meus grupos</div>
                        <div className="grupos--opcoes">
                            <img src={Pontinhos} />
                        </div>
                    </div>
                    {this.renderGrupo()}
                </div>
            </Fragment>
        )
    }
}

export default Grupo