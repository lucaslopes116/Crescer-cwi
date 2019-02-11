import React, { Component, Fragment } from 'react';
import Menu from './../../menu/Menu'
import BotaoPadrao from '../../../components/botaoPadrao/botaoPadrao'
import corridaService from './../../../services/corridaService'
import swal from 'sweetalert';



class finalizarCorrida extends Component {
    
        constructor() {
            super()
    
            this.state = {
                idCorrida: '',                            
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

    onSubmit = (e) => {
        e.preventDefault()
    }

    encerrar = () =>{
        this.corridaService.finalizarCorrida(this.state.idCorrida).then(() =>{
            swal("Sucesso!","Corrida finalizada com sucesso", "success")
        }).catch((err) => {
            alert( err.response.data.message)       
            this.setState({ mensagemErro: err.response.data.detail })
    
        })
        }

    

    render() {
        return (
            <Fragment>
                 <Menu/>          
                <div className="containerFormRegistro--motorista">
                    <form onSubmit={this.onSubmit} className="formularioLoginRegistro--passageiro" autocomplete="off" >
                        <div className="textoEntrar">Encerrar corrida</div>
                        <label className="name--motorista">Id da corrida</label>  
                        <input type="text" className="campoFirstName" placeholder='Digite o id' name="idCorrida" onChange={this.onChange} value={this.state.idCorrida}/>                                             
                        <BotaoPadrao onClick={this.encerrar} InfoBotao={'Encerrar corrida'} tipoType={'submit'}/>   
                    </form>
                </div>                
            </Fragment>
        );
    }
}

export default finalizarCorrida;