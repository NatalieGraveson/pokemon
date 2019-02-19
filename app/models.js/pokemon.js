

export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.img || data.sprites
    this.height = data.height
    this.weight = data.weight
    this.url = data.url
  }


  getTemplate() {
    return `
    <button type="button" class="btn btn-outline-light" onclick="app.controllers.pController.getOneApiPokemon('${ this.url}')">${this.name}</button >
      `
  }

  getDetailedTemplate() {
    return `
      < div class="card" >
        <img class="card-img-top" src="${this.img}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.weight}${this.height}</p>
    <button type="button" class="btn btn-outline-light" onclick="app.controllers.pController.Catch('${ this.url}')">Catch ${this.name}!</button >

          </div>
     </div>
    `
  }
}
