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
// console.log(e * 365.25 + " days");

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
// console.log(a("pravs"));

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

// let arr = ["ddd", "cc", "eeee", "a"];
// for (i = 0; i < arr.length; i++) {
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
// }
// console.log(arr);

//prgm-11------------------------------

//prgm-12----------------------------------------
//Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
//Example:
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

// function largest(arr) {
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
// }
// let x = largest([
//   [4, 2, 7, 1],
//   [20, 70, 40, 90],
//   [1, 2, 0],
// ]);
// console.log(x)

// let arr = [
//   [4, 2, 7, 1],
//   [20, 70, 40, 90],
//   [1, 2, 0],
// ];
// let res = [];
// for (i = 0; i < arr.length; i++) {
//   let max = arr[i][0];
//   for (j = 1; j < arr[i].length; j++) {
//     if (arr[i][j] > max) {
//       max = arr[i][j];
//     }
//   }
//   res.push(max);
// }
// console.log(res);

//prgm-12-----------------------------------

//prgm-13----------------------------------------
//Create a function that takes an array of numbers and returns the second largest number.
//Example:
//secondLargest([10, 40, 30, 20, 50]) ➞ 40

//function sort(arr) {
//    let s = arr.sort((a, b) => a - b);
//    return s;
//}
// let x = sort([3, 5, 6, 8, 4])
//console.log(x[x.length-2])

// function sort(arr) {
//     for (i = 0; i < arr.length; i++){
//         for (j = i + 1; j < arr.length; j++){
//             if (arr[i] > arr[j]) {
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//     }
//     return (arr[arr.length - 2]);
// }
// console.log(sort([3, 5, 6, 8, 4]));

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

// let a = [2, 2, 2, 3, 4, 4, 4,7];

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

// function unique(a) {
//     for (i = 0; i < a.length; i++){
//         let b = 0;
//         for (j = 0; j < a.length; j++){
//             if (a[i] == a[j]) {
//                 b++;
//             }
//         }
//         if (b == 1) {
//             return a[i];
//         }
//     }
// }
// console.log(unique([2, 2, 2, 3, 4, 4, 4, 7]));
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

// function char(a, str) {
//     let c = 0;
//     for (i = 0; i < str.length; i++){
//         if (a == str[i]) {
//             c++;
//         }
//     } return c;
// }
// console.log(char("c","chamber of secrets"));
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

// function rev(str) {
//     let a = "";
//     for (i = 0; i < str.length; i++){
//         if (str[i] == str[i].toUpperCase()) {
//             a += str[i].toLowerCase();
//         } else {
//             a+=str[i].toUpperCase()
//         }
//     }return a
// }
// console.log(rev("Happy Birthday"));
//prgm-18------------------------------------------

//prgm-19----------------------------------------
//Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
//Input:n=5 o/]p:2 4 6 8 10

// let n = 5;
// let c = 0;
// for (let i = 1; i <=n; i++){
//     c = i * 2;
//     console.log(`${i} * 2 = ${c}`);
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

//   	1 2 3 4 5
//      1 2 3 4
// 		1 2 3
// 		1 2
//      1

//  debugger
let row = 1;
for (let i = 5; i >= 1; i--){
    let r = "";
    for (let j = 1; j <= i; j--){
        r += " *";
    }
    console.log(r);
}

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
// let a = 5;
// let b = 10;
// let c;
// if (a > b) {
//     c = a;
// } else {
//     c = b;
// }
// let i = c;
// while (i > 0) {
//     if (i % a == 0 && i % b == 0) {
//         break;
//     } i++;
// }
// console.log(i);

//prgm-27-------------------------------------------

//prgm-28--------------------------------------------
// Program to Display Characters from A to Z Using Loop with count.

// 			Output: A1 B2 C3 D4 E5 F6 ……. Z26
// let a=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
//   "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//   let b=[]
// for (let i = 0; i < a.length; i++){
//   b.push(`${a[i]}${i+1} `);
// }
// console.log(b);

//prgm-28-------------------------------------------

//prgm-29--------------------------------------------
//  Program to find a missing number

// 			Input:  n=5(length of array), arr= [5,3,1,4]
// 			Output: 2 is missing
// let n = 5;
// let arr = [5,3,1,4];
// let a = arr.sort();
// let b = [];
// // console.log(a);
// for (i = 1; i <= n; i++) {
//   if (!a.includes(i)) {
//     b.push(i);
//   }
// }
// console.log(b);

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

//prgm-33------------------------------------------------
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

//prgm-33----------------------------------------------

//********************(Medium Level)****************************//

//prgm-1----------------------------------------
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples :

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// let obj = { a: 1, b: 2 };
// let key = Object.keys(obj);
// console.log(arr);

// let val = Object.values(obj)
// console.log(obj);

// let arr = Object.entries(obj)
// console.log(obj);
//prgm-1----------------------------------------

//prgm-2---------------------------------------------------
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples :
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// let arrOfMul = (7, 5);

// function arrOfMul(n, l) {
//     let b = [];
//     for (let i = 1; i <= l; i++){
//         let res = i * n;
//         // console.log(res);
//         b.push(res)
//     }
//     return b;
// }
// console.log(arrOfMul(7, 5));

// prgm-2---------------------------------------------------

//prgm-3---------------------------------------------------------
// Create the function that takes an array with objects and returns the sum of people's budgets.
// Examples :
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// let arrOfObj = [
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve", age: 32, budget: 40000 },
//   { name: "Martin", age: 16, budget: 2700 },
// ];
// sum = 0;
// for (let i = 0; i < arrOfObj.length; i++){
//     sum+=arrOfObj[i].budget
// }
// console.log(sum);

// function arr(obj,sum=0) {
//     for (let i = 0; i < obj.length; i++){
//         sum += obj[i].budget;
//     }
//     return sum;
// }
// let a=arr([
//   { name: "John", age: 21, budget: 29000 },
//   { name: "Steve", age: 32, budget: 32000 },
//   { name: "Martin", age: 16, budget: 1600 },
// ]);
// console.log(a);
//prgm-3---------------------------------------------------------

//prgm-4------------------------------------------------
// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If a student has no notes (an empty array) then let's assume avgNote: 0.
// 	Example :
// [
//   { name: "John", notes: [3, 5, 4]}
// ] ➞ [
//   { name: "John", avgNote: 4 }
// ]

// function arr(array) {
//   let sum = 0;
//   for (let i = 0; i < array[0].notes.length; i++) {
//     sum += array[0].notes[i];
//   }
//   return `{ Name: ${array[0].name}, avgnote: ${sum / array[0].notes.length} }`;
// }
// console.log(arr([{ name: "John", notes: [3, 5, 4] }]));
//prgm-4------------------------------------------------

//prgm-5-----------------------------------------------------------
// Create a function that moves all capital letters to the front of a word.
// 	Examples :capToFront("hApPy") ➞ "APhpy"

// function rev(str) {
//     let a=""
//     for (i = 0; i < str.length; i++){
//         if (str[i] == str[i].toUpperCase()) {
//             a += str[i];
//         }
//     }
//     for (i = 0; i < str.length; i++) {
//       if (str[i] == str[i].toLowerCase()) {
//         a += str[i];
//       }
//     }
//     return a;
// }
// console.log(rev("hApPy"));
// console.log(rev("moveMENT"));
// console.log(rev("shOrtCAKE"));
//prgm-5-----------------------------------------------------------

//prgm-6----------------------------------------------
// Count each occurrence of number(can not use predefined function).
// Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 			Output: 1 present 2 times.
// 				   2 present 1 times.
// 				   3 present 2 times.

// function count(arr, num) {
//     let c = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == num) {
//             c++;
//         }
//     } return `${num} present ${c} times`;
// } console.log(count([1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 9, 10], 1));
// console.log(count([1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 9, 10], 2));
// console.log(count([1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 9, 10], 3));
// console.log(count([1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 9, 10], 5));

// let arr = [1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 9, 10];
// let c = 0;
// for (i = 0; i < arr.length; i++){
    
// }

//prgm-6-----------------------------------------------------------

//prgm-7--------------------------------------------------
// Write a function that accepts an array of strings. Return the longest string(can not use predefined function).
// Input: [‘nik’, ’mikhil’, ’Cow’,’Elephant’] Output: Elephant

// function len(arr) {
//     let str = arr[0];
//     for (i = 0; i < arr.length; i++){
//         if (arr[i].length > str.length) {
//             str = arr[i]
//         }

//     } return str;
// }
// console.log(len(["nik", "mikhil", "Cow", "Elephant"]));
//prgm-7-----------------------------------------------------------

//prgm-8------------------------------------------------------
// Most Commonly Used two Character in String(can not use predefined function)
// Input: "Hii i am ram"
// Output: i, a

// let str = "hii i am ram";
// let str1 = "";

// for (i = 0; i < str.length; i++) {
//   let c = 0;
//   for (j = i+1; j < str.length; j++) {
//     if (str[i] == str[j]) {
//       c++;
//       if (c == 1) {
//         str1 += str[j];
//       }
//     }
//   }
//     if (str[i] == "i" || str[i] == "a") {
//         str1 += str[i];
//     }
// }
// let x=""
// for (i = 0; i < str1.length; i++){
//     if (!x.includes(str1[i])) {
//         x+=str1[i]
//     }
// }
// console.log(x);
//prgm-8-----------------------------------------------------------

//prgm-9-------------------------------------------------------
// Write Program to remove duplicate elements in an array and sort it in descending order(can not use predefined function).
// 			Input: [5,3,5,2,1,1,7,3,5,6]
// 			Output: [7,6,5,32,1]

// let arr = [5, 3, 5, 2, 1, 1, 7, 3, 5, 6];

// for (i = 0; i < arr.length; i++) {
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
// }
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!arr1.includes(arr[i])) {
//     arr1.push(arr[i]);
//   }
// }
// console.log(arr1);

//prgm-10-----------------------------------------------------------
// Write a Program to Remove brackets from an algebraic expression(can not use predefined function).
// Input: a + b-(9+c)=3 Output: a + b- 9+c=3

// let inp = "a + b - (9 + c)=3";
// for (let i = 0; i < inp.length; i++){

// }

//object------------------------------------------------------------
// const name = "sai"
// const id="3"
// console.log({name,id});
//prgm-10-----------------------------------------------------------

//prgm-11-----------------------------------------------------------
// Write Program to remove duplicate elements in an array and sort it in Accending order(can not use predefined function).
// Input: [Z, A, P, C, A, Z , K, N, C] Output: [A, C, K,N, P, Z]
// let inp = ["Z", "A", "P", "C", "A", "Z", "K","N","C"];
// let inp1=[]
// for (i = 0; i < inp.length; i++){
//     if (!inp1.includes(inp[i])) {
//         inp1.push(inp[i])
//     }
// }
// console.log(inp1);
//prgm-11-----------------------------------------------------------

//prgm-12-----------------------------------------------------------
//  If subseq's  array  sequence is present in the array, returns true or else returns false.
// Let arr = [5, 7, 3, 2, 2, 7,-1, 5, -3, 13, 4]
// Example:
//            Input : Subseq1 = [7, -1, 5, -3] Output:  true
//                    Subseq2 = [7, -1, 4, -3]       : false
//                    Subseq3 = [ -1]                 : true
//                    Subseq4 = [13, -3, 4, 1]        : false

//prgm-12-----------------------------------------------------------

//prgm-13-----------------------------------------------------------
// Find sum of the Unique numbers:
// Example : Let arr = [1, 2, 2, 1, 3, 5, 1];
//  The unique numbers are 1,2, 3, 5 so the sum should be 11.

// let arr = [1, 2, 2, 1, 3, 5, 1];
// let ar=[]
// for (i = 0; i < arr.length; i++){
//     if (!ar.includes(arr[i])) {
//         ar.push(arr[i])
//     }
// } console.log(ar);
// let sum = 0;
// for (i = 0; i < ar.length; i++){
//     sum+=ar[i]
// }
// console.log(sum);

//prgm-13-----------------------------------------------------------

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

//count of numbers inside a string
// var a = ["string1234string", "chai7234ya", "uhyb567r"];
// c = [];

// for (i = 0; i < a.length; i++) {
//   b = 0;
//   for (j = 0; j < a[i].length; j++) {
//     if (/\d/.test(a[i][j])) {
//       b += parseInt(a[i][j]);
//     }
//   }
//   c.push(b);
// }
// console.log(c);

// var x = 5;
// var y = x++;
// console.log(y);
// var z = ++x;
// console.log(z);
// console.log(x);
// console.log(x+y+z);

//alphabet printing------------------------
// let b=[]
// for (let i = 65; i <= 90; i++){
//     let a = String.fromCharCode(i)
//     console.log(a + [i - 64]);
//     b.push(a + [i - 64]);

// }console.log(b);

//  let a = [2, 3, 3, 4, 5, 6, 6, 8, 8, 8, 12, 12];
//  d = [];
//  for (i = 0; i < a.length; i++) {
//    if (a[i] == a[i + 1]) {
//      d.push(a[i]);
//    }
//  }
//  let bb = new Set(d);
//  console.log(bb.size);

//***********Conut of array*****************/
// let arr = [1, 5, 3]
// let c=0
// arr.forEach((val,ind) =>
//     c+=val,
// );
// console.log(c);

// Return the even the numbers from the array without using the predefined method push
// let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// b=[]
// for (let i = 0; i < a.length; i++){
//     if (a[i] % 2 == 0) {
//         b.push(a[i])
//         console.log(a[i]);
//     }
// } console.log(b);

// let a=[0,1,2,3,4,5,6,7,8,9,10]
// let b=[]
// for(i in a){
//     if(a[i]%2==0){
//         b[b.length]=a[i]
//     }
// }
// console.log(b)


// print the words of the numbers in the array as the output
// let a = [0, 1, 2,3,4,5,6,7,8,9,10];
// let b = [];
// for (i = 0; i < a.length; i++) {
//   a[i] == 0
//     ? b.push("Zero")
//     : a[i] == 1
//     ? b.push("one")
//     : a[i] == 2
//     ? b.push("two")
//     : a[i] == 3
//     ? b.push("three")
//     : a[i] == 4
//     ? b.push("four")
//     : a[i] == 5
//     ? b.push("five")
//     : a[i] == 6
//     ? b.push("six")
//     : a[i] == 7
//     ? b.push("seven")
//     : a[i] == 8
//     ? b.push("eight")
//     : a[i] == 9
//     ? b.push("nine")
//     : a[i] == 10
//     ? b.push("ten")
//     : "invalid";
// //   if (a[i] == 0) {
// //     b.push("zero");
// //   } else if (a[i] == 1) {
// //     b.push("one");
// //   } else b.push("two");
// }
// console.log(b);

// output: ['Zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

// checking missing and adding to the previous array and getting sequence
// let a = [1, 2, 4, 6, 7, 8];
// let b = []
// for (i = 1; i < a.length; i++){
//     if (!a.includes(i)) {
//         b.push(i);
//     }
// } console.log(b);
// let c = a.concat(b);
// console.log(c.sort());