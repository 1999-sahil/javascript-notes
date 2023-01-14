// To deal with strings JS provides many functions.

// String Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);  // 26


/*
String Parts: There are three methods for extracting a part of a string.
(1) slice(start, end)
(2) sunstring(start, end)
(3) substr(start, length)
*/


// String Slice()
// The method takes 2 parameters: start position, and end position (end not included).
let text1 = "Apple, Banana, Kiwi";
console.log(text1.slice(7, 13));   // Banana
console.log(text1.slice(7)); // Banana, Kiwi (return all from starting part)
console.log(text1.slice(-12)); // Banana, Kiwi
console.log(text1.slice(-12, -6)); // Banana


// String substring()
// it is similar to slice() but the difference is that start and end values less than 0 are treated as 0 in substring()

let str = "Apple, Banana, Kiwi";
console.log(str.substring(7, 13));  // Banana
console.log(str.substring(-12));  // Apple, Banana, Kiwi

//String substr()
// it is also similar to slice() but second parameter specifies the length of extracted part.

let str1 = "Apple, Banana, Kiwi";
console.log(str.substr(7, 5));  // Banan
console.log(str.substr(-4, 2));  // Ki

