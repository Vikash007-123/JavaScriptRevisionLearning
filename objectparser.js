// convert object->JSOn->Seralization (marshelling)
// JSON->Object->deseralization( unMarshelling)
// will apply this concepts in API testing to validate the response

let userInformation = {
    name: "Vikash",
    age: 30,
    Designation: "SDET II",
    location: ['Bangalore', 'Karnatka'],
    address: {
        location: 'Bhartiya city',
        flat: 100,

    }
}
console.log(userInformation)
console.log(typeof userInformation)

let userInformationAsObject = JSON.stringify(userInformation);
console.log("-------------------------")
console.log(typeof userInformationAsObject)
console.log(userInformationAsObject);

//JSON->Object using parse
let parsedObject = JSON.parse(userInformationAsObject);

console.log(userInformation.name == parsedObject.name); // true
console.log(userInformation.name == userInformationAsObject.name)
console.log(JSON.stringify(userInformation) == JSON.stringify(parsedObject))
console.log(typeof userInformation, typeof parsedObject)

function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function isEqualValue(obj1, obj2, key) {
    return JSON.stringify(obj1.value1) === JSON.stringify(obj2.value2);
}

let booleanvalue = isEqual(userInformation, parsedObject)
console.log(booleanvalue)


let booleanvalue1 = isEqual(userInformation, parsedObject, "name")
console.log(booleanvalue1)
