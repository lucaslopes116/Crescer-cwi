import axios from 'axios';
import UserService from './UserService'
import BaseService from './BaseService'
export default class PostService extends BaseService {

    constructor() {
        super()
        this.userService = new UserService()
    }

    getPosts() {
        const token = this.userService.getToken()
        return axios.get(`${this.baseUrl}posts`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    novoPost(titulo, descricao, imageUrl) {

        const dados = {
            titulo: titulo,
            descricao: descricao,
            imageUrl: imageUrl
        }
        const token = this.userService.getToken()
        return axios.post(`${this.baseUrl}posts`, dados, {
            headers: {
                'Authorization': `Bearer ${token}`
            }

        })

    }
}