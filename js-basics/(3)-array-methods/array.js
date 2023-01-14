// toString() -> convert array to string.

const fruits = ["Banana", "Apple", "Kiwi"];
console.log(fruits.toString());  // Banana, Apple, Kiwi

// join() -> joins all array elements into a string

const fruits1 = ["Apple", "Banana", "Kiwi"];
console.log(fruits1.join("-")); // Apple-Banana-Kiwi

// pop() -> removes the last element.
// push() -> adds a new element to the end.

const arr = [1,2,3,4,5];
console.log(arr.pop()); 
console.log(arr);  // [1,2,3,4]
console.log(arr.push(10));
console.log(arr);  // [1,2,3,4,10]

// shift() -> removes the first element and shifts all other element to lower index
// unshift() -> adds new element at the beginning and unshifts older elements.

const arr1 = [10, 20, 30, 40, 50];
arr1.shift();
console.log(arr1); // [20, 30, 40, 50]
arr1.unshift(85);
console.log(arr1); // [85, 20, 30, 40, 50]

// splice(start, range, values..) -> used to remove or replace existing elements in array.
//             This method modifies the original array and returns the removed elements as a new array.
// slice() -> slices out a piece of array. used to return a new array containing a portion of that array. 
//            It does not modify the original array rather returns a new array.

var arr2 = [1, 2, 3, 4, 5];
arr2.splice(2);    // [3, 4, 5]
console.log(arr2); // [1, 2]

var arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2, 10); // [2, 3]
console.log(arr3); // [1, 10, 4, 5]

var arr4 = [1, 2, 3, 4, 5];
arr4.splice(2, 2, 999, 888);  // [3, 4]
console.log(arr4); // [1, 2, 999, 888, 5]


var arr5 = [1, 2, 3, 4, 5];
console.log(arr5.slice(1, 3));  // [2, 3]  (end point -> point - 1)
console.log(arr5.slice(3));   // [4, 5]
