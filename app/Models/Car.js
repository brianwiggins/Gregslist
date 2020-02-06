export default class Car {
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.description = data.description
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
            <div class="col-3">
                <h1>${this.make}</h1>
                <h3>${this.model}</h3>
                <p>${this.year}</p>
                <p>${this.price}</p>
                <p>${this.description}</p>
                <img src="${this.imgUrl}" alt="">
            </div>
    `
  }
}