//Practice session of some math objects


// find square root using Math.sqrt()

let x = 7;

console.log("The square root of 7 is = ", Math.sqrt(x));


//find absolute value using Math.abs()

let b = -4.5;

console.log("The positive value of b is = ", Math.abs(b));



// Math.sin() 
// eit returns the sine ( a value between -1 and 1 ) of the angle x ( given in radians ) 
// if you want to use degrees instead of radians, you have to covert degrees into radians 

// angle in radians = angle in degrees x PI / 180 

document.write("The sin value at 90 degree angle is = ", Math.sin(90 * Math.PI / 180));

document.write("<br>");

// Math.cos() 

document.write("The cos value at 0 degree angle is = ", Math.cos(0 * Math.PI / 180));


// Math.min() and Math.max() 
// it can be used to find the lowest or highest value in a list of arguments 

console.log("The minimun value from arguments is = ", Math.min(20, 40, 150, 175, -10, 200, -270));


console.log("The maximum value from arguments is = ", Math.max(30, -40, 10, 80, 270, 350, 50, 700));

// Math.random()
// it return a number between 0 and 1.

document.write("<br>");
document.write("The random text using random() is = ", Math.random());


// Math.log() method 
// it returns the natural logarithm of x 

let num = 1;

console.log("The natural logarithm of number is = ", Math.log(num));

document.write("<br>");
document.write("How many time must we multiply 2 to get 8 = ", Math.log2(8));
document.write("<br>");
document.write("How many time we must multiply 10 to get 100 = ", Math.log10(100));  

