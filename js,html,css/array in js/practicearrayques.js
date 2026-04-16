let arr =["jan","july","march","aug"];
arr.splice(0,1);
arr.splice(1,0,"june");
console.log(arr);
// console.log(arr.indexOf("march"));
arr.reverse();
console.log(arr);
console.log(arr.indexOf("aug"));

// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0,-2] and n=3
// Print, [7, 9, 0]
let arr2 = [7, 9, 0, -2];
let n = 3;
let ans = arr2.slice(0, n);
console.log (ans);
// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0,-2] and n=3
// Print, [9, 0,-2]
let ans2 = arr2.slice(4-n);
console.log(ans2);
// Qs3. Write a JavaScript program to check whether a string is blank or not
// let str = prompt("please enter some text");
// if(str.length==0) {
//     console.log("string is empty")
// } else{
//     console.log("string is not empty");
// }
//  Write a JavaScript program to test whether the character at the given (character)
// index is lower case
let str = "LpBaCoLNEgEMK";
let idx = 0;
if (str[idx] == str[idx].toLowerCase()) {
  console.log("character is lowercase");
} else {
  console.log("character is not lowercase");
}

//. Write a JavaScript program to check if an element exists in an array or not
let arr6 =["hello",55,"djchdj",6];
let item =45;
if(arr6.indexOf(item)!=-1) {
    console.log("element exist in array");
} else {
    console.log("element do no exist in array");
}