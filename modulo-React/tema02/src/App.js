import React, { Component } from 'react';
import logo from './logo.svg';
import './formulario.css';
import PokemonCard from './components/pokemonCard/pokemonCard.components'
import Titulo from './components/titulo.components/titulo'
import AdicionarPokemonBotao from './components/pokemonCard/adicionarPokemonBotao'
import Input from './components/input/input'
import Button from './components/button/button'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      pokemons: [],
      name: '',
      imageUrl: '',
      lista: true,
      validaInput: true      
    }

    this.onIrFomulario = this.onIrFomulario.bind(this)
  }


  componentDidMount() {
    this.setState({
      pokemons: [
        {
          name: "Mewtwo",
          imageUrl: "https://vignette.wikia.nocookie.net/pokepediabr/images/d/d3/Mewtwo.png/revision/latest?cb=20130519030910&path-prefix=pt-br"
        },
        {
          name: "Squirtle",
          imageUrl: "https://vignette.wikia.nocookie.net/pokemontowerdefensethree/images/f/f3/Squirtle.jpg/revision/latest?cb=20160806214440"
        },
        {
          name: "Pidgeotto",
          imageUrl: "https://vignette.wikia.nocookie.net/nintendo/images/5/57/Pidgeotto.png/revision/latest?cb=20141002082803&path-prefix=en"
        },
        {
          name: "Charizard",
          imageUrl: "https://vignette.wikia.nocookie.net/nintendo/images/9/95/Charizard.png/revision/latest?cb=20141002083306&path-prefix=en"
        }
      ]
    })
  }

  listaPokemon() {

    return this.state.pokemons.map((pokemon, index) => {
      return <PokemonCard
        name={pokemon.name}
        imageUrl={pokemon.imageUrl} />
    })
  }

  renderPaginaPokemon() {
    return (
      <div className="container">
        <Titulo tamanho={this.state.pokemons.length} />
        <div className="pokemon-container">
          {this.listaPokemon()}
          <AdicionarPokemonBotao irFomulario={this.onIrFomulario} />
        </div>
      </div>
    )
  }

  onVoltarPagina = (event) =>
    this.setState({ lista: true })

  onIrFomulario = (event) =>
    this.setState({ lista: false })

  onAdicionarpokemon = (event) => {
    event.preventDefault()
    const novosPokemons = [...this.state.pokemons, { name: this.state.name, imageUrl: this.state.imageUrl }]
    this.setState({ pokemons: novosPokemons, lista: true }, () => {
      this.limparTexto()
    })
  }

  limparTexto() {
    this.setState({ name: '', imageUrl: '' })
  }

  verificaInputs() {
    return this.state.name === "" || this.state.imageUrl === ""
  }

  onHandle = (event) => {
    const target = event.target
    this.setState({ [target.name]: target.value })
  }

  renderFormulario() {
    return (
      <form onSubmit={this.onAdicionarpokemon} className="formulario">
        <div className="title">
          <p className="form-frase">Vamos adicionar um novo pokemon</p>
        </div>
        <div className="nomeAdicionar">
          <p className="form-nomePokemon">Nome do pokemon</p>          
          <Input name={'name'} onHandle={this.onHandle} />          
          <p className="form-nomeUrl">URL da imagem</p>          
          <Input name={'imageUrl'} onHandle={this.onHandle} />
         <div className="teste">
            <img src={this.state.imageUrl} />
         </div>          
          <Button funcaoDisable={this.verificaInputs()} funcaoVoltar={this.onVoltarPagina}/>
        </div>
      </form>
    )
  }

  render() {

    return this.state.lista ? this.renderPaginaPokemon() : this.renderFormulario()
  }
}




export default App;
