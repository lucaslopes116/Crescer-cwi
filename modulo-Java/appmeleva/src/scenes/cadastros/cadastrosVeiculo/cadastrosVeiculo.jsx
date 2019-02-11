import React, { Component, Fragment } from 'react';
import { Redirect, Link, Route } from 'react-router-dom'
import BotaoPadrao from '../../../components/botaoPadrao/botaoPadrao'
import BotaoVoltar from './../../../components/botaoVoltar/botaoVoltar'
import veiculoService from './../../../services/veiculoService'
import Menu from './../../menu/Menu'
import swal from 'sweetalert';
import './cadastrosVeiculo.css'


class cadastrosVeiculo extends Component {

    constructor() {
        super()

        this.state = {
            id:'',
            marca:'',
            modelo:'',
            ano:'',
            cor:'',
            categoriaCnh:'',
            quantidadeDeLugares:'',            
            foto:'',
            iDMotorista:'',
            nomeMotorista:'',
            emailMotorista:'',
            numeroCnhCarteira:'',
            categoriaCnh:'',
            dataVencimentoCnh:'',
            dataNascimentoMotorista:'',

            deveRedirecionarParaVeiculoCadastrado: false
        }
        this.veiculoService = new veiculoService()
    }
    
    
    onChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    handleChangeCategoriaCnh(event) {
        let value = event.target.value;
        this.setState({
            categoriaCnh: value
        });
    }

    handleChangeCor(event) {
        let value = event.target.value;
        this.setState({
            cor: value
        });
    }

    handleChangeMarca(event) {
        let value = event.target.value;
        this.setState({
            marca: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.veiculoService.criarVeiculo(this.state.marca, this.state.modelo, this.state.ano,this.state.cor,this.state.categoriaCnh,this.state.quantidadeDeLugares,this.state.foto,this.state.id).then((response) => {
            swal("Sucesso!","Veiculo cadastrado com sucesso", "success") 
            console.log(response.data) 
            this.setState({
                id: response.data.id,
                iDMotorista: response.data.motorista.id,
                nomeMotorista: response.data.motorista.nome,
                emailMotorista: response.data.motorista.email,
                dataNascimentoMotorista: response.data.motorista.dataNascimento,
                numeroCnhCarteira: response.data.motorista.carteiraDeHabilitacao.numeroDoDocumento,
                categoriaCnh: response.data.motorista.carteiraDeHabilitacao.categoria,
                dataVencimentoCnh: response.data.motorista.carteiraDeHabilitacao.dataVencimento,
                deveRedirecionarParaVeiculoCadastrado: true
            })
        }).catch((err) => {
            alert( err.response.data.message) 
        })
    }

    renderVeiculoCriado(){
        return (<Fragment>
                <Menu/>  
                    <div className="retornoCadastro--veiculo">
                        <h3>Veiculo</h3>
                        <h3>Id: {this.state.id}</h3>
                        <h3>Marca: {this.state.marca}</h3>
                        <h3>Modelo: {this.state.modelo}</h3>
                        <h3>Ano: {this.state.ano}</h3>
                        <h3>Categoria do veiculo: {this.state.categoriaCnh}</h3>
                        <h3>Quantidade de lugar: {this.state.quantidadeDeLugares}</h3>
                        <img src={this.state.foto} alt="imagem do veiculo"/>
                        <h3>Motorista</h3>
                        <h3>Id: {this.state.iDMotorista}</h3>
                        <h3>Nome: {this.state.nomeMotorista}</h3>
                        <h3>E-mail: {this.state.emailMotorista}</h3>
                        <h3>Data de nascimento: {this.state.dataNascimentoMotorista}</h3>
                        <h3>Carteira de habilitação</h3>
                        <h3>Numero do documento da CNH: {this.state.numeroCnhCarteira}</h3>
                        <h3>Categoria da CNH: {this.state.categoriaCnh}</h3>
                        <h3>Data de vencimento da CNH: {this.state.dataVencimentoCnh}</h3>
                    </div>
                </Fragment>
        )
    }

    render() {
        return (
            this.state.deveRedirecionarParaVeiculoCadastrado ? this.renderVeiculoCriado() :
            <Fragment>   
                <Menu/>          
                <div className="containerFormRegistro--motorista">
                    <form onSubmit={this.onSubmit} className="formularioLoginRegistro--veiculo" autocomplete="off" >
                        <div className="textoEntrar">Cadastrar veiculo</div>
                        <label className="name--motorista">Marca</label>
                        <select className="name--motorista" onChange={(e) => this.handleChangeMarca(e)}>
                            <option  value="AUDI">AUDI</option>
                            <option  value="BMW">BMW</option>
                            <option  value="CHERY">CHERY</option>
                            <option  value="CHEVROLET">CHEVROLET</option>
                            <option  value="CHRYSLER">CHRYSLER</option>
                            <option  value="CITROEN">CITROEN</option>
                            <option  value="DODGE">DODGE</option>
                            <option  value="EFFA">EFFA</option>
                            <option  value="FIAT">FIAT</option>
                            <option  value="FORD">FORD</option>
                            <option  value="GEELY">GEELY</option>
                            <option  value="HONDA">HONDA</option>
                            <option  value="HYUNDAI">HYUNDAI</option>
                            <option  value="JAC">JAC</option>
                            <option  value="JEEP">JEEP</option>
                            <option  value="KIA">KIA</option>
                            <option  value="LAND_ROVER">LAND ROVER</option>
                            <option  value="LEXUS">LEXUS</option>
                            <option  value="LIFAN">LIFAN</option>
                            <option  value="MERCEDES_BENZ">MERCEDES BENZ</option>
                            <option  value="NISSAN">NISSAN</option>
                            <option  value="PEUGEOT">PEUGEOT</option>
                            <option  value="RENAULT">RENAULT</option>
                            <option  value="SEAT">SEAT</option>
                            <option  value="SMART">SMART</option>
                            <option  value="SSANGYONG">SSANGYONG</option>
                            <option  value="SUBARU">SUBARU</option>
                            <option  value="SUZUKI">SUZUKI</option>
                            <option  value="TOYOTA">TOYOTA</option>
                            <option  value="VOLKSWAGEN">VOLKSWAGEN</option>
                            <option  value="VOLVO">VOLVO</option>
                        </select>
                        <label className="name--motorista">Modelo</label>
                        <input type="text" className="campoFirstName" title="Modelo do veiculo" placeholder='Digite o modelo do veiculo' name="modelo" onChange={this.onChange} value={this.state.modelo}/>
                        <label className="name--motorista">Ano</label>
                        <input type="text" className="campoFirstName" title="Ano do veiculo" maxlength="4" pattern="[0-9]+$" placeholder='Digite o ano' name="ano" onChange={this.onChange} value={this.state.ano}/>
                        <label className="name--motorista">Cor</label>
                        <select className="name--motorista" name="cor" onChange={(e) => this.handleChangeCor(e)}>
                            <option value="Prata">Prata</option>
                            <option value="Branco">Branco</option>
                            <option value="Preto">Preto</option>
                        </select>
                        <label className="name--motorista">Categoria do veiculo</label>
                        <select className="name--motorista" onChange={(e) => this.handleChangeCategoriaCnh(e)}>
                            <option  value="A">A</option>
                            <option  value="ACC">ACC</option>
                            <option  value="B">B</option>
                            <option  value="C">C</option>
                            <option  value="D">D</option>
                            <option  value="E">E</option>
                        </select>   
                        <label className="name--motorista">Quantidade de lugar</label>
                        <input type="text" className="campoFirstName" title="Quantidade de ocupantes do veiculo" placeholder='Informe a quantidade de ocupantes do veiculo' name="quantidadeDeLugares" onChange={this.onChange} value={this.state.quantidadeDeLugares}/> 
                        <label className="name--motorista">Foto</label>
                        <input type="url" className="campoFirstName" title="Foto do veiculo" placeholder='Cole a foto do veiculo' name="foto" onChange={this.onChange} value={this.state.foto}/> 
                        <label className="name--motorista">Codigo do motorista</label>
                        <input type="text" className="campoFirstName" title="Identificação do motorista" placeholder='id' name="id" onChange={this.onChange} value={this.state.id}/>                                          
                        <BotaoPadrao InfoBotao={'Cadastrar'} tipoType={'submit'}/>
                    </form>
                </div>                
            </Fragment>
        )
    }
}

export default cadastrosVeiculo;
