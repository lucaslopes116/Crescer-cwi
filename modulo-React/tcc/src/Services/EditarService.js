import BaseService from './BaseService'
import axios from 'axios';
import UserService from './UserService'
export default class EditarService extends BaseService {

    constructor() {
        super()
        this.userService = new UserService()

    }

    alterar(email, login, imagem, nome, sobreNome) {
        const token =  this.userService.getToken()
        const dados = {
            email: email,
            login: login,
            imageUrl: imagem,
            firstName: nome,
            lastName: sobreNome


        }
        return axios.post(`${this.baseUrl}account`, dados,

            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
    }

}



