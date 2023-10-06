//task-1--------
var time=+prompt("enter time")
if(time<=12){
   console.log("Good Morning");
}else if(time<=16){
   console.log("Good afternoon");
}else if(time<=20){
   console.log("Good evening");
}else if(time<=24) {
   console.log("Good night");
}else{
   console.log("invalid time");
}
//task-1-----

//task-2------
var val1=+prompt("enter val1")
var val2=+prompt("enter val2")
var val3=+prompt("enter val3")
if( val1>val2 && val1>val3){
   alert(val1 +" is greatest")
}else if(val2>val1 && val2>val3){
   alert(val2 +" is greatest")
}else{
   alert(val3 +" is greatest")
}
//task-2-------

//task-3-----
var a=+prompt("enter a")
var b=+prompt("enter b")
if(a>b){
   console.log(a+" is greater");
}else{
   console.log(b+" is greater");
}

//task-4----
var num=+prompt("enter num")
if(num==1){
     console.log("Monday");
}else if(num==2){
   console.log("tuesday");
}else if(num==3){
   console.log("wednesday");
}else if(num==4){
   console.log("thrusday");
}else if(num==5){
   console.log("friday");
}else if(num==6){
   console.log("saturday");
}else if(num==7){
   console.log("sunday");
}else{
   console.log("invalid day");
}

//task-5---
var mnth=+prompt("enter mnth")
switch(mnth){
    case 1:
      console.log("January");
      break;
    case 2:
       console.log("February");
       break;
    case 3:
       console.log("March");
       break;
    case 4:
       console.log("April");
       break;
    case 5:
       console.log("May");
       break;
    case 6:
       console.log("June");
       break;
    case 7:
       console.log("July");
       break;
    case 8:
       console.log("August");
       break;
    case 9:
       console.log("September");
       break;
    case 10:
       console.log("October");
       break;
    case 11:
       console.log("November");
       break;
    case 12:
       console.log("December");
    default:
       console.log("invalid");
}
//task-5-----


//task-6-----
var a = +prompt("enter a")
var b = +prompt("enter b")
var c = prompt("enter c")
if (c == "+") {
    console.log(a + b);
} else if (c == "-") {
    console.log(a-b);
} else if (c == "*") {
    console.log(a*b);
} else if (c == "/") {
    console.log(a/b);
} else if (c=="%") {
    console.log(a%b);
} else {
    console.log("invalid operator");
}
//task-6-----

//task-7---
var num = +prompt("enter num")
switch (num % 2) {
    case 0:
        console.log("even")
        break;  
    default:
        console.log("odd")
}
//task-7-----

