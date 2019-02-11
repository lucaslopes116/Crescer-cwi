import UserService from '../service/user.service'
export default class LoginPage {

    constructor() {
        this.userService = new UserService()
    }

    configure() {
        document.getElementById('loginButton').addEventListener('click', () => {
            const usuario = document.getElementById('usuario').value
            const senha = document.getElementById('senha').value
            this.userService.login(usuario, senha).then(response => {
              
                this.userService.salvarToken(response.data.id_token)
                window.location.href = 'http://localhost:3000/home.html'
            }).catch(err => {
                alert('tudo errado')
            })
        })
    }

}
const login = new LoginPage()
login.configure()