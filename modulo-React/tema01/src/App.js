import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo'
import Noticia from './components/Noticia'
import HeaderTabela from './components/HeaderTabela'
import Tabela from './components/Tabela'
import TabelaInfo from './components/TabelaInfo'
import TabelaSegundoHeader from './components/TabelaSegundoHeader'

class App extends Component {

  noticias() {
    return [
      {
        titulo: 'Ferguson pergunta por time do filho e faz piada sobre a Champions, diz jornal',
        descricao: 'Primeiras palavras do ex-técnico do United, internado desde sábado, teriam sido sobre futebol',
        categoria: 'futebol inglês ',
        tempo: '2 dias',
        imagem: 'https://s2.glbimg.com/ikTeV1IpLGrDZxvmnriRktnNCyI=/0x0:3500x2334/540x304/smart/http://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/7/P/8awN8YQFeZHs4Xqej3fQ/2018-05-05t193830z-1062291551-rc1c507345c0-rtrmadp-3-soccer-england-mun-ferguson.jpg'
      },
      {
        titulo: 'Com dores no joelho direito, Daniel Alves fará exames nesta quarta e preocupa',
        descricao: 'Lateral brasileiro foi substituído no segundo tempo da vitória do PSG sobre o Les Herbiers, e pessoas próximas temem problema que o tire da Copa. Marquinhos tranquiliza: "Caminhou bem"',
        categoria: ' futebol francês ',
        tempo: '12 horas',
        imagem: 'https://s2.glbimg.com/S0sBhWxwp6g79MZNK4M5crEsTcY=/351x0:4866x2540/540x304/smart/http://s2.glbimg.com/2LjzbPkecYxWILV-jmK4Vh45Ftk=/275x1172:5568x3712/5293x2540/s.glbimg.com/es/ge/f/original/2018/05/08/000_14o4l6.jpg'
      },
      {
        titulo: 'Números da 4ª rodada: Grêmio ajuda no recorde de gols, goleiro do Bahia faz contra',
        descricao: 'Quantidade de gols surpreende, mas também chamam atenção no número de faltas cometidas, passes errados, cartões amarelos e vermelhos',
        categoria: ' grêmio',
        tempo: '1 hora',
        imagem: 'https://s2.glbimg.com/eS1xVCI-JNl7FlBwhX3dq9L6C9g=/0x113:2048x1266/540x304/smart/http://s.glbimg.com/es/ge/f/original/2018/05/08/28067718338_84c26ef4f3_k.jpg'
      }
    ]
  }

  classificacao() {
    return [
      {
        time: 'Grêmio',
        pontuacao: 99,
        posicao: 1
      },
      {
        time: 'Brasil',
        pontuacao: 10,
        posicao: 2
      },
      {
        time: 'Inter',
        pontuacao: 0,
        posicao: 3
      }
    ]
  }

  mostrarNoticia() {
    return this.noticias().map((materia, index) => {
      return <Noticia
        imagem={materia.imagem}
        categoria={materia.categoria}
        tituloNoticia={materia.titulo}
        descricao={materia.descricao}
        tempo={materia.tempo}
      ></Noticia>
    })
  }

  mostrarTabelaClassificacao() {
    return this.classificacao().map((dados, index) => {
      return <Tabela
        time={dados.time}
        posicao={dados.posicao}
        pontuacao={dados.pontuacao}
      ></Tabela>
    })
  }

  render() {
    { console.log(this.mostrarTabelaClassificacao()) }

    return (
      <html>
        <header>
          <link href="index.css" rel="stylesheet" type="text/css"></link>
        </header>
        <body>
          <div>
            <Titulo tituloSite='globoesporte.com' />
            <div class="App">
              <div class="noticia">
                {this.mostrarNoticia()}
              </div>
              <div class="classificacao">
                <HeaderTabela tituloTabela='Classificação' />
                <TabelaSegundoHeader />
                <table class="classificacao-table">
                  <TabelaInfo />
                  {this.mostrarTabelaClassificacao()}
                </table>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default App;
