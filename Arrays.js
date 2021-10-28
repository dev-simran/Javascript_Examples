//Array is a set of homogeneous elements
//Usually create array with const in js


const color = ["red", "green", "blue", "yellow", "purple"];

console.log(color);
console.log(color.length);


const fruits = ["Apple", "Banana", "Grapes", "Litchi"];
console.log(fruits);


//Acessing last array element 

console.log(fruits[fruits.length-1]);

fruits.push("Orange");
console.log(fruits);

// fruits[7]="guava";

// console.log(fruits);


const friends = [];
friends[0]="elliot";
friends[1]="Wellick";
friends[2]="Shyla nico";
friends[3]="Darlene";

console.log("Array length = ", friends.length);
console.log(friends);

console.log(friends[2]);
console.log(typeof(friends));
console.log(Array.isArray(friends));