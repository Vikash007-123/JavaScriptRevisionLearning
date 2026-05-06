// object literals

const user = {}

console.log(typeof user)
console.log(user)
console.log("After insert the value")
user.name = "vikash";
user.age = 18;
//
console.log(Object.values(user));

const userInfo = {
    firstName: "Vikash",
    lastName: "Kumar",
    age: 18,
    locationInfo: ["Bhartiya city", "Bangalore", 'India']


}
userInfo.lastName = "kbhbkjfv"
console.log(userInfo)
console.log(userInfo.lastName)

console.log(userInfo["firstName"])



const tinderUserApp = {
    userName: {
        firstName: "Vikash",
        lastName: "Kumar"
    },
    city: "Banagalore",
    isLoggedIn: true,
    isNumberOfDays: 3,
    isDays: ["Monday", "Wednesday", "Friday"]
}

console.log(Object.keys(tinderUserApp))

console.log(Object.assign({}, userInfo, tinderUserApp));

let u1 = {
    name: "vikash",
    age: 30

}

let u2 = {
    name: "vikas123",
    age: 301

}
let u3 = {
    name: "Kumar",
    age: 302

}

console.log(u1);
console.log(u2);
console.log(u3);
u1 = u2;
console.log("---------------")
console.log(u1);
console.log(u2);
console.log(u3);


let user = {
    name: "Tom",
    age: 30,
    city: 'LA',
    isActive: true
}


console.log(user.name)
console.log(user["name"])


let user2 = {
    name: "Naveen",
    age: 32,
    city: 'LA',
    isActive: true
}

let user3 = {
    name: "Kevin",
    age: 31,
    city: 'LA',
    isActive: true
}

user = user2

console.log(user)
console.log(user2)
console.log(user3)

// for of loops

let a = {
    name: "Kevin",
    age: 31,
    city: 'LA',
    isActive: true

}
//using for in 
for (let c in a) {
    console.log(a[c])
}
//using for of 
for (let b of Object.values(a)) {
    console.log(b)
}
//using for of for index key
for (let key of Object.keys(a)) {
    console.log(key);
}

let userInformatio = {
    name: "Naveen",
    age: 34,
    Designation: "SDET III",
    organization: "7-Eleven"

}

for (let [key, value] of Object.entries(userInformatio)) {
    console.log(key, value);

}
