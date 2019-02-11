import axios from "axios/index";
import BaseService from "./baseService";

export default class veiculoService extends BaseService{


    constructor() {
        super()   
    }

    listarVeiculo(){  
        return axios.get(`${this.baseUrl}veiculos`)
    }

    criarVeiculo(marca,modelo,ano,cor,categoriaCnh,quantidadeDeLugares,foto,id){
        const dados = {
            marca: marca,
            modelo: modelo,
            ano: ano,
            cor: cor,
            categoriaCnh: categoriaCnh,
            quantidadeDeLugares: quantidadeDeLugares,            
            foto: foto,
            id:id
        }

        return axios.post(`${this.baseUrl}veiculos`,dados)
    }

    deletarVeiculo(id){
        return axios.delete(`${this.baseUrl}veiculos/${id}`)
    }
}
