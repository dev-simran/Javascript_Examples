//Array method allow us to work with arrays


// toString() method 
// it converts array to string 

let friends = ["Elliot", "Mobely", "Angela","Shyla Nico"];

console.log("Coneverting array into String = ", friends.toString());
console.log("The type of array is = ", typeof(friends));


let x = friends.join("*");
console.log(x);


// popping and pushing

const fruits = ["Apple", "Banana", "Litchi", "Orange"]

let y = fruits.pop();
console.log(y);
let z = fruits.push("Mango");
console.log(fruits);


// shift() and unshift() both are similar to push and pop but it operates from front of the array element instead of last like push and pop 

// shift() 

const Drinks = ["Cold", "Hot", "Softy", "Coffee"];

console.log(Drinks);

let m = Drinks.shift();

console.log(m);

// unshift() 
Drinks.unshift("Lemon");
console.log(Drinks)

// changing elements 

Drinks[0]="Water";

console.log("After changed = ", Drinks);

Drinks[Drinks.length]="Soft Drinks";

console.log(Drinks);

// deleting elemnets from array 
// use delete operator to delete an element from an array 

delete Drinks[0];
console.log("after delete = ", Drinks);


// splice() 

console.log(Drinks.splice(2, 2, "Lemon", "Tea"));


// merging arrays 


let merging = fruits.concat(friends);

console.log(merging);


// slice method 

let foods = ["burger", "pizza", "Noodles", "Samosa"];

let food1 = foods.slice(1);

console.log(food1);