import BaseService from './BaseService'
import axios from 'axios';
export default class UserService extends BaseService {

    constructor() {
        super()
        this.TOKEN_KEY = 'TOKEN'
    }

    logar(email, senha) {
        const dados = {
            email: email,
            senha: senha
        }
        return axios.post(`${this.baseUrl}public/login`, dados)
    }

    usuarioLogado() {
        const token = this.getToken()
        return axios.get(`${this.baseUrl}usuario`, {
            headers: {
                'Authorization': `${token}`
            }
        })
    }

    usuarioPorIdNoParametro(id) {
        const token = this.getToken()
        return axios.get(`${this.baseUrl}usuario/id/${id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
    }

    listarUsuario(nome) {
        const token = this.getToken()
        const dados={
            nome:nome
        }
        return axios.get(`${this.baseUrl}usuario/todos`,dados, {
            headers: {
                'Authorization': `${token}`
            }
        })
    }

    procurarUsuarioPorNome(nome){
        const token = this.getToken();
        const dados={
            nome:nome
        } 
        return axios.get(`${this.baseUrl}usuario/nome`,dados,{

            headers: {
                'Authorization': `${token}`
            }
        })
    }

    procurarUsuarioPorEmail(email){
        const token = this.getToken();
        const dados={
            email:email
        } 
        return axios.get(`${this.baseUrl}usuario/email`,dados,{

            headers: {
                'Authorization': `${token}`
            }
            
        })
    }

    salvarToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token)
    }

    getToken() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    removeToken(){
        return localStorage.removeItem(this.TOKEN_KEY)
    }

}