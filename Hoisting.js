//Hoisting in js means accessing the variable before its initialization.

myFunction();
console.log("The x value of x is = ", x);

console.log(myFunction);


var x = 7;

function myFunction(){

    console.log("Hello World");

}

console.log(x);

