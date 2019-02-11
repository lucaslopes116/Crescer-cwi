import axios from "axios/index";
import BaseService from "./baseService";

export default class contaVirtualService extends BaseService{


    constructor() {
        super()   
    }

    passageiroDepositar(idPassageiro,valorDepositado){
        
        return axios.put(`${this.baseUrl}passageiros/${idPassageiro}/conta-virtual?saldo=${valorDepositado}`)
    }

    motoristaSaque(idMotorista,valorSacado){

        return axios.put(`${this.baseUrl}motoristas/${idMotorista}/conta-virtual?saldo=${valorSacado}`)
    }
    
    
}
