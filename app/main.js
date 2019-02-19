import PokemonController from "./components/pokemonController.js";


class App {
  constructor() {
    this.controllers = {
      pController: new PokemonController()
    }
  }
}


window['app'] = new App()