import PokemonService from "./pokemonService.js";





let _pokemonService = new PokemonService()


function drawApiPokemon() {
  let template = ''
  let pokemons = _pokemonService.ApiPokemon
  pokemons.forEach(p => {
    template += p.getTemplate()
  })
  document.getElementById("pokemon").innerHTML = template
}
function drawMyCatches() {
  let template = ''
  let pokemons = _pokemonService.mycatches
  pokemons.forEach(p => {
    template += p.getDetailedTemplate()
  })
  document.getElementById("mycatches").innerHTML = template
}

function drawActivePokemon() {
  document.getElementById("onepoke").innerHTML = _pokemonService.ActivePokemon.getDetailedTemplate()
}









export default class PokemonController {
  constructor() {
    _pokemonService.addSubscriber('apiPokemon', drawApiPokemon)
    _pokemonService.addSubscriber('activePokemon', drawActivePokemon)
    _pokemonService.addSubscriber('myCatches', drawMyCatches)
    _pokemonService.getMyCatchesData()
    _pokemonService.getPokemonData()
  }

  Catch() {
    _pokemonService.Catch()
  }

  getOneApiPokemon(url) {
    _pokemonService.getOneApiPokemon(url)
  }










}