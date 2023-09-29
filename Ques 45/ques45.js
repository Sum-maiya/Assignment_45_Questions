"use strict";
//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, 
//such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Merge the options into the car object
    for (const option of options) {
        Object.assign(car, option);
    }
    return car;
}
// Call the function with required information and additional options
const carInfo = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["GPS", "Sunroof"] });
// Print the resulting car object
console.log(carInfo);
