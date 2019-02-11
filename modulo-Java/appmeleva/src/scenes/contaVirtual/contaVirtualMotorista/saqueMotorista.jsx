import React, { Component, Fragment } from 'react';
import Menu from './../../menu/Menu'
import BotaoPadrao from '../../../components/botaoPadrao/botaoPadrao'
import BotaoVoltar from '../../../components/botaoVoltar/botaoVoltar'
import contaVirtualService from '../../../services/contaVirtualService'
import swal from 'sweetalert';

class saqueMotorista extends Component {
    constructor() {
        super()

        this.state = {
            idMotorista: '',
            valorSacado:'',                                   
            deveRedirecionarParaDashboard: false
        }      
    }   

    componentDidMount(){
        this.contaVirtualService = new contaVirtualService()
    }
 

onChange = (e) => {
    const target = e.target
    this.setState({
        [target.name]: target.value
    })
}       

chamardepositoPassageiro = () =>{    
    this.contaVirtualService.motoristaSaque(this.state.idMotorista,this.state.valorSacado).then((response) =>{
        swal("Sucesso!","Saque realizado com sucesso", "success")
        console.log(response.data)
    }).catch((err) => {
        alert( err.response.data.message)       
        this.setState({ mensagemErro: err.response.data.detail })

    })
    }

    onSubmit = (e) => {
        e.preventDefault()
    }

render() {
    return (
        <Fragment>
             <Menu/>          
            <div className="containerFormRegistro--motorista">
                <form onSubmit={this.onSubmit} className="formularioLoginRegistro--passageiro" autocomplete="off" >
                    <div className="textoEntrar">Conta virtual motorista</div>
                    <label className="name--motorista">Id do motorista</label>  
                    <input type="text" className="campoFirstName" placeholder='Digite o id' name="idMotorista" onChange={this.onChange} value={this.state.idMotorista}/> 
                    <label className="name--motorista">Valor do deposito</label>  
                    <input type="text" className="campoFirstName" title ='Informe o valor do saque' placeholder='valor do saque' name="valorSacado" onChange={this.onChange} value={this.state.valorSacado}/>                              
                    <BotaoPadrao onClick={this.chamardepositoPassageiro} InfoBotao={'Saque'} tipoType={'submit'}/>                   
                                       
                </form>
            </div>            
        </Fragment>
    );
}
}


export default saqueMotorista;