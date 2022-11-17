console.log("Class and Object in javascript");

class Car {                          //creates a class named "Car"
    constructor(name, speed){
        this.name = name;
        this.speed = speed;             //class has two initial properties: "name" and "year"
    }

    Maruti(){
        console.log("Car Name is", this.name);
    }
}

let a = new Car("NP Coor" , 400);
a.Maruti();

//object in js

 const student = {
     firstName: 'ram',
    lastName: null,
    class: 10
};
console.log(student.firstName);