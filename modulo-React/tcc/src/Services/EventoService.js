import UserService from "./UserService";
import axios from "axios/index";
import BaseService from "./BaseService";

export default class EventoService extends BaseService{


    constructor() {

        super()
        this.userService = new UserService()

    }

    buscaEvento(){
        const token = this.userService.getToken()

        return axios.get(`${this.baseUrl}eventos`,

            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
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
