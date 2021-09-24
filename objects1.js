//Spaces and line Breaks are not important we can also declare object as

const ravi = {

    FirstName: 'Ravi',
    LastName:'Kumar',
    Age:'25'
};

document.write("The age of ravi is= ", ravi.Age);
document.write(ravi);

//JavaScript objects 
//Javascript can also have methods 
//Methods are stored in properties as functions

const Rahul={

    FirstName:'Rahul',
    LastName:'Gupta',
    Age:24,
    FullName: function(){return this.FirstName + '' +this.LastName}

};

console.log("First Name of the user is = ", Rahul.FirstName);

//Acessing js objects Methods
//While Accessing object Method use objectname+propertyname()
console.log("Full Name of the user is = ", Rahul.FullName());
