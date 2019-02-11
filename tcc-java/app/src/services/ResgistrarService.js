import axios from "axios/index";
import BaseService from "./BaseService";

export default class RegistrarService extends BaseService{


    constructor() {
        super()   
    }

    register(nomeCompleto, apelido, email, senha, dataNascimento, fotoPerfil) {
        const dados = {
            nomeCompleto: nomeCompleto,
            apelido: apelido,
            email: email,
            senha: senha,
            dataNascimento: dataNascimento,
            fotoPerfil: fotoPerfil
        }
        return axios.post(`${this.baseUrl}usuario`, dados)
    }
}