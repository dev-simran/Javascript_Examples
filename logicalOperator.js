//Logical Operators are used combine two or more conditions.

// javascript provides following logical operators :

//1) && = AND Operator its checks whether two operands are non-zero or not it returns
//1 if they are non-zero otherwise returns 0 

// 2)  || = OR Operator, it checks whether any one of two is non-zero or not 
// it returns one if one of them is non-zero otherwise return 0.

// 3) ! = NOT Operator. it reverses the boolean result of the operand (or condition). !false returns true , and
// ! true returns false

//variables 

var a, b;
a = 5;
b = 10;

document.write((a != b) && ( a < b));
document.write("<br>");
document.write( (a > b) || ( a == b) );
document.write("<br>");
document.write( ( a < b  ) || ( a == b));
document.write("<br>");
document.write( !(a < b ));
document.write("<br>");
document.write( !( a > b ) );