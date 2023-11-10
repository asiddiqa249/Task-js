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
// a
// console.log(null)

// Patterns
let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = " ";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
  for (let num = 1; num <= 5; num++) {
    // print star only if it is the boundary location
    if (n == 1 || n == rows) pattern += "*";
    else {
      if (num == 1 || num == 5) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
  }
  pattern += "\n";
}
console.log(pattern);

