export default class Personagem {

    constructor(){
    }

    imagemPersonagemJogavel(element,id){
        let link = element.smallImg
        let name = element.name
        let div = document.querySelector('.escolhe-personagem')
        const label = document.createElement('label')        
        label.className = 'foto-personagemPequeno'
        label.innerHTML = `<img src="${link}" alt="${name}" id="${id}"class="personagem-pequeno"><span class="nome-personagem">${name}</span>`
        
        div.appendChild(label)

    }



}