import React, { Component, Fragment } from 'react';
import Menu from './../../menu/Menu'
import BotaoPadrao from '../../../components/botaoPadrao/botaoPadrao'
import corridaService from './../../../services/corridaService'
import swal from 'sweetalert';
import './iniciarCorrida.css'


class iniciarCorrida extends Component {
    
        constructor() {
            super()
    
            this.state = {
                idCorrida: '',
                tempoEstimado:'',
                valorCorrida:'',                     
                deveRedirecionarParaValorCorrida: false
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

    iniciaCorrida = () =>{
        this.corridaService.iniciarCorrida(this.state.idCorrida).then((response) =>{
            swal("Sucesso!","Corrida iniciada com sucesso", "success")
            console.log(response.data)
        this.setState({
            tempoEstimado: response.data.tempoEstimado,
            valorCorrida: response.data.valorCorrida,
            deveRedirecionarParaValorCorrida: true
        })
        }).catch((err) => {
            alert( err.response.data.message)
        })
        }

    renderRetornoDados(){                 
        return ( 
            <Fragment>
            <Menu/>
                <div className="retornoInicioCorrida--iniciarCorrida"> 
                    <h3>Informações da corrida</h3>
                    <h3>Tempo estimado: {this.state.tempoEstimado} minutos </h3>
                    <h3>Valor estimado: R${this.state.valorCorrida} reais</h3>
                </div>
            </Fragment>
    )
    }

    render() {
        return (
            this.state.deveRedirecionarParaValorCorrida ? this.renderRetornoDados() :
            <Fragment>
                 <Menu/>          
                <div className="containerFormRegistro--motorista">
                    <form onSubmit={this.onSubmit} className="formularioLoginRegistro--passageiro" autocomplete="off" >
                        <div className="textoEntrar">Iniciar corrida</div>
                        <label className="name--motorista">Id da corrida</label>  
                        <input type="text" className="campoFirstName" maxlength="1" pattern="[0-9]+$" required placeholder='Digite o id' name="idCorrida" onChange={this.onChange} value={this.state.idCorrida}/>                                             
                        <BotaoPadrao onClick={this.iniciaCorrida} InfoBotao={'Iniciar'} tipoType={'submit'}/>   
                    </form>
                </div>                
            </Fragment>
        );
    }
}

export default iniciarCorrida;