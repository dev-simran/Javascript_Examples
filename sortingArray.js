// sort() method sort an array alphabetically 

const fruits = ["Orange", "Banana", "Litchi", "Grapes", "Apple"];

console.log(fruits);

console.log(fruits.sort());


// reverse() method reverses the elements in an array 

console.log("After reversing an array using reverse() = ", fruits.reverse());


// Numeric Sort 

let set = [32, 22, 30, 62, 100, 95, 10];

document.write("without sort= ", set);
document.write("<br>");

document.write("With sort = ", set.sort(function(a,b){ return a-b; }) );


// max property 
// find the highest number in an array

function myArr(arr){

    return Math.max.apply(null, arr);
}

function myArr1(array){

    return Math.min.apply(null, array);
}

console.log("the heighest value of the array is = ", myArr(set));
console.log("the lowest value in the array is = ", myArr1(set));


// sorting object arrays

// javscript arrays often conatains array 

const Cars = [
    {type:"Volvo", year:2016},
    {type:"Swift ", year:2011},
    {type:"Honda ", year:2010},
    {type:"BMW", year:2021}
]

console.log("The sorted object array is = " , Cars.sort(function(a,b){ return a.year - b.year}));
