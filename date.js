document.write(Date());


const currentDate = new Date();


console.log("Current date is : ", currentDate);
console.log("the type of date method is = ", typeof(Date()));
console.log("The type of date object is = ", typeof(currentDate));

//New Date()

// new Date() creates a new date object with the current date and time

//create a new date object with specified date and time

//7 numbers specify year, month , day, hour, minute, second, millisecond

const d = new Date(2018, 11, 24, 10, 33, 30, 0);


console.log("The value of new date object with specified parameters = ", d);

//note that js count month from 0 to 11

// using 6, 4, 3 or 2 Numbers 

const parm6 = new Date(2020, 2, 23, 12, 15, 5);

console.log("With 6 parameter = ", parm6);

//using 5 parameters

const parm5 = new Date(2021, 6, 27, 8, 5);

console.log("With 5 parameters: ", parm5);

// 2 parameters specify year and month 

const parm2 = new Date (2021, 6);

console.log("With 2 parameters: ", parm2);


//you cannot ommit month
//if you supply only one parameter it will be treated as milliseconds


const param1 = new Date(2);

console.log("with one parameter = ", param1);


// one and two digits are interpreted as 19xx 

const parms1 = new Date(99, 11, 5);

console.log("two digit counted as 19xx : ", parms1);


// Date string 

const dateString = new Date("27 july 2000 5:30");

console.log("The value of date string is = ", dateString);


