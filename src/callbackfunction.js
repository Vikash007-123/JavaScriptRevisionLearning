//Callback function

let sayHi = function () {
    console.log("Hi")
}

let sayHello = function (sayHi) {
    sayHi();
}

sayHello(sayHi);


let addition = (a, b) => console.log(a + b);
let subtraction = (a, b) => console.log(a - b);
let Multiply = (a, b) => console.log(a * b);
let division = (a, b) => console.log(a / b);


let add = function mycalc(a, b, Callback) {
    Callback(a, b, Callback);
}

add(10, 20, Multiply);

let initalizeDriver = function (browserName) {
    console.log(`Valid the browser Name ${browserName}`)
    switch (browserName.trim().toLowerCase()) { //toLowerCase
        case "chrome":
            console.log("----------Chrome---------")
            return true;

        case "Edge":
            console.log("----------Edge---------")
            return true;

        case "firefox":
            console.log("----------firefox---------")
            return true;
        default:
            console.log(`Browser Name is inValid ${browserName}`)
            return false;
    }


}


function myCallingdriver(browserName, Callback) {
    Callback(browserName, Callback);

}

myCallingdriver('Chrome', initalizeDriver)





