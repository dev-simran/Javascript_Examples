// javascript has only one type of numbers
// numbers can be written with or without decimals

let x = 3.14 // A number with decimals
let y = 7 //A Number without decimals


 
// Extra large or extra small numbers can be written with scientific (exponent) notation

let num = 123e7; 
let num1 = 123e-6;

let a = "100";
let b = "5";

//Numeric strings 
//javascript always tries to convert string into numbers except + operator

document.write("The product of these two numbers is = ", a * b);
document.write("<br>");
document.write("The division of these two numbers is = ",  a / b);
document.write("<br>");
document.write("The substraction of these two numbers is = ", a - b);
document.write("<br>");
document.write("The addition of these numbers is =  ", a+b); //This will concatinate the string 

console.log("The value of num is = ", num);
console.log("The value of num1 is =  ", num1);