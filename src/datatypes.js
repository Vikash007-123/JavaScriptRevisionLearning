// data types: type of data

//1. primitive data types: simple | stack | not part of object /reference | fixed memory | no GC

//2 . non primitive data type:- object/Reference /class/Arrays/functions/Interfaces | dynamic memory | Heap


//primitive data types:

//1. number
//range
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER);
let i=10;
console.log(i);
console.log(typeof (i))



let j=10.33;
console.log(j);
console.log(typeof (j))


const PI=3.14;
console.log(typeof(PI));

//size
 // 1 bytes=8bit
 //size=8bytes=64 bits

 //string : '', ""

 let name="Testing";
 let firstName="Naveen";
 let gender='m';
 let isExe='Y'
 let ph='999129939';

 console.log(typeof(firstName));
 console.log(typeof gender)
console.log(typeof isExe);
console.log(typeof ph);

let productName='MackBook Pro';
console.log(productName);



// size: 2 bytes per character
let e='abc'; //=3*2=6 bytes
console.log('my first name is '+firstName);



//3. Boolean :- true/false
let flag=true;
console.log(typeof flag);
let isEmpActive=true;
console.log(isEmpActive);
console.log(typeof flag);


let rest='true';
console.log(typeof rest);
//size :~ 1 byte=8 bits

let num=Number.MIN_SAFE_INTEGER;
console.log(num);
let num1=num+1;
console.log(num1);

//4. BigInt

let amt=9007199254740991n;
console.log(typeof amt)

let x=10; //number
let y=20n; //bigInt
// console.log(x+y);


let pop = BigInt(100)
console.log(pop);
console.log(typeof pop);
console.log(pop +"--->" +typeof pop);

//In this statement, you are using the + operator with a String ("--->"). This triggers Implicit Coercion. JavaScript automatically converts the BigInt to a standard string
//When a BigInt is converted to a string (via .toString() or string concatenation), the n is omitted. It becomes the literal characters "100".

//5. null.  : nothing /no value
//size: ->0 to 8 bytes depends on engine that we are using

let myName=null;
let data=null;
console.log(data);
console.log(typeof data);

//6. undefined

let v;
console.log(v); // size: 0 to 8 bytes depends on engine


