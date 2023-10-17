// console.log(5 + + 5);
// console.log(5 - -5);
// console.log(5 - -'5');
// console.log(5 + + '5');
// console.log('5' + + 5);
// console.log('5'- -5);

// var a = "happy";
// var b = "";
// for (i = 0; i < a.length; i++){
//     if (a[i] == "p") {
//         b +="i";
//     } else {
//         b += a[i];
//     }
// }
// console.log(b);

// let c = new String("ayesha");
// console.log(typeof(c));

// function change(a, b) {
//     for (i = 0; i < a.length; i++){
//         if (a[i] == "p") {
//             b += "i";
//         } else {
//             b += a[i];
//         }
//     } return b;
// }
// console.log(change("happy", ""));

// *******Slicing*********
// let c = "ayesha siddiqa";
// let d = c.slice(0, 6); //prints the string in between
// let d = c.slice(5);  //prints from particular index to end
// let d = c.slice(-7); //prints till the index from backside
// console.log(d);


//-------counting the char-----------
// function char(a, b) {
//     let count = 0;
//     for (i = 0; i < a.length; i++){
//         for (j = 0; j < b.length; j++){
//             if (a[i] == b[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(char("s", "sss"));

// ----------even without %-----------
// let x = +prompt("enter x");
// if ((Math.floor(x / 2)) * 2 === x) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

//***********multiplied with 2**********
// num = +prompt("enter num");
// for (i = 0; i <= num; i++) {
//     res = i * 2;
//     console.log(res);
// }

//********type of() ***********************//
// let x ;
// console.log(typeof(x)); //undefined

// console.log(typeof(null)); //object

// let x = null;
// console.log(x); //null

// console.log(x); //not defined

// let x =+prompt();
// console.log(typeof(x)); //number

// let x =prompt();
// console.log(typeof(x));  //string

// console.log(typeof(false)); //boolean

// console.log(typeof([])); //object

// console.log(typeof({}));  //{}->object typeof->object

// console.log(typeof(function(){})); //funct


// let a = "ayesha";
// for (i in a) {
//     console.log(a[i]);
// }
