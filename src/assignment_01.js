/**
 * Create an anonymous function that prints:
    Hello, JavaScript
 */


let printMessage = function () {
    console.log(" Hello, JavaScript")

}
printMessage()


/**
 * Write an anonymous function that takes two numbers as parameters and returns their sum.

Example:

add(5, 3); // Output: 8
 */

let add = function (a, b) {
    return a + b;

}

let result = add(5, 3);
console.log(result)


/**
 * Q3. Even or Odd Checker

Create an anonymous function that checks whether a number is even or odd.

Example:

checkNumber(10); // Even
checkNumber(7);  // Odd
 */

let checkNumber = function (n) {
    if (n % 2 == 0) {
        return "Even";
    } else {
        return "Odd"
    }
}

let resultOfNumber = checkNumber(0);
console.log(resultOfNumber)


/**
 * Use an anonymous function with the filter() method to return numbers greater than 50 from the array below:

const numbers = [12, 65, 34, 89, 23, 90, 100];
 */

let greaterThan50 = function (arr) {
    let a = [];
    for (let c of arr) {
        if (c > 50) {
            a.push(c);
        }
    }
    return a;

}



const numbers = [12, 65, 34, 89, 23, 90, 100];
let a = greaterThan50(numbers);
console.log(a)