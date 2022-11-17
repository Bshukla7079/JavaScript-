console.log("Control statements in  JS");
//Asynchronous programming

console.log("first prient");
setTimeout(() =>{

  for (let index=0 ; index<100 ; index++)
{
  const element =index;
  console.log("This is a " + index);
}
},100)

setTimeout(() =>{
for (let index=0 ; index<50 ; index++)
{
  const element =index;
  console.log("This " + index);
}
},100)


console.log("last prient");


//Promise function
let p = new Promise((resolve , reject) => {
    let a = 1+1;
    if (a==2) {
        resolve("success");
    }
    else{
        reject("failed");
    }
}
)

p.then((message) => {
    console.log("This is in the then" + message);
}
)
.catch((message) =>{
    console.log("This is in the catch" + message);
})



  
  