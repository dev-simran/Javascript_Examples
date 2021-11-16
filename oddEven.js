//Program to check the number enter by user is even or odd

let number = prompt("Enter the number : ");

if(number % 2 == 0){

    document.write(`The ${number} is even`);
}
else{

    document.write(`The ${number} is odd`);
}