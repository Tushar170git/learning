// // print all odd no. from 1 to 100 
// for (let i=1;i<=100;i++) {
//     if(i%2==0) {   // for odd i%2!==0
//         console.log(i);
//     }
// }
// // sum of odd number (1 to 100)
// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//   if(i % 2 !== 0) {
//     sum = sum + i;
//   }
// }
// console.log("Sum of odd numbers:", sum);
// //  infinite loop  = never ending loop
// // wap to print multiplication of 5 
// let x = 5;
// for (let i = 1;i<=10;i++) {
//     console.log(`${x} x ${i} = ${x*i}`);
// }

// nested loop = loop inside another loop 

for (let i= 1;i<=3;i++)  { // outer loop
console.log("outer loop ")
    for (let j= 1;j<=3;j++) {
    console.log(j); // 1,2,3    1,2,3  1,2,3
}
}
// WHILE loop 
// guess favorite movie using while loop 
// const favMovie = "avatar";
// // let guess = prompt("guess my favorite movie");
// while( (guess != favMovie) && (guess != "quit")) {
// if (guess=="quit") {
//     console.log("you quit losser");
//     break;

// }
// // guess = prompt("wrong guess. please try again");
// if(guess == favMovie) {
// console. log("congrats !! ");
// } else {
// console. log("you quit");
// }   }
// break keyword = used in loop to stop execution of loop 
console.log("while loop");

let i=1;
while (i<=5) {
    if (i==3) {
        break;
    }
    console.log(i);
   
    // if (i==3) {
    //     break;
    // }
    i++;
}
console.log("loop with array");
// loop with array :-
let fruits = ["mango","apple","banana","litichi","orange"];
fruits.push("gobhi");
// for (let i=0;i<fruits.length;i++) {
//     console.log(i,fruits[i]);
// } // to print this in reverse i=arr.lenght-1;
for (let i= fruits.length-1; i>=0;i--) {
    console.log(i,fruits[i]);
} 
console.log("nested loops with nested array"); 
// nested loop with nested array 

 



