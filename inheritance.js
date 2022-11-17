console.log("Inheritance in JavaScript");

class Car {
    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine started for' +this.name);
    }

    stopEngine(){
        console.log('Engine stoped for' +this.name);
    }

  
}

class Toyota extends Car {
    topSpeed(speed){
        console.log('Top speed for ' +this.name, 'is' +speed);
    }
}

class Maruti extends Car {
    modelcolour(colour){
        console.log('colour of maruti' +this.name, 'is' +colour);
    }

} 

let myCar = new Toyota();
myCar.setName('Camry');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);

let myCar2 = new Maruti();
myCar2.setName('suzuki');
myCar2.startEngine();
myCar2.stopEngine();
myCar2.modelcolour('black');