

export default class Pokemon {
  constructor(data) {
    this._id = data._id || 0
    this.name = data.name
    this.img = data.img || data.sprites
    this.description = data.description || `height: ${data.height}, weight: ${data.weight}`
    this.url = data.url

    if (typeof this.img == 'object') {
      this.img = this.img.front_default
    }
  }



  getDetailedTemplate() {
    return `
      <div class="card text-black bg-light border-dark">
        <img class="card-img-top" src="${this.img}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.description}</p>
    <button type="button" class="btn btn-outline-dark center" onclick="app.controllers.pController.Catch()">Catch ${this.name}!</button >
          </div>
     </div>
    `
  }
  getCollectionTemplate(index) {
    return `
      <div class="carousel-item card text-black bg-light border-dark ${!index ? 'active' : ''}">
        <img class="card-img-top" src="${this.img}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.description}</p>
    <button type="button" class="btn btn-outline-dark center" onclick="app.controllers.pController.remove()">remove ${this.name}!</button >
          </div>
     </div>
    `
  }
}
