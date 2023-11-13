//prgm-1---------------------
// var a = +prompt("enter a");
// var b = +prompt("enter b");
// console.log(a+b);
//prgm-1---------------------

//prgm-2---------------------
// var c = +prompt("enter c");
// console.log(c*60+"sec");
//prgm-2---------------------

//prgm-3---------------------
// var d = +prompt("enter d");
// console.log(++d);
//prgm-3---------------------

//prgm-4----------------------
// var e = +prompt("enter e");
// console.log(e*365+" days");
//prgm-4---------------------

// prgm-5---------------------
// var vol = +prompt("enter vol");
// var cur = +prompt("enter cur");
// alert("power is "+vol*cur)
//prgm-5---------------------

//prgm-6--------------------
// var arg = prompt("enter arg");
// console.log("Something" + " " + arg);
//prgm-6---------------------

//prgm-7----------------------
// var f = +prompt("enter f");
// var g = +prompt("enter g");
// if (f == 10 || g == 10) {
//     alert("true");
// } else if ((f + g) == 10) {
//     alert("yes");
// } else {
//     alert("false")
// }
//prgm-7---------------------

// let sum = 41;
// let b = (sum - 17) / 3;
// let a = b + 6;
// let c = a + 5;
// console.log("value of a: ", a);
// console.log("value of b: ", b);
// console.log("value of c: ", c);


//prgm-8---------------------
// var str1 = prompt("enter str1");
// var str2 = prompt("enter str2");
// if (str1.length == str2.length) {
//     alert("true");
// } else {
//     alert("false");
// }
//prgm-8---------------------

//prgm-9---------------------
// function a(name) {
//     return "have a great day";
// }
//prgm-9---------------------

// var a;
// a=null
// console.log(a)

// Multiplication of a number----------------------
// var num = prompt("enter num");
// for (let i = 1; i <= 10; i++){
//   var res = num * 1;
//   console.log(num +"*"+ i + "=" +res);
// }

// simple array sum
// let num = 6;
// let arr = [1, 2, 3, 4, 10, 11]
// c = 0;
// for (let i = 0; i < arr.length; i++){
//     c+=arr[i];
// }
// console.log(c);

// function simplearrsum(n, arr) {
//     c = 0;
//     for (let i = 0; i < arr.length; i++){
//         c+=arr[i]
//     }
//     return console.log(c);
// }
// simplearrsum(6, [1,2,3,4,10,11])

// function sumoftwo(a, b) {
//   return console.log(a + b);
// }
// sumoftwo(6, 7);

// function power(v, i) {
//   return console.log(v * i);
// }
// power(6, 5);

// function vowels(str) {
//     c=0
//     for (var i = 0; i < str.length; i++){
//         if (str[i]=="a" || str[i] == "e" || str[i] == "i" || str[i] =="o" || str[i] == "u") {
//             c++;
//         }
//     }
//     return console.log(c);
// }
// vowels("beautiful")

// let n = 5;
// let c = 0;
// for (let i = 1; i <=n; i++){
//     c = i * 2;
//     console.log(c);
// }

function candle(n, height) {
    var maxheight = Math.max(height);
    var c = 0;
    for (var i = 0; i < n; i++){
        if (height[i] == maxheight) {
            c++;
        }
    }
    return console.log(c);
}
candle(4, [3,2,1,3])
