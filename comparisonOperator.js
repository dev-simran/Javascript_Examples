//Comparison operator compare two operands and return a boolean value true or false.

//variables 
var a = 5, b = 10, c = "5", x = a;

document.write("A is = ",a);
document.write("<br>");
document.write("B is = ",b);
document.write("<br>");
document.write("C is = ",c);
document.write("<br>");
document.write("X is = ",x);
document.write("<br>");

document.write("The Comparison between a == c is = ",a == c); //Compare equality of two operands without type
document.write("<br>"); //line break
document.write("The Comparison between a === c is = ",a===c); //compare equality of two operands with type
document.write("<br>");
document.write("The comparison between a==x is= ", a == x); //compare eqality of two operands without type
document.write("<br>");
document.write("The comparison between a != b is = ", a != b); //compare inequality of two operators
document.write("<br>");
document.write("The Comparison between a > b is =  ", a > b); //return true if left side operand is greater
document.write("<br>");
document.write("The Comparison between a < b is =  ", a < b); //return true if left side value is less
document.write("<br>");
document.write("The Comparison between a >= b is = ", a >= b); //return true if left operand is greater or equal
document.write("<br>");
document.write("The Comparison between a <= b is = ", a <= b); //return true if the left operand is less or equal
