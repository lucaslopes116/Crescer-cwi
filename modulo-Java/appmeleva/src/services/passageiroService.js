import axios from "axios/index";
import BaseService from "./baseService";

export default class passageiroService extends BaseService{


    constructor() {
        super()   
    }

    listarPassageiro(){  
        return axios.get(`${this.baseUrl}passageiros`)
    }

    criarPassageiro(nome,email,dataNascimento){
        const dados = {
            nome: nome,
            email: email,
            dataNascimento: dataNascimento
        }

        return axios.post(`${this.baseUrl}passageiros`,dados)
    }

    deletarPassageiro(id){       

        return axios.delete(`${this.baseUrl}passageiros/${id}`)
    }
}
