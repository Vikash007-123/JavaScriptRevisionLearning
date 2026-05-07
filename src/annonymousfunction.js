

let world = function () {
    console.log('Hello World');

};

let world1 = function () {
    console.log('Hello World');
    return 100;

};

//console.log(world1());
let t1 = world1();
console.log(t1)
/**
 * This method is use for to launch the browser based on browserName
 * @param {string} browserName 
 * @returns 
 */

let initDriver = function (browserName) {
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

let isInit = initDriver('ie');
console.log(isInit)