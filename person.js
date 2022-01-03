function Person1(name,age){
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  
  Person1.prototype.eat = function(food){
    if(typeof food === "string" && this.stomach.length < 10){
       this.stomach.push(food)
       return this.stomach
    }
    else{
     return  this.poop()
    }
  }
  Person1.prototype.poop = function(){
    this.stomach = [];
    return this.stomach
  }
  Person1.prototype.toString1 = function(){
    return `${this.name} ${this.age}`
  }
  let pers1 = new Person1("Jon",25);
  console.log(pers1)
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.eat("apple"))
  console.log(pers1.toString1());
  