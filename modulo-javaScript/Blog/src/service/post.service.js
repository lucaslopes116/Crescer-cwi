import axios from 'axios'
import BaseService from './base.service'
import UserService from './user.service'
export default class PostService extends BaseService {

    constructor() {
        super()
        this.userService = new UserService()
        this.token = this.userService.getToken()
    }

    criarPost(titulo, descricao) {
        
        const dados = {
            name: titulo,
            handle: descricao
        }
        return axios.post(`${this.baseUrl}blogs`, dados,
            {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
    }

    buscaPost(){
        
        return axios.get(`${this.baseUrl}blogs`,
        {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        })
    }

}