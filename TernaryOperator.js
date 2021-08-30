// JavaScript provides a special operator called ternary operator :? that assigns a value to a variable based on some condition. This is the short form of the if else condition.


var a, b, c, d;

a = 10;
b = 5;

c = a > b ? a : b;
d = a < b ? b : a;

document.write("If a is greater then a = ",c);
document.write("<br>");
document.write("If b is greater the b =  ",d);