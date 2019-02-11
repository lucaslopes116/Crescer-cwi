import React, { Component, Fragment } from 'react';
import Menu from './../../menu/Menu'
import BotaoPadrao from '../../../components/botaoPadrao/botaoPadrao'
import BotaoVoltar from '../../../components/botaoVoltar/botaoVoltar'
import contaVirtualService from '../../../services/contaVirtualService'
import swal from 'sweetalert';

class depositoPassageiro extends Component {
    constructor() {
        super()

        this.state = {
            idPassageiro: '',
            valorDepositado:'',                                   
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
    this.contaVirtualService.passageiroDepositar(this.state.idPassageiro,this.state.valorDepositado).then((response) =>{
        swal("Sucesso!","Deposito realizado com sucesso", "success")
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
                    <div className="textoEntrar">Conta virtual passageiro</div>
                    <label className="name--motorista">Id do passageiro</label>  
                    <input type="text" className="campoFirstName" placeholder='Digite o id' required name="idPassageiro" onChange={this.onChange} value={this.state.idPassageiro}/> 
                    <label className="name--motorista">Valor do deposito</label>  
                    <input type="text" className="campoFirstName" title ='Informe o valor do deposito' required  placeholder='valor do deposito' name="valorDepositado" onChange={this.onChange} value={this.state.valorDepositado}/>                              
                    <BotaoPadrao onClick={this.chamardepositoPassageiro} InfoBotao={'Depositar'} tipoType={'submit'}/>
                </form>
            </div>            
        </Fragment>
    );
}
}


export default depositoPassageiro;