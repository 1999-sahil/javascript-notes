// Javascript provide three ways to declare variables -> var, let and const.

// Before going deep let understand the concept of function-scope and block-scope.


/*
what is scope? --> Scope is basically the access of variables that is where our 
                       variable will be available to use inside code and where it will not.
*/

/*
Function-Scope: variable havinf function scope means variable will be only available
                       to use inside the function it declared, will not be accessible outside
                       of function otherwise gives error (ReferenceError).
*/

function name() {
    var myAge = 23;
    console.log(myAge);   // 23
   }
name();
console.log(myAge);    // ReferenceError

/*
Block-Scope: Block means a pair of curly brackets, a block can be anything that contains an 
            opening and closing curly bracket.

            Variable having Block-scope will only be available to use inside the block it declared, 
            will not be accessible outside the block, and will give Reference Error if we try to access.
*/

if(true) {
    let myName = "Sahil Ahmed";
    console.log(myName); // Sahil Ahmed
}
console.log(myName);   // ReferenceError

/*
var variable in JS?
Var variable is the old way to declare a variable in javascript; var variable has the function scope, 
But global scope when it is declared outside the function.
*/

// var with function-scope
function fun() {
    var name = "Sahil";
    console.log(name);   // Sahil
}
fun();
console.log(name);  // ReferenceError

//var with global-scope
var name = "Sahil";

function fun() {
    console.log(name);
}
fun();  // Sahil

if(true) {
    console.log(name);  // Sahil
}

console.log(name);  // Sahil


/*

let variable in JS?
The new version of javascript (ES6) introduces two new methods of declaring variables in javascript, 
and one method was using the let keyword to declare variables.

Let variable introduce a special feature that does not allow re-declaration of variables, if you remember, 
re-declaration was a problem in var variable but let variable solve this problem.

*/

// re-declaration is not allowed in let.
let name = "Sahil";
let name = "Ahmed";

console.log(name); // SyntaxError: redeclaration of let name

// let has block-scope
let age = 23;
if(age > 18) {
    let name = "Sahil Ahmed";
    console.log(name);  // Sahil Ahmed
}
console.log(name); // ReferenceError

/*
const variable in JS?
If we want variable to be constant througout the code then we use const.
*/

const name = "Sahil";
name = "Ahmed";  // try to update the variable.

console.log(name); // TypeError: invalid assignment to const 'name'.

// const declaration are block-scope.
if(true) {
    const name = "Sahil Ahmed"
    console.log(name);  // Sahil Ahmed
}
console.log(name); // ReferenceError



// Difference between VAR, LET and CONST

/*
   ----------------------------------------------------------------------------------------------
                                var              |       let           |         const
   ----------------------------------------------------------------------------------------------
   scope           |      function or global     |   block-scope       |    block-scope
   ----------------------------------------------------------------------------------------------
   re-declaration  |         allowed             |   not allowed       |    not allowed
   ----------------------------------------------------------------------------------------------
   updation        |         allowed             |    allowed          |    not allowed
   ----------------------------------------------------------------------------------------------
*/