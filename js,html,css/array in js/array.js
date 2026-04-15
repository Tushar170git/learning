let fruit =["aoople","bana",4466,"jfej"];
console.log(typeof (fruit)); // object
console.log(fruit);
// change array value 
fruit[2]= "orange";
console.log(fruit);
// lenght array property 
console.log(fruit.length);
// let name2 = "mohit";
// name2[0]="b";
// console.log(name2[0]);// no change 
// console.log(name2); // no change will happen because string are immutable while array are mutable 


// now see arrays methods :-
// slice = same like string extract part of array
let colour = ["red","yellow","blue","orange","pink","white"];
// console.log(colour.slice()); // all 
// console.log(colour.slice(1,3));
// console.log(colour.slice(-2));
// console.log(colour.slice(3));
// console.log(colour); // 

//  splice 
// console.log(colour.splice(4));
// console.log(colour);
// colour.splice(0,1,);
// console.log(colour); // yellow,blue , orange 
// let gaya;
// colour.splice(0,1,"black",gaya,54); // add element will be from starting index which i give at start which is 0
// console.log(colour);  

let arr = [10,20,30,40];
console.log(arr.splice(1,0,99)); // it will print [] because nothing delete 
console.log(arr);
// spice return delete elemnts 


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

// array reference 
console.log([1]===[1]);
console.log(1===1);