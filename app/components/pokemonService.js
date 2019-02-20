import Pokemon from "../models.js/pokemon.js";


// @ts-ignore
let _pokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

// @ts-ignore
let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Natalie/heroes'
})

let _state = {
  apiPokemon: [],
  myCatches: [],
  activePokemon: {}
}

let _subscribers = {
  apiPokemon: [],
  myCatches: [],
  activePokemon: []

}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())

}



export default class PokemonService {



  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get ApiPokemon() {
    return _state.apiPokemon.map(p => new Pokemon(p))
  }
  get ActivePokemon() {
    return new Pokemon(_state.activePokemon)
  }
  get mycatches() {
    return _state.myCatches.map(p => new Pokemon(p))
  }

  Catch() {
    let pokemon = _state.activePokemon
    _sandbox.post('', pokemon)
      .then(res => {
        this.getMyCatchesData()
      })
  }

  getMyCatchesData() {
    console.warn('getting catches')
    _sandbox.get()
      .then(res => {
        let data = res.data.data.map(p => new Pokemon(p))
        setState('myCatches', data)
      })
  }


  getPokemonData() {
    console.warn('getting pokedata')
    _pokeAPI.get('?limit=50')
      .then(res => {
        let data = res.data.results.map(p => new Pokemon(p))
        setState('apiPokemon', data)
      })
  }
  getOneApiPokemon(url) {
    _pokeAPI.get(url)
      .then(res => {
        setState('activePokemon', new Pokemon(res.data))
      })
  }




}