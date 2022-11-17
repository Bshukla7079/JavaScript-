//function Declare
//  var a = 4 ;
// if(true){
//     var a = 8;
//     console.log(a);
//  }
// console.log(a);

//function scope

function f(ask){
    if(ask){
        let name = "bandana";
        console.log(name);
    }
    console.log(name);
}
f(true);



