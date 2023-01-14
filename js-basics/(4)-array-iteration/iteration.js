// for() -> it is a simple for loop.

const arr1 = [1, 2, 3, 4, 5, 6, 7];
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}  // 1 2 3 4 5 6 7

// for...of loop -> it gives us the values of array.

const arr2 = ["hello", "hi", "sahil", "ahmed"];
for(let i of arr2) {
    console.log(i);
}  // hello hi sahil ahmed

// for...in loop -> it gives the keys of array values.

const arr3 = ["a", "b", "c", "d"];
for(let i in arr3) {
    console.log(i);
}  // 0 1 2 3


// forEach() loop -> it gives the values of array.
 const arr4 = [10, 20, 30, 40, 50];
 arr4.forEach(i => {
    console.log(i);
 });  // 10 20 30 40 50


/*
 map(), filter() and reduce() methods:

 Each one will iterate over an array and perform a 
 transformation or computation. Each will return a 
 new array based on the result of the function.

 example:

 map( [corn, chicken, potato], cook ) => {
    [popcorn, chicken-burger, potato-chips]
 }

 filter( [popcorn, chicken-burger, eggs], isVegetarian ) => {
    [popcorn]
 }

 reduce( [popcorn, eggs], eat ) => {
    poop
 }
*/

// map()
const num1 = [1, 2, 3, 4, 5];
const double = num1.map(item => item * 2);
console.log(double);  // [2, 4, 6, 8, 10]

// filter()
const num2 = [1, 2, 3, 4, 5, 6];
const even = num2.filter(item => item % 2 === 0);
console.log(even);  // [2, 4, 6]

// reduce()
const num3 = [10, 20, 30, 40, 50];
const sum = num3.reduce((item, ans) => item + ans);
console.log(sum);  // 150