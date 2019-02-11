export default class BuscaDadosPersonagem{

    constructor(){
    }

    namePersonagem(nome){

        let div = document.querySelector('.info-personagem')
        
        this.trocaNome(div)        
        const label = document.createElement('div')
        label.className="personagem-nome"
        label.innerHTML += `<h1>${nome}</h1>`
        label.innerHTML += `<div class="container-info">
        </div>`
        div.appendChild(label)
    }

    dadosAltura(height, altura) {
        const div = document.querySelector('.container-info')       
        let label = document.createElement('label')
        label.className = 'ajuste'

        label.innerHTML += `<span class="personagem-altura">${height}</span>`
        label.innerHTML += `<span class="altura-estilo">${altura}</span>`
        div.appendChild(label)
    }

        dadosEstiloLuta(estilo, tipoEstilo){

            let div = document.querySelector('.container-info')
            let divDados = document.createElement('div')
            let label = document.createElement('label')
            label.className = 'ajuste'
            label.innerHTML += `<span class="personagem-estilo">${estilo}</span>`
            label.innerHTML += `<span class="estilo-estilo">${tipoEstilo}</span>`
            div.appendChild(label)
        }

        dadosHabilidade(habilidade, estiloHabilidade){

            var div = document.querySelector('.container-info')

            var divDados = document.createElement('div')
            var label = document.createElement('label')
            label.className = 'ajuste'
            label.innerHTML += `<span class="personagem-habilidade">${habilidade}</span>`
            label.innerHTML += `<span class="estilo-habilidade">${estiloHabilidade}</span>`
            div.appendChild(label)
        }

    trocaNome(div){

        div.innerHTML= ""
   }
}
