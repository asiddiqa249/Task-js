// //--------------prgm-1-----------
// function mble(num) {
//     if (num ==0123456789) {
//         return "valid";
//     } else {
//         return "invalid";
//     }
// }
// num=pompt("enter num");
// console.log(mble(num));
// console.log(mble(0123456789));

// //-------------prgm-2----------
// function greater(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// x=greater(2,4);
// console.log(x);

// //-----------prgm-3----------------
// function greatest(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }
// x = greatest(11, 9, 5);
// console.log(x);

// //--------------prgm-4------------------
// function inc(p) {
//     if (p == 12) {
//         return ++p;
//     } else {
//         return --p;
//     }
// }
// q=inc(9);
// console.log(q)

// //--------------prgm-5------------------
// function add(d) {
//     if (d === 30) {
//         return d + 30;
//     } else {
//         return d - 30;
//     }
// }
// e = add(20);
// console.log(e);

// //--------------prgm-6------------------
// function time(t) {
//     if (t < 12) {
//         return alert("good morning");
//     } else if (t == 12 || t < 16) {
//         return alert("good afternoon");
//     } else if (t == 16 || t < 20) {
//         return alert("good evening");
//     } else if(t==20 || t<=24){
//         return alert("good night");
//     }
// }
// i = time(20);

// //--------------prgm-7------------------
// function val(x, y, z) {
//     if( x>y && x>z){
//         return alert(x);
//     } else if (y > x && y > z) {
//         return alert(y);
//     } else {
//         return alert(z);
//     }
// }
// num=val(5,8,2)

// //--------------prgm-8------------------
// function day(x) {
//     if(x==1){
//      return console.log("Monday");
//     }else if(x==2){
//        return console.log("tuesday");
//     }else if(x==3){
//        return console.log("wednesday");
//     }else if(x==4){
//        return console.log("thrusday");
//     }else if(x==5){
//        return console.log("friday");
//     }else if(x==6){
//        return console.log("saturday");
//     }else if(x==7){
//        return console.log("sunday");
//     }else{
//        return console.log("invalid day");
//     }
// }
// x = prompt("enter x");
// y = day(x);

// //--------------prgm-9------------------
// function op(a, b, c) {
//     if (c == "+") {
//         return console.log(a + b);
//     } else if (c == "-") {
//         return console.log(a-b);
//     } else if (c == "*") {
//         return console.log(a*b);
//     } else if (c == "/") {
//         return console.log(a/b);
//     } else if (c == "%") {
//         return console.log(a%b);
//     } else {
//         return console.log("invalid operator");
//     }
// }
// op(7,9,"/");

// //--------------prgm-10------------------
// function even(n) {
//     if (n % 2 == 0) {
//         return alert("even");
//     } else {
//         return alert("odd");
//     }
// }
// even(9)

// //--------------prgm-11------------------
// function num(n) {
//     for (var n = 0; n <= 10; n++){
//         console.log(n);
//     }
//     return alert;
// }
// num()

// //--------------prgm-12------------------
// function mul(a){
//     for (var a = 0; a <= 30; a+=3){
//         console.log(a);
//     }
//     return a;
// }
// mul()

// //--------------prgm-13------------------
// function length(a) {
//     len = 0;
//     for (i = 0; a[i] !== undefined; i++){
//         len++;
//     }
//     console.log(i);
//     return a;
// }
// length("ayesha");

// //------------------prgm-14----------------
// function range(a) {
//     for (let a = 5; a <= 8; a++){
//         console.log(a);
//     }
//     return a;
// }
// range()

// ************************reverse*********************
// function rev(a) {
//     var x="ayesha"
//     for (a = x.length - 1; a >= 0; a--) {
//         console.log(x[a]);
//     }
//     return a;
// }
// rev()

// var a = prompt("enter a");
// for (i = a.length - 1; i >= 0; i--){
//     console.log(a[i]);
// }


// //--------------------prgm-16--------------------------
// function mnth(x) {
//     switch(x){
//         case 1:
//           console.log("January");
//           break;
//         case 2:
//            console.log("February");
//            break;
//         case 3:
//            console.log("March");
//            break;
//         case 4:
//            console.log("April");
//            break;
//         case 5:
//            console.log("May");
//            break;
//         case 6:
//            console.log("June");
//            break;
//         case 7:
//            console.log("July");
//            break;
//         case 8:
//            console.log("August");
//            break;
//         case 9:
//            console.log("September");
//            break;
//         case 10:
//            console.log("October");
//            break;
//         case 11:
//            console.log("November");
//            break;
//         case 12:
//             console.log("December");
//             break;
//         default:
//             console.log("invalid");
//     }
//     return x;
// }
// mnth(12);

// ****************count of vowels*******************
// var a = prompt("enter string");
// c = 0;
// for (i = 0; i < a.length; i++){
//     if (a[i] == "a" || a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u") {
//         c++;
//     }
// }
// console.log(c);

//***************count of consonants*****************
// var a = prompt("enter string");
// c = 0;
// for (i = 0; i < a.length; i++){
//     if (a[i] !== "a" && a[i] !== "e" && a[i] !== "i" && a[i] !== "o" && a[i] !== "u" && a[i] !== "A" && a[i] !== "E" && a[i] !== "I" && a[i] !== "O" && a[i] !== "U") {
//         c++;
//     }
// }
// console.log(c);

// *****************palindrome***********************
// function palindrome(num) {
//     let rev = 0;
//     temp = num;
//     while (temp>0){
//         last = temp % 10;
//         rev = rev * 10 + last;
//         temp = Math.floor(temp / 10);
//     }
//     if (rev == num) {
//         console.log("palindrome");
//     } else {
//         console.log("not a palindrome");
//     }
// }
// console.log(palindrome("121"));

// **************fibanocci***********************
// function fibanocci(num) {
//     var n1=0, n2=1, nexterm;
//     for (i = 0; i <= num; i++){
//         console.log(n1);
//         nexterm = n1 + n2;
//         n1 = n2;
//         n2 = nexterm;
//     }
// }
// console.log(fibanocci(5));

//*************armstrong********************
// function armstrong(num) {
//     let sum = 0;
//     temp = num;
//     while (temp>0){
//         last = temp % 10;
//         sum += last*last*last;
//         temp = Math.floor(temp / 10);
//     }
//     if (sum == num) {
//         console.log("armstrong");
//     } else {
//         console.log("not a armstrong");
//     }
// }
// console.log(armstrong(153));