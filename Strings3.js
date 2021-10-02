// Strings in javascript are primitive data types
// basically a string is a textual content
// it must be enclosed in single or double quotes
//String can also be treated like zero index based array.


let user1 = 'Jhon Doe';

console.log("The name of user1 is= ", user1);


//We can use quotes inside an string as it should not be matched with surrounding quotes.

let user2 = " Della and 'messi'";
console.log("The name of second user is=  ",user2);

let user3 = ' "BOB" ';
console.log("The name of the third user is= ", user3);

//STRING LENGTH 
//String length property is used to find the length of the string

let str = 'ABCDEF';
console.log("The length of the string is= ", str.length);

//ESCAPE CHARACTER

// if we want to use same character we can use escape character using back slashes.

let text =  "We are so-called \"vikings\" from the north";
console.log("the output is= ", text);

//if we want to insert single quote.

let name1 = 'It\'s Darlene'
console.log("The name of the girl is= ", name1);

// if we want to insert back slash into the String

let name2 = 'The is the \\ Back slash';
console.log("Demo = ", name2);

// Strings can be objects 
// Strings can also be defined as object using new keyword

let x = 35;
let y = new String('Della');
let z = new String('YAYYYY NEW Object is created');

console.log("The type of first variable is = ", typeof x);
console.log("The type of second variable is = ", typeof y);
console.log("The value of the object is: ", z);
console.log("The type of object is = ", typeof z);
console.log("lets now check the length of the object is =  ", z.length);

//Dont create Strings as objects it  slows the execution speed
//lets compare two strings 

console.log("lets compare two strings = ",  (y == z));
console.log( (y===z));

//Always note that comparing two objects will always return false.