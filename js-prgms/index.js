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
// let a = (name) => {
//   return `hello, ${name}`
// }
// res = a('pravs')
// console.log(res);
//prgm-9---------------------

//prgm-10-----------------------
//Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

//let arr = [9, 3, 2, 4, 1, 6, 0, 8, 5, 1]
//if (arr.length === 10 && arr.every( num=> num>= 0 && num <= 9)) {
//    let phn = `((${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]})`;
//    console.log(phn);
//} else {
//    console.log("invalid format")
//}
//prgm-10-----------------------

//prgm-11---------------------------
//Create a function that returns an array of strings sorted by length in ascending order.
//Example:
//sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

//function Sort(arr) {
//    return arr.sort((a,b)=>a.length - b.length);
//}
//let res = Sort(["ddd", "cc", "eeee", "a"]);
//console.log(res)
//prgm-11------------------------------

//prgm-12----------------------------------------
//Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
//Example:
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

//function largest(arr) {
//    let res = [];
//    for (let i = 0; i < arr.length; i++){
//        let max = arr[i][0];
//        for (let j = 1; j < arr[i].length; j++){
//            if (arr[i][j] > max) {
//                max = arr[i][j];
//            }
//        }
//        res.push(max)
//    }
//    return res;
//}
//let x=largest([[1, 3, 9], [22, 4, 9], [5, 6, 3]] )
//console.log(x)

//prgm-12-----------------------------------

//prgm-13----------------------------------------
//Create a function that takes an array of numbers and returns the second largest number.
//Example:
//secondLargest([10, 40, 30, 20, 50]) ➞ 40

//function sort(arr) {
//    let s = arr.sort((a, b) => a - b);
//    return s;
//}
//let x = sort([3, 5, 6, 8, 4])
//console.log(x[x.length-2])

//prgm-13-----------------------------------------

//prgm-14------------------------------------------
//Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
//Example:
//removeDups([1, 0, 1, 0]) ➞ [1, 0]
//removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// let arr = [1, 0, 1, 0]
// let arr1 = [];
// for (let i = 0; i < arr.length; i++){
//   if (!arr1.includes(arr[i])) {
//     arr1.push(arr[i])
//   }
// }
// console.log(arr1)

// function dup(arr) {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!array.includes(arr[i])) {
//       array.push(arr[i]);
//     }
//   }
//   return array;
// }
// console.log(dup([1, 0, 1, 0]));
// console.log(dup(["The", "big", "cat"]));

//prgm-14------------------------------------------

//prgm-15------------------------------------------
//Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.
//Example:
//findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3

// let a = [2, 2, 2, 3, 4, 4, 4,6,7];

// for (i = 0; i < a.length; i++) {
//   let b = 0;
//   for (j = 0; j < a.length; j++) {
//     if (a[i] == a[j]) {
//       b++;
//     }
//   }
//   if (b == 1) {
//     console.log(a[i]);
//   }
// }

//prgm-15------------------------------------------

//prgm-16-----------------------------------------
//Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
//Example:charCount("c", "Chamber of secrets") ➞ 1

// let a = "c"
// let b = "chamber of secrets"
// let c = 0;
// for (i = 0; i < b.length; i++){
//   if (a == b[i]) {
//     c++;
//   }
// }console.log(c);

//prgm-16----------------------------------------

//prgm-17--------------------------------------
//Create a function that takes a string and returns the number (count) of vowels contained within it.
//Example:
//countVowels("Celebration") ➞ 5

// function vowel(str) {
//   let c = 0;
//   for (let i = 0; i < str.length; i++){
//     if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//       c++;
//     }
//   } return c;
// }
// console.log(vowel("celebrations"))

//prgm-17-----------------------------------------

//prgm-18------------------------------------------
//Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
//Example:reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

// let str = "Happy Birthday";
// let b = "";
// for (i = 0; i < str.length; i++) {
//   if (str[i] == str[i].toUpperCase()) {
//     b += str[i].toLowerCase();
//   } else {
//     b += str[i].toUpperCase();
//   }
// }
// console.log(b);

//prgm-18------------------------------------------

//prgm-19----------------------------------------
//Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
//Input:n=5 o/]p:2 4 6 8 10

// let n = 5;
// let c = 0;
// for (let i = 1; i <=n; i++){
//     c = i * 2;
//     console.log(c);
// }

//prgm-19-----------------------------------------

//prgm-20-----------------------------------------
//Create Function that will take one parameter and return type of the data.

// function datatype(data) {
//     return typeof (data);
// }
// const a = "hello";
// const b = 500;
// console.log(datatype(a));
// console.log(datatype(b));

//prgm-20-------------------------------------------

//prgm-21-------------------------------------------
//Program to find greatest of three numbers(using ternery operator).

// let num1 = 4;
// let num2 = 6
// let num3 = 8;
// const greatest = ((num1 > num2) && (num1 > num3)) ? num1 : ((num2 > num1) && (num2 > num3)) ? num2 : num3

// console.log(greatest);

// function greatest(num1, num2, num3) {
//     const great =
//       num1 > num2 && num1 > num3
//         ? num1
//         : num2 > num1 && num2 > num3
//         ? num2
//                 : num3;
//     return great;
// }
// console.log(greatest(2,8,1));

//prgm-21--------------------------------------------

//prgm-22--------------------------------------------
//C Program to find factorial of number.

// let num = 6;
// let fact = 1;
// for (i = 1; i < num; i++){
//     fact *= i;

// }console.log(fact);

//prgm-22-------------------------------------------

//prgm-23-------------------------------------------
//C Program to arrange numbers in ascending order

// function sort(arr) {
//     return arr.slice().sort(function (a, b) {
//         return a - b;
//     })
// }
// let a = [2, 7, 5, 1, 4]
// console.log(sort(a));

// let a = [2, 7, 5, 1, 4];
// for (i = 0; i < a.length; i++) {
//   for (j = i + 1; j < a.length; j++) {
//     if (a[i] > a[j]) {
//       [a[i], a[j]] = [a[j], a[i]];
//     }
//   }
// }
// console.log(a);
//prgm-23-------------------------------------------

//prgm-24--------------------------------------------
//  Print Patter using loop.

//   		1 2 3 4 5
//      1 2 3 4
// 			1 2 3
// 			1 2
//      1

//  debugger
// let row = 1;
// for (let i = 5; i >= 1; i--){
//     let r = "";
//     for (let j = 1; j <= i; j--){
//         r += " *";
//     }
//     console.log(r);
// }

// let row1 = 5;
// for (let i = 1; i <= row1; i++) {
//   let r = "";
//   for (let j = 1; j <= i; j++) {
//     r += " *";
//   }
//   console.log(r);
// }

// *               *
// * *           * *
// * * *       * * *
// * * * *   * * * *
// * * * * * * * * *

//prgm-24-------------------------------------------

//prgm-25-------------------------------------------
//Program to Calculate the Power of a Number(using loop only).

// let num = 5;
// let m = num ** 3;
// console.log(m);

//prgm-25-------------------------------------------

//prgm-26------------------------------------------
// Program to Check Whether a Number is Prime or Not

// function Prime(number) {
//   if (number <= 1) {
//     return "composite"; // 0 and 1 are not prime numbers
//   }

//   for (let i = 2; i <= number / 2; i++) {
//     if (number % i === 0) {
//       return "not a prime"; // If the number is divisible by any number between 2 and half of itself, it's not prime
//     }
//   }

//   return "prime num"; // If no divisors are found, the number is prime
// }
// console.log(Prime(1));
// console.log(Prime(2));
// console.log(Prime(4));

// prime num from range 2-50;
// for (let i = 2; i <= 50; i++) {
//   var c = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       c++;
//     }
//   }
//   if (c === 2) {
//     console.log(i);
//   }
// }

//prgm-26--------------------------------------------

//prgm-27--------------------------------------------
// Program to find LCM of two numbers using while loop

//prgm-27-------------------------------------------

//prgm-28--------------------------------------------
// Program to Display Characters from A to Z Using Loop with count.

// 			Output: A1 B2 C3 D4 E5 F6 ……. Z26

//prgm-28-------------------------------------------

//prgm-29--------------------------------------------
//  Program to find a missing number

// 			Input:  n=5(length of array), arr= [5,3,1,4]
// 			Output: 2 is missing

//prgm-29-------------------------------------------

//prgm-30-------------------------------------------
//  Program to count vowels and consonants in a given String.

// function count(str) {
//   let v = 0;
//   let c = 0;
//   for (i = 0; i < str.length; i++){
//     if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//       v++;

//     } else {
//       c++;
//     }
//   }return `${v} vowels and ${c} consonants`

// }
// x = count("i am ram")
// console.log(x);

//prgm-30------------------------------------------

//prgm-31-----------------------------------------
// program to insert  the elements of an array for specific index.

// 			Input: [1,2,3,4,5,7,8,9,10] , index=5
// Output: [1, 2, 3, 4, 5, 6, 78, 9, 10]

// let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// arr.splice(5,0,6)
// console.log(arr);

//prgm-31----------------------------------------

//prgm-32-----------------------------------------
// Reverse a number using while Loop

// let num = 1234;
// let b = num.toString();
// c = "";
// console.log(typeof b);
// for (i = b.length - 1; i >= 0; i--) {
//   c += b[i];
// }
// console.log(c);

// let d=1234
// let num = d.toString().split('').reverse().join('');
// console.log(num);

//prgm-32----------------------------------------

//prgm-33-----------------------------------------
// Count occurrence of number:

// 			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 			Output: 7 present 2 times.

// var input = [1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 9, 10];
// let a = 7;
// let c = 0;
// for (i = 0; i < input.length; i++){
//   if (input[i] == a) {
//     c++;

//   }
// }console.log(`${a} present ${c} times`);

//prgm-33----------------------------------------

// var a;
// a=null
// console.log(a)

// Multiplication of a number----------------------
// var num = prompt("enter num");
// for (let i = 1; i <= 10; i++){
//   var res = num * 1;
//   console.log(num +"*"+ i + "=" +res);
// }

//prime--------------------------------------

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

// function candle(n, height) {
//     var maxheight = Math.max(height);
//     var c = 0;
//     for (var i = 0; i < n; i++){
//         if (height[i] == maxheight) {
//             c++;
//         }
//     }
//     return console.log(c);
// }
// candle(4, [3,2,1,3])

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.nationality = "English";
// }
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// console.log("The nationality of my father is " + myFather.nationality + ". The nationality of my mother is " + myMother.nationality)

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     // date = new Date();  // This will not work
//       const date = new Date();
//     //console.log(date)  // This will work
//       return date.getFullYear() - this.year;

//     }
// }

// const myCar = new Car("Ford", 2014);
//  //console.log(myCar.age());
// console.log("My car is " + myCar.age() + " years old.");

// even prblm using class----------------------------
// class even{
//   constructor(num) {
//     this.numb = num;
//   }
//   cond() {
//     if (this.numb % 2 == 0) {
//       return "even";
//     } else {
//       return "odd";
//     }
//   }
// }
// let fun = new even(6);
// console.log(fun.cond())

//even prblm using static keyword-------------------
// class even{
//   constructor(num) {
//     this.n = num;
//   }
//   static check(obj) {
//     //console.log(obj);
//     if (obj.n % 2 !== 0) {
//       return "odd "+obj.n;
//     } else {
//       return "even "+obj.n;
//     }
//   }
// }
// let obj = new even(8);
// console.log(even.check(obj));

// input = 5;
// output = 5*4*3*2*1=125

var a = ["string1234string", "chai7234ya", "uhyb567r"];
c = [];

for (i = 0; i < a.length; i++) {
  b = 0;
  for (j = 0; j < a[i].length; j++) {
    if (/\d/.test(a[i][j])) {
      b += parseInt(a[i][j]);
    }
  }
  c.push(b);
}
console.log(c);
