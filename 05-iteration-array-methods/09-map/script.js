"use strict";

// Purpose: Transforms each element in an array and returns a new array with the transformed elements.
// Returns: A new array of the same length as the original.
// Use Case: When you want to apply a function to each element in an array to create a new array based on the results. 


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map((x) => x * 2);
// console.log(doubledNumbers);

// // Same with forEach

// const newnumber = [];
// numbers.forEach((x) => newnumber.push(x + 2));
// console.log(newnumber);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// // Create an array of company names

// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// // Create an array with just company and category
// // return array
// const companyInfo = companies.map((company) => {
//   return `${company.name}:${company.category}`;
// });
// console.log("Arrary:", companyInfo);

// // return array of objects
// const companyInfo2 = companies.map((company) => {
//   return {
//     name: company.name,
//     category: company.category,
//   };
// });
// console.log("Arrary of objects:", companyInfo2);

// // Create an array of objects with the name and the length of each company in years

// const companyYears = companies.map((company) => {
//   return {
//     name: company.name,
//     years: `${company.end - company.start} years`,
//   };
// });
// console.log("Arrary of objects:", companyYears);

// // Chain map methods

// const squareAndDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);
// //console.log(squareAndDouble);

// const squareAndDouble2 = numbers
//   .map(function (number) {
//     return Math.sqrt(number);
//   })
//   .map(function (sqrt) {
//     return sqrt * 2;
//   })
//   .map(function (sqrtDoubled) {
//     return sqrtDoubled * 3;
//   });
// //console.log(squareAndDouble2);

// // Chaining different methods
// const evenDouble = numbers
//   .filter((number) => number % 2 === 0)
//   .map((number) => number * 2);

// //console.log(evenDouble);
