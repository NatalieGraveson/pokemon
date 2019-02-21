import PokemonService from "./pokemonService.js";





let _pokemonService = new PokemonService()


function drawApiPokemon() {
  let template = ''
  let pokemons = _pokemonService.ApiPokemon
  pokemons.forEach(p => {
    template += `
    <button type="button" class="btn btn-outline-light" onclick="app.controllers.pController.getOneApiPokemon('${ p.name}')">${p.name}</button >
      `
  })
  document.getElementById("pokemon").innerHTML = template
}
function drawMyCatches() {
  let template = `
    <div class="carousel carousel-fade" id="pokedex" data-interval="1000" data-ride="carousel">
      <div class="carousel-inner">
  `
  let pokemons = _pokemonService.mycatches
  pokemons.forEach((p, i) => {
    template += p.getCollectionTemplate(i)
  })
  template += `
      </div>
      <a class="carousel-control-prev" href="#pokedex" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#pokedex" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  `
  document.getElementById("mycatches").innerHTML = template
  $('.carousel').carousel()
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