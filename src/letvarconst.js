//data types: type of data
//number,boolean, string

//var , let, const

//1. var : is used in old JS --- never use it in modern JS/tools/PW

//Declaration
var x=10;
var x=20;
var x=30;

console.log(x);

//Reassignment:

var y=100;
y=200;
y=300;

console.log(y);

//Hositing

console.log(t);

var t=100;
console.log(t);


//2. let 

//Declaration

let p=100;
console.log(p)

let a;
a=200;
console.log(a)

p=200;
console.log(p)

//3. Hositing is allowed but with error && RT
//  console.log(h); //Cannot access 'h' before initialization
//  let h=25;


 //const 

 const Pi=3.14;
 // PI=3.14; reassinment not allowed->Type Error : Assignment to constant variable


 //tittle,url,daysOf week,month,PI, Logo, base URL

 /* Duplicates not allowed ->ReDeclaration not allowed
 const tr=200;
 const tr=300
 */

 const LOGIN_TITTLE="Java App";
//Hosting not allowed
//  console.log(PT);
//  const PT=3.19;


 var r=20;
 let r=10;