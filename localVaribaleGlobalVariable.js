// The global variables are declared outside the functions
//Where as the local variables are declared inside the functions, local variables have block scope it can be only accessed inside the that function
//Global Variables can be accessed by any function

var user1 = 'Jhon'; //Global Varibale

myFunction();
function myFunction(){
    var user2 = 'Bob'; //local variable it can only be used here and it have block scope
    document.write("The name of user is: ", user1); //We can access global variables from anywhere or in any function
    document.write("<br>");
    document.write("The name of second user is: ",user2);

}


    document.write("Accessing local variable from another function: ",user2); //not accessible here 
