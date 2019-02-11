import React, { Component } from 'react';
import BaseService from "./BaseService";
import UserService from "./UserService";
import axios from "axios/index";

class AmigosService extends BaseService {
   
    constructor() {
        super()
        this.TOKEN_KEY = 'TOKEN'   

        this.usuarioService = new UserService;
    }

    listarSolicitacoes(){
        const token = this.usuarioService.getToken();
        return axios.get(`${this.baseUrl}amigos`,{

            headers: {
                'Authorization': `${token}`
            }
            
        })
    }

    

    aceitarAmizade(idUsuario,idAmigo){    
        const token = this.usuarioService.getToken();
        const dados={
            idUsuario: idUsuario,
            idAmigo: idAmigo            
        } 
        return axios.put(`${this.baseUrl}amigos`,dados,{

            headers: {
                'Authorization': `${token}`
            }
            
        })
    }

    mandarConviteDeAmizade(idUsuario){
        const token = this.usuarioService.getToken();
        return axios.post(`${this.baseUrl}amigos/${idUsuario}`, null,{

            headers: {
                'Authorization': `${token}`
            }
            
        })
    }

    recusarAmizade(idUsuario,idAmigo){
        const token = this.usuarioService.getToken();
        const dados={
            idUsuario:idUsuario,
            idAmigo:idAmigo            
        } 
        return axios.put(`${this.baseUrl}amigos/recusarAmizade`,dados,{

            headers: {
                'Authorization': `${token}`
            }
            
        })
    }
}

export default AmigosService;