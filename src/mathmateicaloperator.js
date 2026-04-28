console.log(1 + 1
);


console.log("1" + 1);

console.log("1" + "1");

console.log(1 + "1");



//substraction

console.log(1 - "1");  //0 why first take 1-first will treat as number("1")

console.log("5" - 2);
console.log("5" - "3");

console.log(5 - "hello");   //NaN
console.log("hello" - 5);   //NaN
console.log("Hello" - "10");  //NaN


//multiplication 

console.log(1 * "1");
console.log(-1 * "1" * 1);

console.log(1 + "1" - 2);

//division
console.log(10 / "2")

console.log("10" / "2")


console.log(10 + "10" / "2")

console.log(10 + "10" + 10);


//unary plus:

console.log(+"42" + 5)


let billAmount = "1000";

console.log(+billAmount + 100)

billAmount = "test";
console.log(+billAmount + 100) //NaN

//unary negation: -
billAmount = "1000";

console.log(-billAmount + 100)

