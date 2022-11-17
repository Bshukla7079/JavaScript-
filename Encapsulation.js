console.log("Encapsulation in JavaScript");


class Employee{ 

    setEmpDetails(name, Id, PhoneNo){
        this.name = name ;
        this.Id = Id;
        this.PhoneNo = PhoneNo;

    }


getEmpName(){
    return this.name;

}

getEmpId(){
    return this.Id;


}
getEmpPhoneNo(){
    return this.PhoneNo;

}
 

}

let emp1 = new Employee();

emp1.setEmpDetails('Bandana', 104 , 9767780000);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneNo());