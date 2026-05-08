let print = () => console.log('Hello Arrow function');
console.log(print)


//2. 1 param arrow function

let printName = (name) => console.log(name);
console.log(printName)

let test = (a) => console.log(a + 10);
test(10)


let totalbill = bill => console.log(bill + 100);
totalbill(100)

let totalBillAfterPromo = (bill, promo) => console.log(bill + promo + 100);
totalBillAfterPromo(100, 100)


let pro = (a) => a + 4;
let b = pro(100);
console.log(b)


/**
 * 
 * @param {*} name 
 * @returns 
 */
let doLowerCase = (name) => name.toLowerCase();
let lowerName = doLowerCase('VIKASH');
console.log(lowerName)

console.log(`----------------------`)


let initDriver = browserName => {
    console.log(`browser Name is :${browserName}`);
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('Launch chrome')
            return true;
        case 'edge':
            console.log('Launch Edge')
            return true;
        case 'firefox':
            console.log('Launch firefox')
            return true;
        default:
            console.log("Invalid the browserName: " + browserName)
            return false;

    }

}
initDriver('chrome')


let selectDropDown = (...countryName) => {
    console.log(countryName);
    console.log(countryName.length)
}

selectDropDown('India', 'UK')