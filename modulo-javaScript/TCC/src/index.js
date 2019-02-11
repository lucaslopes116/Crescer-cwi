import BaseService from './service/base.service.js'
import './index.css';
import Personagem from './service/seleciona.personagem.js'
import BuscaDadosPersonagem from './service/seleciona.lutador.service'
import ImagemPrincipal from './service/personagem.img.grande.service'
import Bandeira from './service/bandeira.service'

const buscaDados = new  BuscaDadosPersonagem();
const posterPersonagem = new  ImagemPrincipal();
const bandeiraPersonagem = new Bandeira();
const baseService = new BaseService();
const personagem = new Personagem();

let id = 0;
let valorId;
let personagemSelecionado;

baseService.buscaApi().then(result =>{
    let listaPersonagem = result.data;
    listaPersonagem.forEach(element =>{
        console.log(listaPersonagem);
        personagem.imagemPersonagemJogavel(element,id);
        id++
    });

    let elementos = document.querySelectorAll('.escolhe-personagem');

    for(let idPersonagem of elementos){
        idPersonagem.addEventListener('click', function(idLista){
            valorId =  idLista.target.id;
            personagemSelecionado = listaPersonagem[valorId];
            let heigth = "Heigth";
            let estiloDeLutar= "Fighting style";
            let habilidadePersonagem = "Skills";

            posterPersonagem.posterPrincipal(personagemSelecionado.largeImg);
            bandeiraPersonagem.bandeira(personagemSelecionado.birth);
            buscaDados.namePersonagem(personagemSelecionado.name);
            buscaDados.dadosAltura(heigth, personagemSelecionado.height);
            buscaDados.dadosEstiloLuta(estiloDeLutar, personagemSelecionado.fighting);
            buscaDados.dadosHabilidade(habilidadePersonagem, personagemSelecionado.skills);
        });
    }
})
















