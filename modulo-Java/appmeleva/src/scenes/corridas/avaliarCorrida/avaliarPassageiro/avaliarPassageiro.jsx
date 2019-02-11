import React, { Component, Fragment } from 'react';
import Menu from './../../../menu/Menu'
import BotaoPadrao from './../../../../components/botaoPadrao/botaoPadrao'
import corridaService from './../../../../services/corridaService'

class avaliarPassageiro extends Component {
    constructor() {
        super()

        this.state = {
            idCorrida: '', 
            avaliacaoPassageiro: '',                                          
            deveRedirecionarParaDashboard: false
        }      
    }   

    componentDidMount(){
        this.corridaService = new corridaService()
    }
 

onChange = (e) => {
    const target = e.target
    this.setState({
        [target.name]: target.value
    })
}       

avaliar = () =>{    
    this.corridaService.avaliarPassageiro(this.state.idCorrida,this.state.avaliacaoPassageiro).then((response) =>{
        alert("Passageiro avaliado com sucesso")
    }).catch((err) => {
        alert( err.response.data.message)   
    })
    }

    onSubmit = (e) => {
        e.preventDefault()
    }

    handleChangeAvaliacao(event) {
        let value = event.target.value;
        this.setState({
            avaliacaoPassageiro: value
        });
    }

render() {
    return (
        <Fragment>
             <Menu/>          
            <div className="containerFormRegistro--motorista">
                <form onSubmit={this.onSubmit} className="formularioLoginRegistro--passageiro" autocomplete="off" >
                    <div className="textoEntrar">Avaliar passageiro</div>
                    <label className="name--motorista">Id do corrida</label>  
                    <input type="text" className="campoFirstName" title ='Digite o id da corrida' placeholder='Digite o id' name="idCorrida" onChange={this.onChange} value={this.state.idCorrida}/> 
                    <label className="name--motorista">Escolha sua nota</label>
                    <select className="name--motorista" onChange={(e) => this.handleChangeAvaliacao(e)}>
                            <option  value="1">1</option>
                            <option  value="2">2</option>
                            <option  value="3">3</option>
                            <option  value="4">4</option>
                            <option  value="5">5</option>                           
                        </select>                       
                    <BotaoPadrao onClick={this.avaliar} InfoBotao={'Avaliar'} tipoType={'submit'}/>
                </form>
            </div>            
        </Fragment>
    );
}
}


export default avaliarPassageiro;