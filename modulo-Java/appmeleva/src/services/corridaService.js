import axios from "axios/index";
import BaseService from "./baseService";

export default class corridaService extends BaseService{


    constructor() {
        super()   
    }

    chamarCorrida(pontoInicial,pontoFinal,idPassageiro){
        const dados ={
            pontoInicial: pontoInicial,
            pontoFinal: pontoFinal
        }  
        return axios.post(`${this.baseUrl}corridas/passageiros/${idPassageiro}`,dados)
    }

    iniciarCorrida(idCorrida){

        return axios.post(`${this.baseUrl}corridas/${idCorrida}`)
    }

    finalizarCorrida(idCorrida){

        return axios.put(`${this.baseUrl}corridas/${idCorrida}`)
    }

    listarCorrida(idPassageiro){

        return axios.get(`${this.baseUrl}corridas/passageiros/${idPassageiro}`)
    }

    avaliarPassageiro(idCorrida,avaliacaoPassageiro){        

        return axios.post(`${this.baseUrl}corridas/${idCorrida}/passageiros/avaliacao?avaliacao=${avaliacaoPassageiro}`)
    }

    avaliarMotorista(idCorrida,avaliacaoMotorista){        

        return axios.post(`${this.baseUrl}corridas/${idCorrida}/motoristas/avaliacao?avaliacao=${avaliacaoMotorista}`)
    }
    
}
