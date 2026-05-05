let num = [10, 20, 30, 40]
//iterater based on index
console.log(num[0])
console.log(num[1])
console.log(num[2])

//for loop
let c = num.length;
for (let i = 0; i < c; i++) {
    console.log(num[i]);
}

//using for of loop
console.log("-------------of------------")
for (let e of num) {
    console.log(e)
}
//using for in loop
console.log("-------------of------------")
for (let e in num) {
    console.log(e, num[e])
}

console.log("-------------of------------")
for (let e in num) {
    console.log(e, num[e])
}

console.log("-------------of------------")

let num1 = [20, 30, 40];
//merge two array
console.log(num.concat(num1))
console.log(Object.assign({}, num, num1))
console.log(...num, ...num1);

//inbulit method
//push and unshift->  

num.push(34);
console.log(num)

num.unshift(45)

console.log(num)

//pop and shift

num.pop();
console.log(num);

num.shift();

console.log(num)


//Splice --

num1()













