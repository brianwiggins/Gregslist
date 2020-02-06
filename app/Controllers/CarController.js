import _carService from '../Services/CarService.js'
import _store from '../store.js'



//NOTE we need our data(cars from the state)
// we need our element to dump them into
// we need a template of what they look like
function _draw() {
  let cars = _store.State.cars
  let carsElem = document.getElementById("cars")
  let template = ''

  cars.forEach(car => {
    template += car.Template
  })

  carsElem.innerHTML = template

  // cars.forEach(function (car) {

  // })


  //NOTE Does the same as above, note the const car versus the car in the forEach
  // for (let index = 0; index < cars.length; index++) {
  //   const car = cars[index];

  // }


}


export default class CarController {
  constructor() {
    console.log("The car controller works")
  }

  addCar(event) {
    event.preventDefault()

    // NOTE formData is an alias for our submitted form from our html
    let formData = event.target
    // NOTE newcar is an object with all the inputted values from our form
    let newCar = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    }
    console.log(newCar)
    _carService.addCar(newCar)
    formData.reset()
    // @ts-ignore
    $('#car-form').modal('toggle');
    _draw()
  }
}