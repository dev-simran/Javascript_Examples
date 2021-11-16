let time = new Date();

let hr = time.getHours();


if(hr >= 0 && hr < 12 ){

    document.write("Good Morning");

}
else if(hr == 12){

    document.write("Good Noon");


}
else if(hr >=12 && hr <= 17){

    document.write("Good Afternoon");
}
else{

    document.write("Good Evening");
}