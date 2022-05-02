//object constructors
function Animal(species){
    this.species = species;
    this.eats =true;
}
Animal.prototype.walks = function(){
    return `A ${this.species} is walking.`;
};

const Bear = new Animal("bear");

console.log(Bear.species);
console.log(Bear.walks());

//the prototype property is where inheritable props and methods are 

console.log(Bear._proto_);
console.log(Bear._proto__ === Animal.prototype);
console.log(Animal.prototype);
console.log(Bear);