import PostService from '../service/post.service'
import UserService from '../service/user.service'
export default class HomePage {

    constructor() {
        this.postService = new PostService()
        const userService = new UserService()
        if (!userService.getToken()) {
            window.location.href = 'http://localhost:3000/login.html'
        }
    }

    configure() {
        document.getElementById('btnSalvarPost').addEventListener('click', () => {
            const titulo = document.getElementById('titulo').value
            const descricao = document.getElementById('descricao').value
            this.postService.criarPost(titulo, descricao).then(result => {
                this.pegarPost()
                

            }).catch(err => {
                alert('deu erro')
                
            })
        })
    }

    pegarPost(){

        this.postService.buscaPost().then(result =>{  

                let lista = result.data
                let corpo = document.getElementById('corpo')

                lista.forEach(element => {
                    let linha = document.createElement('tr')
                    linha.innerHTML = `
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.handle}</td>
                        <button id="${element.id}">Deletar</button>`

                corpo.appendChild(linha)
                let botao = document.getElementById(`${element.id}`)
                botao.addEventListener(click, () => {
                    lista.remove()
                })
                });    
                               
            
        }).catch(err =>{

            alert('não achou nenhum post')
        })
                            

    }

}
const homePage = new HomePage()
homePage.configure()