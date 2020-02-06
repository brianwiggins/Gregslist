import _houseService from '../Services/HouseService.js';
import _store from '../store.js';

function _draw() {
  let houses = _store.State.houses;
  let housesElem = document.getElementById("houses");
  let template = '';

  houses.forEach(house => {
    template += house.Template
  })

  housesElem.innerHTML = template;
}

export default class HouseController{
  constructor(){

  }
  addHouse(event){
    event.preventDefault();
    let formData=event.target;
    let newHouse={
      price: formData.price.value,
      beds: formData.beds.value,
      baths: formData.baths.value,
      location: formData.location.value,
      houseType: formData.houseType.value,
      imgUrl: formData.imgUrl.value
    }
    console.log("housecontroller works")
    _houseService.addHouse(newHouse);
    formData.reset();
    //@ts-ignore
    $('#house-form').modal('toggle');
    _draw()
  }
}