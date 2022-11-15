console.log("Polymorphism in JavaScript");

class Animal {
    constructor(name)
    {
       this.name = name;
    }
    eat(){
        console.log (this.name+' eats food');
    }
}

class Alligator extends Animal {
    eat(){
        console.log(this.name+' eats fishes');

    }
}
let Shark = new Alligator ('Shark');
Shark.eat();

//demo polimor