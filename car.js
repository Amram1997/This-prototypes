function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometr = 0;
}

Car.prototype.fill1 = function (gallons) {
  if (typeof gallons === "number") {
    this.tank += gallons;
    this.tank -= this.milesPerGallon;
    return this.tank > 0 ? this.tank : "out of fuel";
  } else {
    return "bad fuel";
  }
};
Car.prototype.drive = function (distance) {
  if (typeof distance === "number") {
    return (this.odometr += distance);
  }
};
let car1 = new Car("bmw", 50);
console.log(car1);
console.log(car1.fill1(100));
console.log(car1.drive(100));
console.log(car1.drive(100));
console.log(car1.fill1(10));
console.log(car1);
