// Array iteration methods operate on every  array items   


// Array.forEach() 

let friends = ["Elliot", "Wellick", "Mobely", "Darlene", "leon"];


friends.forEach(myFunction);

function myFunction(value, index){

    document.write(value+" "+index+"<br>");
}


// Array Map() method 

const arr1 = [10, 20, 15, 5, 3, 2];

var b = arr1.map(test);
console.log("Actual array = ", arr1);
console.log("Using Map Method = ", b);


function test(a){
  
    return  a * 10 ;
}

const arr2 = [

    {FirstName :"Simran" , LastName:"Jeet"},
    {FirstName:"Elliot", LastName:"Alderson"},
    {FirstName:"Tyrell", LastName:"Wellick"},
    {FirstName:"Shyla", LastName:"Nico"},
];

let new2 = arr2.map(obTest);

console.log("Actual Array Object = ", arr2);

document.write("With using map method = ", new2);


function obTest(x){

    return x.FirstName +" "+x.LastName+"<br>";
}



