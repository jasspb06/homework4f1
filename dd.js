
class Doggo {
    //similar to function constructor

    constructor (name, age, breed) {
        //name and age become instance variables for this class Doggo

        //when thinking of creating instance variables, ask yourself, what are all the way that i can uniquely identify this dog
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    //You cannot have 2 constructors for a class
    //constructor (name, age, other, other2) {
      //  this.name = name;
       // this.age = age;
        //this.other = other;
        //this.other2 = other2
    //}

    //instance methods available to all instances/objects of this class
    bark() { //this replaces Doggo.prototype.sleep =  function() {}
        return ['bork!', 'Bork!'][Math.floor(Math.random()*2)];
    }

    sleep() {
        return 'Zzzzzzz....';
    }
}

class DoggoFighter extends Doggo { //doggofighter child of doggo
    
    constructor(name, age, breed) {

        //super refers to the constructor of the parent (derived class)
        //super must take in the exact arguments as the parent constructor would expect
        super(name, age); 
    }
}


a = new Doggo('sher', 5, "german shephard")
console.log(a.bark());
console.log(a.sleep());
console.log(a.name);
console.log(a.age);

c = new DoggoFighter('rocky', 10, "husky");
console.log(c.sleep());
console.log(c.name);
console.log(c.breed);

const b = new Doggo("Daisy", 8, "Golden retreiver")
//console.log(b.bark());
//console.log(b.age);
b.age = 15;
//console.log(b.age)
