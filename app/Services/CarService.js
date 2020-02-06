import _store from "../store.js"
import Car from "../Models/Car.js"

class CarService {
  addCar(newCar) {
    newCar = new Car(newCar)
    _store.State.cars.push(newCar)
    console.log(_store.State.cars)
  }
  constructor() {
    console.log("Car service is working")

  }
}

const CARSERVICE = new CarService()
export default CARSERVICE