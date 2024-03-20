"use strict";
// exercise 45
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("Toyota", "Corolla", { color: "Silver", year: "2024" });
console.log(mycar);
