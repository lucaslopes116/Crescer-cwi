import UserService from "./UserService";
import axios from "axios/index";
import BaseService from "./BaseService";

export default class GrupoService extends BaseService{


    constructor() {

        super()
        this.userService = new UserService()

    }


    buscaGrupo(){
        const token = this.userService.getToken()

        return axios.get(`${this.baseUrl}grupos`,

            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
    }
}
