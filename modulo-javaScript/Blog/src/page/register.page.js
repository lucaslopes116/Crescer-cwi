import RegisterService from '../service/register.service'
export default class RegisterPage {

    constructor() {
        this.registerService = new RegisterService()
    }

    configure() {
        document.getElementById('btnRegistro').addEventListener('click', () => {
            const email = document.getElementById('email').value
            const usuario = document.getElementById('usuario').value
            const senha = document.getElementById('senha').value
            this.registerService.registrar(email, usuario, senha).then(response => {
                setTimeout(() => {
                    window.location.href = "http://localhost:3000/"
                }, 3000)
                alert('criou usuario')
                console.log(response)
            }).catch(err => {
                alert('deu erro: ' + err.response.data.title)
                console.log(err.response.data.title)
            })
        })
    }



}
const registerPage = new RegisterPage()
registerPage.configure()