// post -(later/after increment)

// let a = 1;
// let b = a++;
// let c = b;
// console.log(a);
// console.log(b)
// console.log(c)


let total = 10;
console.log(total++);
console.log(total)

//2. pre(before/first ) increment:

let p = 1;
let q = ++p;
console.log(p);
console.log(q);

let p1 = -999;
let q1 = ++p1;

console.log(p1);
console.log(q1)


let u = 0;
let v = ++u;
console.log(u);
console.log(v);


//3. post(llater/after) decrement ---

let m = 2;
let n = m--;
console.log(m);
console.log(n)



let bill = 100;
console.log(--bill);

console.log(bill)


// What will be the output of the following program?

// let i = 11;

// i = i++ + ++i;  //11->12->13

// console.log(i); //24


//Guess the output of the following program?
// let a = 11, b = 22, c;
c = a + b + a++ + b++ + ++a + ++b;  //11+22+11+22+13+24
console.log("a=" + a); //13
console.log("b=" + b);  //24
console.log("c=" + c); //103

//3) What will be the output of the below program?
// let i = 0;
// let j = i++ - --i + ++i - i--;
// console.log(i); //
// console.log(j);


//4) Is the below program written correctly?
let b1 = true;
b1++;
console.log(b1);

//5) What will be the output of the below program?
let i = 1, j = 2, k = 3;
let m1 = i-- - j-- - k--;
console.log("i=" + i);
console.log("j=" + j);
console.log("k=" + k);
console.log("m=" + m1);


//6) What will be the output of the following program?
let a = 1, b = 2;
console.log(--b - ++a + ++b - --a);