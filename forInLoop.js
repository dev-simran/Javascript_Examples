// for in statement loops through the properties of an Object 



const User = {firsName:'Ramesh', lastName:'Gupta', Status:'Active', userID:161};

for(let x in User){
    document.write(x +" "+User[x]+"<br>");
}