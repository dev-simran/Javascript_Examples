// Declaring a varibale with const provides block scope

const x = 10;

{
    const x = 20; //Here x is 20
    document.write(x);
}
{
    const x = 30;
    document.write(x); //here x is 30
    
}

document.write(x); //here x is 10