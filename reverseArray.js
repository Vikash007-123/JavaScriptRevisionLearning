// Reverse the Array using of and in loop


let num = [1, 2, 3, 4, 5];
// let count = num.length - 1;
// for (let c of num) {
//     console.log(num[count]);
//     count--

// }

let num1 = [1, 2, 3, 4, 5];
for (let d of num1) {
    let count = (num1.length) - num1.indexOf(d) - 1;
    console.log(num[count])
}

console.log("-------------------------")
let counter = num1.length - 1;
for (let d in num1) {
    console.log(num[counter - d]) //num[4-3]

}