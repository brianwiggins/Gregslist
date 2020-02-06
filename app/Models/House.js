export default class House{
  constructor(data){
    this.price=data.price;
    this.beds=data.beds;
    this.baths=data.baths;
    this.location=data.location;
    this.houseType=data.houseType;
    this.imgUrl=data.imgUrl;
  }

  get Template(){
    return 
    `
    <div class="col-3">
    <h1>${this.beds}</h1>
    <h3>${this.baths}</h3>
    <p>${this.location}</p>
    <p>${this.price}</p>
    <p>${this.houseType}</p>
    <img src="${this.imgUrl}" alt="">
    </div>
    `
  }
}