//1. map: transform every elemnet of given array


let number = [10, 20, 30, 40, 50];
let num = number.map(n => n * 2);
console.log(num);

let sqrt = number.map(e => e * e);
console.log(sqrt)

let empNames = ['uday', 'ankita', 'navya', 'senthi']

let namesUper = empNames.map(e => e.toUpperCase());
console.log(namesUper)
