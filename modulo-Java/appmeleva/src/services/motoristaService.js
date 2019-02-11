import axios from "axios/index";
import BaseService from "./baseService";

export default class motoristaService extends BaseService{


    constructor() {
        super()   
    }

    listarMotorista(){  
        return axios.get(`${this.baseUrl}motoristas`)
    }

    criarMotorista(nome,email,dataNascimento,numeroDoDocumento,categoria,dataVencimento){
        const dados = {
            nome: nome,
            email: email,
            dataNascimento: dataNascimento,
            carteiraDeHabilitacao: {
            numeroDoDocumento: numeroDoDocumento ,
            categoria: categoria,
            dataVencimento: dataVencimento
            }          
        }

        return axios.post(`${this.baseUrl}motoristas`,dados)
    }

    deletarMotorista(id){      

        return axios.delete(`${this.baseUrl}motoristas/${id}`)
    }
}
