import BaseService from './base.service'
import axios from 'axios';
export default class UserService extends BaseService {

    constructor() {
        super()
        this.TOKEN_KEY = 'TOKEN'
    }

    login(usuario, senha) {
        const dados = {
            username: usuario,
            password: senha
        }
        return axios.post(`${this.baseUrl}authenticate`, dados)
    }

    salvarToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token)
    }

    getToken() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

}