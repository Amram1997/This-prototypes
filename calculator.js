function Calculator(){
 
}

Calculator.prototype.add = function(number1,number2){
  return number1 + number2
}
Calculator.prototype.subtract = function(number1,number2){
  return number1 - number2
}
Calculator.prototype.multiply = function(number1,number2){
  return number1 * number2
}
Calculator.prototype.divide = function(number1,number2){
  return number1 / number2
}
const calculator = new Calculator();
console.log(calculator.add(10,5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));