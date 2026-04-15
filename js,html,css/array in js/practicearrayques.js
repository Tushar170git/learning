let arr =["jan","july","march","aug"];
arr.splice(0,1);
arr.splice(1,0,"june");
console.log(arr);
// console.log(arr.indexOf("march"));
arr.reverse();
console.log(arr);
console.log(arr.indexOf("aug"));
