console.log("Abstraction in javascript");

function Employee(name,age,baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    this.MonthlyBonus = 1000;

   this.calculateFinalSalary = function(){
        let FinalSalary = this.baseSalary + this.MonthlyBonus;
        console.log('FinalSalary is : ' +FinalSalary);
    }

    this.getEmpDetails = function(){

        console.log('Name : ' +this.name+ ' | Age : '+this.age);
         
    }
}

let emp1 = new Employee('Bandana',21, 15000);

emp1.getEmpDetails();

emp1.calculateFinalSalary();