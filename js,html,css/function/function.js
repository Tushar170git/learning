// function add(a,b) {
//     console.log(a+b);
// }
// add(20,50);
// // with return value 
// function add(a,b){
//  console.log( a + b);
//  return a+b;
// }

// let result = add(5,10);
// console.log(result);
// let b= add (20,30);
// console.log(b);
// another example 

// function square(x){
// //  return x*x;
// console.log(x*x);
// }

// console.log(square(4));

// greet("Tushar");  // it will work with normal function 
// function greet(name){
//  console.log("Hello " + name);
// }
// greet(); 


// create a fun that gives us the average of 3 numbers :-

function numb2 ( ... num) { 
// console.log(num); [5,10]
let summ2=0;
for(let n of num) {     // find average of number 
summ2= summ2 + n /num.length; // 0+5,0+10
}
console. log (`the average of ${num} is ${summ2}`); // ${sum} auttomatically convert array into string 5,10,15

}
numb2(5,10,15,20); 

// create a function that prints the multiplication table  of a number :-
// function tables (h) {
// for (let i=h;i<=h*10;i=i+h) {
//   console.log(i); // 2 ,4 ...
// }
// }
// tables(2);

function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

table(2);


// // now see same thing with function experssion :-
//   greet1(); //show error with function expresssion if we call it 
// // before it created but in normal fuction it will work and thats the differnce betwwen normal and fuction expresiion...
// const greet1 = function() {
//     console.log("hello");
// }

// Function Expression with Parameters:-
// const add = function(a,b){
//   return a + b;
// };
// let b= (add(5,3));
// console.log(b);

// now see arrow function in js :-
// const greet2 = () => {
//  console.log("Hello");
// }
// greet2();
// short arrow function :-
// const add1 = (a,b) => a+b;
// let res = add1(5,5); // to print this we have 2 option wheter console inside 
// like const add1 = (a,b) => {
  // console.log(a+b);   }; add (5,5)    
  // or console with calling 
// console.log(res);

// // single 
// const square = (x) => x*x;
// console.log(square(5));

// object in arrow function 
//   const getuser = () => {
//     console.log ( {name: "tushar"});
//   };
//  getuser();

 // normal function :-
//  const sum = (a,b,c) => {
//   s= a+b+c;
//   console.log(a);
//   console.log(b);
//   return s;
//   // not print after return 
 
//  }
//  let d = sum(5,6,8);
//  console.log(d);

//  console.log(a);    // it willl show error becuase variable inside function paramenters are local varible work under fun scope only 
 








// function with this arrow function limittaion :-
// const user = {
//   name: "Tushar",        // data
//   greet: function(){     // function
//     console.log("Hello" + this.name);
//   }
// };
// user.greet();
// console.log(user.name);// object kai andar key 
// console.log(user.greet);
// // if we store function inside variable :-
// const obj = {
//   name: "Tushar",
//   show: function(){
//     console.log(this.name);
//   }
// };
// const fn = obj.show;
// // fn();    it will show undefined because this keyword only work when function is caleed with object only here fn() called alone 

// const obj = {
//   name: "Tushar",
//   show: function(){
//     const inner = () => {
//       console.log(this.name);
//     }
//     inner();
//   }
// };
// obj.show();
// inner();  // it will show error because inner is inside show(), so you cannot call it outside
// // const c = (a,b) => 
// // {
// //   console.log(a+b);
// // }
// // c(5,10);
// let d = ()=> ({name:"tushar",age:54});
// let x= d();
// console.log(x);


// this in arrow 
// const obj = {
//   name: "Tushar",
//   hello: function() {
//   show= () => {
//     console.log(this.name);
//     console.log(this.age);
//   }
//   show();
//   age:20;
// }
// };

// obj.hello();

// ! normal function  :- 
// function add(a,b) {
//     console.log(a+b);
// }
// add(20,30);
function sum (a,b,c=2) {
  // console.log(arguments);
  // return a+b;
  const add = a+b+c
  console.log(add);
}
sum(10,20,50);
sum(10,90); // it will nan because only 2 argument passed,we can passed default value to variable if the value is not passed then it will automatically take from default value  
  






// let see rest operator & spread operator  in function 
// rest operator
function numb ( ... num) { // it is rest operator it convert all the value of varible while passing function into array, it is always used in function parameters and always stay in last 
 // for ex =  function demo(a, b, ...rest) {} // ✅ correct   , function demo(...rest, a) {}    // ❌ wrong                 
console.log(num);
let summ=0;
for(let n of num) {
summ+=n; // 0+5,0+10
}
console. log (summ);

}
numb(5,10);

// now lets see spread operators (...) - open /seal open 
// spread operator used when we want to break array or object into individual values 
// for example :- 
let arr = [1, 2, 3]; console.log(...arr); // op=1,2,3 break array and remove []
// while rest operator let arr2 =(1,2,3); console.log(...arr2); // sorry it is used in fun pararmeters only
// more spread operators examples:-
//use case 1 : copy array 
let a = [1,2]; let b= [...a]; console.log(b);
// case 2: merge array :
let ab = [1, 2]; let bc = [3, 4]; let ca = [...ab, ...bc];
console.log(ca); // op = [1,2,3,4]
// Use Case 3:  spread in function 
function add(a, b, c) {
  console.log(a + b + c);
}
let arr2 = [10, 20, 30];
add(...arr2);
// so rest close the seal {}, while spread open it 



 


// anonymos function = fun without name used in callback,setTimeout,event handeling 
// call back function example :-
function greet(){
  console.log("Hello");
}

function callFun(fn){
console.log("i am callfun u called callfun as an argument greet function")
  fn();   // calling the function we received
  console.log("hello 2");
  console.log(fn);
}
callFun(greet);
// setTimeout = run a function AFTER some time ex with arrow fun:-
// setTimeout(() => {
//   console.log("Hello");
// }, 6000);


// first class function  =it is not type of fun it is feature of js where function can be trated like variables 
// means we can store function in variable, pass functions as a arguments , return function from another function
// see returns functions:-
function outer () {
  return function () {
    console.log(" written inside return function ");
  }
}
 const x= outer();   // x store= function() { console.log("written ....")}
x();
// another example :-
function outer1(){
  console.log("Outer running");
  return function(){
    console.log("Inner running");
  }
}

const x2 = outer1(); // x2= 
x2();
