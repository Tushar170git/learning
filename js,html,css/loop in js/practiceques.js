// Qs1.WriteaJSprogramtodeletealloccurrencesofelement ‘num’ in a given array.
// Example: if arr=[1,2,3,4,5,6,2,3]&num=2
// Resultshouldbearr=[1,3,4,5,6,3]
// let arr =[1,2,3,4,5,6,2,3];
// let num =2;
// for (let i= 0; i<arr.length;i++) {
//     if (arr[i]==num) { //arr[0]=1 (1==2)  , arr[1] =2 (2==2) 
//         arr.splice(i,1);
//     }
// }
// console.log(arr);
//2. Write a JSprogram to find the no of digits in a number.
// Example: if number=287152,count=6
let number = 287152;
let count =0;
let copy = number;
while(copy>0) {
    count++;
    copy = Math.floor(copy/10);
}  console.log(count);
console.log(number.length); // lenght work only on string or array 




// // Qs3.Write a JSprogram to find the sum of digits in a number.
// Example: if number=287152,sum=25


// Qs4.Printthefactorialofanumbern.
// [Factorialofanumbernistheproductofallpositiveintegerslessthanorequal toa
// givenpositiveintegeranddenotedbythat integer.]
// Example:
// 7!(factorialof7)=1x2x3x4x5x6x7=5040
// 5!(factorialof5)=1x2x3x4x5=120
// 3!(factorialof3)=1x2x3=6
// 0!Isalways1
let n = 7;
let f = 1;
for (let i=1;i<=7;i++) 
{
   f= f*i;  // 1*1=1,2x1=2,3x2=6,4x6 = 24, 5x24 =120 ,6x120 = 720,  7x720 = 5040
   // 1x2x3=(6)x4
    
}
console.log(`factorial of ${n} is ${f}`);


// Qs5.Find the largest number in an array with only positive numbers

// let arr0 = [2, 5, 10, 4, 2, 7, 1, 9.100,-100,100];
// let largest = 0; // it work with only positive number if all number is negative then largest no. will never print 
//  let small = arr0[0];
// for(let i=0; i <= arr0.length; i++) {
// if (largest < arr0[i]) {
// largest = arr0[i]; //2,5,10
// }

// }
// for (let j= 1;j<arr0.length;j++) {
//     if (small>arr0[j]) {
//         small = arr0[j];
//     }
// }
// console.log (`largest no. is ${largest}`); // 10
// console.log(`smallest no. is ${small}`); // -100

// find largest and min number in an array 
let arr = [10, 45, 2, 99, 23, -5];

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Max:", max);
console.log("Min:", min);


