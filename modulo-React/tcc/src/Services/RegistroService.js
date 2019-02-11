import BaseService from './BaseService'
import axios from 'axios';
export default class RegistroService extends BaseService {

    constructor() {
        super()

    }

    register(email, login, password, imagem, nome, sobreNome) {
        const dados = {
            email: email,
            login: login,
            password: password,
            imageUrl: imagem,
            firstName: nome,
            lastName: sobreNome


        }
        return axios.post(`${this.baseUrl}register`, dados)
    }



}
