// class Hello {
//     message(){
//         console.log("hello everyone");
//     }
// }
// let a = new Hello();
// a.message();

class Student{

    constructor(name,age){
        this.studentname = name;
        this.studentage = age;
          console.log("constructor function");
      }
    
    hello(){
        console.log("Hello "+ this.studentname + " your age is " + this.studentage);
    }

    hello(roll){
        console.log(roll);
    }

}
let b = new Student("Bandana",20);
b.hello(78);
// b.hello1(5);



