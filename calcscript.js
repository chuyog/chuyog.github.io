// Variables are like little boxes where you can store data.
// Rules for naming them:
// 1. Must start with a letter, $ , or _
// 2. After the first letter, you can use letters, numbers, $ or _
// 3. Can't use reserved words like "var", "if", "while", etc.
// 4. Case matters: "apple" and "Apple" are different
// 5. Each variable should have a unique name in the same place
// 6. Use names that make sense! (camelCase is popular in JS)

numberOfStudents = 18; 
console.log(numberOfStudents);

var numberOfBooks = 3; 
console.log(numberOfBooks);

let numberOfAs = 16; 
console.log(numberOfAs);

{
  let y = 15;            
  const PI = 3.14159265; 


  console.log("Inside the block: y =", y, "PI =", PI);
}

 
// Pythagoras theorem: a^2 + b^2 = c^2
let a = 3;
let b = 4;
let c = Math.sqrt(a**2 + b**2); // ** means "raised to the power of"
console.log(`The hypotenuse c is ${c}`);

let studentCount = 25; 
