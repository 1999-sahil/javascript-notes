/*

- In JavaScript, almost "everything" is an object.
- JavaScript object is a non-primitive data-type that allows you to store 
  multiple collections of data.

*/

// JS Object Declaration.

/*
    const object_name = {
        key1: value1,
        key2: value2,
        ...
        ...
    }
*/

// JS Object Creation.

const person = {
    name: 'Sahil',
    age: 23
}
console.log(typeof person);  // object

/*
    Accessing Object Properties:
    (1) using dot notation -> objectname.key
    (2) using bracket notation -> objectname["propertyname"]
*/     


const person1 = {
    name: "Sahil Ahmed",
    age: 23
}

// using dot notation
console.log(person1.name);  // Sahil Ahmed
console.log(person1.age);  // 23

// using bracket notation
console.log(person1["name"]);  // Sahil Ahmed
console.log(person1["age"]); // 23
  

// Nested Objects

const student = {
    name: "Sahil Ahmed",
    age: 23,
    college: {
        collegeName: "ADGITM",
        location: "Delhi",
        branch: "EEE"
    }
}

console.log(student.college.collegeName);  // ADGITM
console.log(student.college.location);  // Delhi


// JS Object Methods

const fun = {
    name: 'Sam',
    greet: function() {
        console.log("Hello " + this.name + " how are you.")
    }
}
fun.greet();  // Hello Sam how are you.