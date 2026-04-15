// sort method :- it is used to arrange elements in order
// by defualt arrange in ascending =small to big
// syntex = array.sort();

let arr =[3,1,4,2];
// arr.sort();
// console.log(arr); 
// let arr2 = [10,5,100,2];
// arr2.sort();
// console.log(arr2); // 2,5,10,100 // 
// sort method :-
let b= arr.sort();
console.log(b);
console.log (arr);

// js sort according to string 
//example:-
let arr2 = [10,5,100,2];
arr2.sort();
console.log(arr2); // 10,100,2,5 but expected sholud be 2,5,10,100 but it used string comparision to fix it use compare fun
// use comapre fun 
let arr3 = [10,5,100,2];
arr3.sort(function(a,b){
return a - b;
});
console.log(arr3); // 2,5,10,100
// for sort in descending order do 
//arr.sort(function(a,b) {  return b - a;  });
let arr4 = [10,5,100,2];
arr4.sort((a,b)=> b-a);
console.log(arr4); // 100,10,5,2
// copy before sort best practice 
let ae =["jbvj",5,6,9];
let shorted = [...ae].sort(); // this [] blank array and inside this we put ae value which is ["jbvj",5,6,9] but we use spred operator which remove array and became a new array and we sort that array and the original one stay 
console.log (shorted);
console.log(ae);

// sorting object :-
let users = [
{name:"A", age:25},
{name:"B", age:20},
{name:"C", age:30}
];
users.sort((a,b)=> a.age - b.age);
console.log(users);
users.sort((a,b)=>a.name - b.name );
console.log(users);

// Input: ["apple","kiwi","banana"] Output: ["kiwi","apple","banana"]
let fruit =["apple","kiwi","banana"]; fruit.sort();
console.log(fruit); // not get to get o/p we have to comare length 
// fruit.sort((a,b)=>a-b); // it`s for number only but its string value so we use .lenghth
// console.log(fruit);
fruit.sort((a,b)=>a.length-b.length);
console.log(fruit);

 
