import axios from "axios/index";
import BaseService from "./BaseService";
import UserService from "./UserService";

export default class PostService extends BaseService{
    
    constructor() {
        super()
        this.TOKEN_KEY = 'TOKEN'   

        this.usuarioService = new UserService;
    }

    listarPost(){  
        return axios.get(`${this.baseUrl}post`)
    }

    criarPost(tituloPost,descricaoPost,imagemPost){
        const token = this.usuarioService.getToken();
        const dados={
            tituloPost:tituloPost,
            descricaoPost:descricaoPost,
            imagemPost:imagemPost
        }  
        return axios.post(`${this.baseUrl}post`,dados,{

        headers: {
            'Authorization': `${token}`
        }
        
    })
    }
}