// function outer1(){
//   console.log("Outer running");
//   return function(){
//     console.log("Inner running");
//   }
// }
// const x2 = outer1();  // x2 = function() 
// x2();

// let arr = [10,5,100,2];

// arr.sort();

// console.log(arr);

// function add(a, b, c) {
//   console.log(a + b + c);
// }
// let arr2 = [10, 20, 30];
// add(...arr2);
// let users = [
// {name:"A", age:25},
// {name:"B", age:20},
// {name:"C", age:30}
// ];
// users.sort((a,b)=> a.age - b.age);
// console.log(users);
// users.sort((a,b)=>a.name - b.name );
// console.log(users);
//  let heroes =[["ironman","spiderman","thor"],["suparman","wonder women","flash"]];
// //  console.log(heroes.length);
// // console.log(heroes);
//  for (let i =0;i<heroes.lenght;i++) {
//     console.log(i,heroes[i]);
//  }
// let row =" ";
// console.log("hello");
// let arr = [
//   [1, 2],
//   [3, 4]
// ];

// for (let i = 0; i < arr.length; i++) {
//   let row = "";

//   for (let j = 0; j < arr[i].length; j++) {
//     row  = arr[i][j] + " ";
//   }

//   console.log(row);
// }

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// function add (a,b) {
  
// return a+b;  
// }
//  let b = add(5,10);
//  console.log(b);

//  const add2 = (a,b) => a+b;
//  let x= add2(50,10)
//  console.log(x);
// const a= {
//   b:10,
//   x:function(){
//     console.log(this.b);
//   }
// };
// a.x();
// const user = {
//   b:"ewhjw",
//   greet: function() {
//     console.log(this.b);
//   }
// };
// user.greet();
// let a = 10;
// console.log(a);
