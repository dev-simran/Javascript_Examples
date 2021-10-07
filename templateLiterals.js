// Template Literals use back-ticks (``) rather than the quotes ("") to define a string

let text = `Hello World`;

console.log(text);

// with template literals, you can use both single and double quotes inside string

let str =  ` it's name is "elliot"`;
console.log(str);

// template literals allows multiline strings

let str1 = `This icecream
has good flavour
 and 
taste`
console.log(str1);


//interpolation

// template literals provides an easy way to interoplate varibales and expressions into string 
// this method is called string interpolation
// the syntax is ${..}

//variable subsitutions
// template literals allow varibale in strings 

let firstName = 'jhon';
let secondName = 'doe';

let x = `Welcome ${firstName}, ${secondName}!`;

console.log(x);


//expression subsitution 
//template literals allow expression in strings

let price = 10;
let vat = 0.25;

let total = `Total : ${(price * (1 + vat)).toFixed(2)}`;
console.log(total);


