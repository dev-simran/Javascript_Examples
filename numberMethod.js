// Numbers method helps us to work with numbers 


// toString() method 

// toString() method return a number as string 

let x = 123;

let z = x.toString();

console.log(typeof(z));

let add = z + 10;

console.log("The value of z is = ", add);


//toExponential() Method


// it returns as string with a number rounded and written using exponential notation 
// parameter defines the number of characters behind the decimal point 


let dec = 1.76; 


console.log("Without any parameter = ", dec.toExponential());
// console.log("with an parameter 1 = ", dec.toExponential(1));
console.log("With an exponential 2 = ", dec.toExponential(6));



// toFixed() method 
// to fixed method returns a string with the number written with specified number of decimals 

let fixed = 6.44;

console.log(fixed.toFixed(5));

// toFixed(2) is perfect for when working with money


// toPrecision() method 

// to precision returns a string, with the number written with specified length 

let prec = 15;


console.log(prec.toPrecision());
console.log("prec with a parameter 6 = ", prec.toPrecision(6));


// the vaueof() method 

// the valueof() method return number as number 

let value = 19;

console.log("the value is = ", value);
console.log("the value is using valueof() = ", value.valueOf());


// converting variables into numbers 


// Number() method 
// the number method can be used to convert variables into numbers 

document.write(Number(true));
document.write("<br>");
document.write(Number(false));
document.write("<br>");
document.write(Number("10"));
document.write("<br>");
document.write("elliot");
document.write("<br>");
document.write(Number(new Date ("1970-01-02")));


// parseInt method 
// it parses a string and returns a whole number. only first numbers is returned

console.log("The parseInt method = ", parseInt("-20"));
console.log("The parseInt method = ", parseInt("-20.57"));
console.log("The parseInt method = ", parseInt("10 20 30"));
console.log("The parseInt method = ", parseInt("elliot"));


// parseFloat Method 
// it parses a string and returns a numbers. returns only first number

console.log("using parseFloat()= ", parseFloat("10"));
console.log("using parseFloat method = ", parseFloat("10.34"));



// Number Properties 

// MAX_VALUE PROPERTY 

// return the largest possible number in javascript 

let large = Number.MAX_VALUE;

console.log("the largest value using max value property is = ", large);
document.write("<br>");


// MIN_VALUE returns the lowest possible number in javascript 

document.write("the min value of number is ", Number.MIN_VALUE);

// POSITIVE_INFINITY 

console.log("The positive infinity value is = ", Number.POSITIVE_INFINITY);

// NEGATIVE_INFINITY 

let negative = -1 / 0 ;

console.log("The negative infinity value is = ", negative);
console.log("Negative infinity = ", Number.NEGATIVE_INFINITY);