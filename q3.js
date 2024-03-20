"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let firstName = "Sana Khursheed";
//lower case
console.log("lowercase:", firstName.toLowerCase());
//upper case
console.log("uppercase:", firstName.toLocaleUpperCase());
//titlecase
console.log("titlecase:", firstName.replace(/\bw/g, c => c.toUpperCase()));
