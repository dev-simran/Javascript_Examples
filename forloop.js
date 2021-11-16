const Cars = ["Audi", "BMW", "Honda", "Suzuki","Volvo","Tesla"];


for (let i = 0; i < Cars.length; i++) {

    document.write(Cars[i]+"<br>");

    
}

for (let i = 0; i <=10; i++) {


 document.write(i);
    
}




let num = prompt("Enter the first number = ");

for ( let i = 0; i <= 10; i++){

    const table = i * num;

    console.log(`${num} into ${i} is =  `, table);
}