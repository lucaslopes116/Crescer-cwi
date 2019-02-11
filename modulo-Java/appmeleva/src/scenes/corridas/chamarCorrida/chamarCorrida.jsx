import React, { Component, Fragment } from 'react';
import corridaService from '../../../services/corridaService'
import Menu from './../../menu/Menu'
import BotaoPadrao from './../../../components/botaoPadrao/botaoPadrao'
import swal from 'sweetalert';
import './chamarCorrida.css'


class chamarCorrida extends Component {
    constructor() {
        super()

        this.state = {
            idPassageiro: '',
            pontoInicial:'',
            pontoFinal: '',
            marca:'',
            modelo:'',
            cor:'',
            foto:'',
            idCorrida:'',                                    
            deveRedirecionarParaDadosDaCorrida: false
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

chamarCorridaPassageiro = () =>{    
    this.corridaService.chamarCorrida(this.state.pontoInicial,this.state.pontoFinal,this.state.idPassageiro).then((response) =>{    
        swal("Sucesso!","Chamou uma corrida com sucesso", "success")
        this.setState({
            idCorrida: response.data.id,
            marca: response.data.veiculo.marca,
            modelo: response.data.veiculo.modelo,
            cor: response.data.veiculo.cor,
            foto: response.data.veiculo.foto,
            deveRedirecionarParaDadosDaCorrida: true
        })        
    }).catch((err) => {
        alert( err.response.data.message)
    })
}

    onSubmit = (e) => {
        e.preventDefault()
    }

    renderRetornoDados(){                 
            return ( 
                <Fragment>
                <Menu/> 
                <div className="retornoCorrida--chamarCorrida">
                    <h2>Infos da corrida</h2>
                    <h3>Codigo da corrida: {this.state.idCorrida}</h3>                   
                    <h3>Dados do veiculo</h3>
                    <h3>Marca: {this.state.marca}</h3>
                    <h3>Modelo: {this.state.modelo}</h3>
                    <h3>Cor: {this.state.cor}</h3>
                    <img src={this.state.foto} alt="foto do veiculo"/>
             </div>
             </Fragment>
        )
}
    

render() {
    return (
        this.state.deveRedirecionarParaDadosDaCorrida ? this.renderRetornoDados() :
        <Fragment>
             <Menu/>          
            <div className="containerFormRegistro--motorista">
                <form onSubmit={this.onSubmit} className="formularioLoginRegistro--passageiro" autocomplete="off" >
                    <div className="textoEntrar">Chamar corrida</div>
                    <label className="name--motorista">Id do passageiro</label>  
                    <input type="text" className="campoFirstName" placeholder='Digite o id' name="idPassageiro" onChange={this.onChange} value={this.state.idPassageiro}/> 
                    <label className="name--motorista">Ponto de inicio da corrida</label>  
                    <input type="text" className="campoFirstName" placeholder='Inicio do trajeto' name="pontoInicial" onChange={this.onChange} value={this.state.pontoInicial}/>                              
                    <label className="name--motorista">Ponto final da corrida</label>  
                    <input type="text" className="campoFirstName" placeholder='Fim do trajeto' name="pontoFinal" onChange={this.onChange} value={this.state.pontoFinal}/>                                                                          
                    <BotaoPadrao onClick={this.chamarCorridaPassageiro} InfoBotao={'Chamar'} tipoType={'submit'}/>  
                </form>
            </div>                    
        </Fragment>
    )
}

}


export default chamarCorrida;