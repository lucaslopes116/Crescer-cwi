export default class ImagemPrincipal{
    constructor(){

    }
    posterPrincipal(poster){


        let div = document.querySelector('.foto-personagem')
        this.removePoster(div)

        const label = document.createElement('div')
        label.className = '.foto-personagem'
        label.innerHTML = `<img src="${poster}" class="imgAnimada">`

        div.appendChild(label)

    }

    removePoster(div){

        div.innerHTML=" "

    }
}