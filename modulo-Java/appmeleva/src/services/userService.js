import React, { Component } from 'react';

class userService extends baseService {
    constructor() {
        super()
        this.TOKEN_KEY = 'TOKEN'
    }

    post(username, password) {
        const dados = {
            username: username,
            password: password
        }
        return axios.post(`${this.baseUrl}authenticate`, dados)
    }

    usuarioLogado() {
        const token = this.getToken()
        return axios.get(`${this.baseUrl}account`, {
            headers: {
                'Authorization': `Bearer ${token}`
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

export default userService;