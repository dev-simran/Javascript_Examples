//Here are the methods that is used for searching strings:
// String.indexof()
// String.lastIndexof()
// String.startswith()
// String.endswith()


// indexof()
// This method returns the index of (position of ) the first occurance of specified text in string

let str = 'please locate elliot where the elliot in this string';
document.write("the searching result of index of the string is = ", str.indexOf('elliot'));


// lastIndexOf()

// This method returns the index of the last occurance of a specified text in a string 

let str1 = 'please locate elliot  where the "elliot" in this string';
document.write("<br>");
document.write("the last index of the searching string is = ", str1.lastIndexOf("elliot"));
document.write("<br>");
document.write("both methods returns -1 if string is not matched", str1.lastIndexOf('tyrell'));
document.write("<br>");
document.write("both method accepts second parameters as a string position of search: ", str1.lastIndexOf("elliot", 15));


// String.search()

// the search string method searches a string for a specified value  and return the position of the match

let es = 'Search for ramesh from the the string ramesh';
console.log("The searched result is: ", es.search('ramesh'));

// both indexof() and search() look like same but there is difference:
// search() method cannot take a second start position
// indexof() method cannot take powerful search values

// String.match()
// The match method searches a string for match against a regualr expression, and return the matches as an array object

let rain = 'the rain in SPAIN stays mainly  in the plain';
console.log("the match of the string is = ", rain.match(/ain/g));

// String.includes()

// the includes() method returns true if a string contains a specified value 

let str5 = ' Thankyou universe';
console.log("The included match is : ", str5.includes('universe'));

// String.startsWith()

// the string method returns true if a string begins with a specified value , otherwise false

let str7 = 'This is the string';
console.log('the string begin match is = ', str7.startsWith('This'));
console.log ('the string ends match is = ', str7.endsWith('This'));
