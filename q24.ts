// exercise 24

// Equality and Inequality with Strings 
const str1: string = "HELLO";
const str2: string = "hello";
console.log(str1 === str2); // False
console.log(str1 !== str2); // True


// Test using the lower case function
const text1: string = "HELLO World";
const text2: string = "hello world";
console.log( text1.toLowerCase() === text2); // True



//  Numerical tests involving equality and inequality greater than and less than, greater than or equal to less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2);// False
console.log(num1 >= num2); // True
console.log(num1 <= num2);// False

// Test using "and" and "or" operators
const x: number = 5;
const y: number = 10;
const z: number = 15;

console.log(x < y && y < z); // True, both conditions are true 
console.log(x < y || y > z); // True, at least one conditions is true 

console.log(x > y && y < z); // False, both conditions are false 
console.log(x > y || y > z); // False, both conditions are false

 // Test whether an item is in a array
 const fruits: string[] = ['apple' , 'banana', 'orange', 'grape'];
  
 console.log(fruits.includes('banana')); // True
 console.log(fruits.includes('kiwi')); // False

 //Test whether an item is not in a array
 const colors: string[] = ['red' , 'green', 'blue', 'yellow'];

 console.log(!colors.includes('purple')); // True
 console.log(!colors.includes('green')); // False

