import React, { Component, Fragment } from 'react';
import Menu from './../../menu/Menu'
import BotaoPadrao from '../../../components/botaoPadrao/botaoPadrao'
import BotaoVoltar from './../../../components/botaoVoltar/botaoVoltar'
import motoristaService from './../../../services/motoristaService'
import swal from 'sweetalert';
import './deletarMotorista.css'

class deletarMotorista extends Component {
    
        constructor() {
            super()
    
            this.state = {
                id: '',                            
                deveRedirecionarParaDashboard: false
            }
            this.motoristaService = new motoristaService()
        }

    onChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }       

    excluir = () =>{
        this.motoristaService.deletarMotorista(this.state.id).then(() =>{ 
            swal("Sucesso!","Motorista excluido com sucesso", "success")  
        }).catch((err) => {
            alert( err.response.data.message)
        })
        
        }

    render() {
        return (
            <Fragment>
                 <Menu/>          
                <div className="containerFormRegistro--motorista">
                    <form onSubmit={this.onSubmit} className="formularioLoginRegistro--passageiro" autocomplete="off" >
                        <div className="textoEntrar">Excluir motorista</div>
                        <label className="name--motorista">Id do motorista</label>  
                        <input type="text" className="campoFirstName"  required maxlength="2" pattern="[0-9]+$" placeholder='Digite o id' name="id" onChange={this.onChange} value={this.state.id}/>                                             
                        <BotaoPadrao onClick={this.excluir} InfoBotao={'Excluir'} tipoType={'submit'}/>  
                    </form>
                </div>                
            </Fragment>
        );
    }
}

export default deletarMotorista;