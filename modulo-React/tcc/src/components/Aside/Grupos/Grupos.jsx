import React, { Component, Fragment } from 'react';
import './Grupos.css'

class Grupos extends Component {



    render() {
        return (
            <Fragment>
                <div className="meus-grupos">
                    <div className="grupos">
                        <span className="texto-grupo">Meus grupos</span>
                        <img src="img/Vector3pontinhos.png" className="tres-pontos" alt="imagem 3 pontos"/>
                    </div>
                    <div className="grupos-opcoes">
                        <div className="grupo-conf">
                            <img src="img/Rectangle%20.png" className="retangulo" alt="quadrado amarelo"/>
                            <img src="img/Vectorproflinguica.png" className="vetor-quadrado"
                                 alt="icone professor linguiça"/>
                            <p className="texto-opcoes">Alunos do professor Linguiça</p>
                        </div>

                        <div className="grupo-conf">
                            <img src="img/Rectangle%20.png" className="retangulo" alt="quadrado amarelo"/>
                            <img src="img/Vectorbolaquadrada.png" className="vetor-quadrado" alt="icone bola quadrada"/>
                            <p className="texto-opcoes">Brique da bola quadrada</p>
                        </div>

                        <div className="grupo-conf">
                            <img src="img/Rectangle%20.png" className="retangulo" alt="quadrado amarelo"/>
                            <img src="img/jewelry-storetesouro.png" className="vetor-quadrado"
                                 alt="icone tesouro da mamae"/>
                            <p className="texto-opcoes">Tesouros da mamãe</p>
                        </div>

                        <div className="grupo-conf">
                            <img src="img/Rectangle%20.png" className="retangulo" alt="quadrado amarelo"/>
                            <img src="img/witch-hatbruxa.png" className="vetor-quadrado" alt="icone bruxa do 71"/>
                            <p className="texto-opcoes">Rolê na Bruxa do 71 #eufui</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="meus-grupos">
                    <div className="grupos">
                        <span className="texto-grupo">Eventos</span>
                        <a href="cadastro/index.html" target="_blank">
                            <img src="img/Vector3pontinhos.png" className="tres-pontos" alt="imagem 3 pontos"/>
                        </a>
                        <div className="evento-botao">
                            <button className="ocultar"><span className="btn-ocultar">Ocultar</span></button>
                            <button className="evento"><span className="btn-evento">Criar evento</span></button>
                        </div>
                    </div>
                    <div className="posts">
                        <img src="img/image%202chaves.png" className="img-post-pequeno-chaves" alt="foto do chaves"/>
                        <div className="juncao-info">
                            <p className="info-posts">
                                <strong>Hoje</strong>
                            </p>
                            <p className="evento-aniversario">Aniversário</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Grupos;