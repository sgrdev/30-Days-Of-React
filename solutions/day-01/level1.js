//1 Declare an empty array;

let emptyArray = [];

//2 Declare an array with more than 5 number of elements

let numberArray = [1, 2, 100, 500, 5, 6, 7];

//3 Find the length of your array

let arrayLength = numberArray.length;

//4 Get the first item, the middle item and the last item of the array

let firstItem = numberArray[0];

let middleItem = numberArray[Math.floor(arrayLength / 2)];

let lastItem = numberArray[arrayLength - 1];

//5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, 2, '3', 'apple', true, false];

//6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

//7 Print the array using console.log()
console.log(mixedDataTypes, itCompanies);

//8 Print the number of companies in the array
console.log(itCompanies.length);

//9 Print the first company, middle and last company

let firstCompany = itCompanies[0];

let middleIndex = Math.floor(itCompanies.length / 2);
let middleCompany = itCompanies[middleIndex];

let lastCompany = itCompanies[itCompanies.length - 1];

//10 Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

//11 Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  let changeUppercase = itCompanies[i].toUpperCase();
  console.log(changeUppercase);
}

//12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = `${itCompanies.slice(0, -1)} and ${
  itCompanies[itCompanies.length - 1]
} are big IT companies`;
console.log(sentence);

//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let elementToCompare = 'Uber';
if (itCompanies.includes(elementToCompare)) {
  console.log(elementToCompare);
} else {
  console.log(`company doesn't exits`);
}

//14 Filter out companies which have more than one 'o' without the filter method
let filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  let company = itCompanies[i];

  let count = 0;

  //count the number of 'o' in the company name
  for (let j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === 'o') {
      count++;
    }
  }
  if (count <= 1) {
    filteredCompanies.push(company);
  }
}
console.log(filteredCompanies);

//15 Sort the array using sort() method
console.log(itCompanies.sort());

//16 Reverse the array using reverse() method
console.log(itCompanies.reverse());

//17 Slice out the first 3 companies from the array
let firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

//18 Slice out the last 3 companies from the array
let lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);

//19 Slice out the middle IT company or companies from the array
let middleCompanyIndex = Math.floor(itCompanies.length / 2);
let middleCompanies;

if (itCompanies.length % 2 === 0) {
  middleCompanies = itCompanies.slice(
    middleCompanyIndex - 1,
    middleCompanyIndex + 1
  );
} else {
  middleCompanies = itCompanies.slice(
    middleCompanyIndex,
    middleCompanyIndex + 1
  );
}
console.log(middleCompanies);

//20 Remove the first IT company from the array
let firstIndexRemove = itCompanies.splice(0, 1);
console.log(firstIndexRemove);

//21 Remove the middle IT company or companies from the array
let middleIndexRemove;
let midCompanyIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  middleIndexRemove = itCompanies.splice(middleCompanyIndex - 1, 2);
} else {
  middleIndexRemove = itCompanies.splice(middleCompanyIndex, 1);
}
console.log(middleIndexRemove);

//22 Remove the last IT company from the array
let lastIndexRemove = itCompanies.splice(itCompanies.length - 1, 1);
console.log(lastIndexRemove);

//23 Remove all IT companies
let allIndexRemove = itCompanies.splice(0, itCompanies.length);
console.log(allIndexRemove);
console.log(itCompanies);
