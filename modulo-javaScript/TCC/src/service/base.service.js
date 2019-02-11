import axios from "axios/index";

export default class BaseService {
    
        constructor() {
            this.baseUrl = 'http://street-crescer.surge.sh/characters.json'
        }

      buscaApi(){

        return axios.get(`${this.baseUrl}`)
    }
    
    }