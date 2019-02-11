import axios from 'axios'
import BaseService from './base.service'
export default class RegisterService extends BaseService {

    constructor() {
        super()
    }

    registrar(email, usuario, senha) {
        const dados = {
            email,
            login: usuario,
            password: senha
        }
        return axios.post(`${this.baseUrl}register`, dados)
    }

}