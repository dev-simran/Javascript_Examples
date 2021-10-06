// String methods helps us to work with strings


// String Length
// Strinng length property returns the length of the string 

let txt = 'abcdefghi';

console.log("The length of the string is = ", txt.length);

//Extracting String parts
// There are three methods of extracting the part of the strings 



// The Slice() Method 

// slice method extracts a part string and return the extracted part in a new string
// it takes two parameters the starting position and end position


let text1 = 'APPLEBANANAGRAPES';
document.write("The Sliced or Extracted String is =  ", text1.slice(1, 7));

document.write("<br>");

let text2 = 'ELLIOTALDERSON';
document.write("The Extracted part of the string is = ", text2.slice(3,9));

//remember js counts strings position from as arrays

// if a parameter is negative, the position is counted from end of the String

// index end is optional

document.write("<br>");

let fruits = 'APPLEBANANALITCHI';
document.write("The extracted part of the string = " , fruits.slice(-12));

let js = "Javascript is a light weight scripting language";

console.log("The sliced string using negative parameters is = ",js.slice(-9,-1));
console.log("the sliced part of the string with single negative parameter = ", js.slice(-9));


//Substring Method 

// substring() is similar to slice()
// Differnce is that substring() cannot accept negative indexes

let vegetables = 'Carrot, Potato, Tomato';

document.write("<br>");

document.write("The substring is = ", vegetables.substring(1, 11));

// substring with single parameter
// substring with single parameter will slice out the rest of the string

document.write("<br>");
document.write("The substring using single parameter is = ", vegetables.substring(5));



// Replace method replace()
// the replace() method is used to replace specified value with another value in string

//replace method is case senstive
//replace replaces only first match string 
let text = 'PARK';
console.log(text);
console.log("The replaced string is = ", text.replace('PARK' ,'GARDEN'));

let prk = 'park park park ';
console.log(prk);
console.log("The replaced string is = ", prk.replace('park' , 'playground'));

// to replace all the matches use a regular expression with /g  flag(global match)

let company = ' GOOGLE GOOGLE GOOGLE GOOGLE';
console.log("the name of the company is : ", company);
console.log("the replaced text is = ", company.replace( /GOOGLE/g ,  'MICROSOFT'));

//Converting uppercase and lowercase

// toUpperCase() 

var htext = 'hello world';

document.write("<br>");
document.write("The real value is = ", htext);
document.write("<br>");
document.write("The uppercase value is =  ", htext.toUpperCase());

//toLowerCase()

let us = 'UNITED STATES';
console.log("The real value is = ", us);
console.log("The value to lower case is = ", us.toLowerCase());

// concat() method 
// concat method is used to join two or more strings

let textt = 'Hello';
let texttt = 'world';

let text3 = textt.concat("", texttt);

console.log("The resulted value is = ", text3);

// All string methid return a new string. they do not modify the original string
// formally said strings are immutable, strings cannot be changed they only can be replaced.

 
// String.trime() method  
// it removes the white spaces from the both of the sides 

var text5 =  "   Hello    World   ";
console.log("The original text before trim : ", text5);
console.log("That text after trim : ", text5.trim());

// extracting string characters
// there are three methods of extracting strings  characters 
// CharAt
// charCodeAt
// property access[]


// charAt()

// charAt return the character at specified position or index

let user1 = 'BOB';
console.log("the scond character is : ", user1.charAt(0));

// charCodeAt()
// this method return the unicode of the character at specified index of the string

let user2 = 'Alliace';
console.log("the unicode of char at index 2 is = ", user2.charCodeAt(0));


// property access[]
// we can access property of strings

let user3 = 'elliot';
console.log("the the property of the second index is = ", user3[4]);
