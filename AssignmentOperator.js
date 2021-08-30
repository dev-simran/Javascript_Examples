// Javascript provides the assignment operators to assign values to variables with less key strokes

var x , y , z;

x = 5;
y = 10;
z = 15;

document.write("X is = ",x);
document.write("<br>");
document.write("Y is = ",y);
document.write("<br>");
document.write("Z is = ",z);
document.write("<br>");

document.write(" when x = y now x is =  ", x = y); //Assign right operand value to left operand 
document.write("<br>");
document.write(" when x += y then x is = ", x += y); //sums up left and right assign the result to the left
document.write("<br>");
document.write(" when x -= y  then x is =  ", x -= y); //Subtract right from left assign result to left
document.write("<br>");
document.write("When x *= y the x is = ", x *= y); //Multiply left and right operand and assign the result to left
document.write("<br>");
document.write(" when x /= y then x is = ", x /=y);  // Divide left operand by right operand assign result to left
document.write("<br>");
document.write(" when x %= 2 the x is = ", x %= 2 ); //get the modulus of left operand divide the operand then assign the resulted modulus to the left operand
