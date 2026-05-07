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
