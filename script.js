//Exercise 1:
let numKids = 1;
let partner = 'mike';
let geoLocation = 'bangkok';
let jobTitle = 'Front End Developer';

console.log('You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partner + ' with ' + numKids + ' kids');

// var numKids = 5;
// var partner = 'David Beckham';
// var geoLocation = 'Costa Rica';
// var jobTitle = 'web developer';
// ​
// var future = 'You will be a ' + jobTitle + ' in ' 
// + geoLocation + ', and married to ' + partner + ' '
// + ' with ' + numKids + ' kids.';
// console.log(future);

//Exercise 2:
let birthYear = 1992;
let futureYear = 2023;
let myAge = futureYear - birthYear;

console.log('I will be ' + myAge + ' in ' + futureYear);

// var birthYear = 1984;
// var futureYear  = 2012;
// var age  = futureYear - birthYear;
// console.log('I will be either ' + age + ' or ' 
// + (age - 1));

//Exercise 3:

let age = 31;
let maxAge = 85;
let numPerDay = 500;
let totalNeeded = numPerDay * ((maxAge - age)*365);
console.log('You will need ' + totalNeeded.toLocaleString() + ' bath to last you until the ripe old age of ' + maxAge);

// var age = 28;
// var maxAge = 100;
// var numPerDay = 2;
// var totalNeeded = (numPerDay * 365)*(maxAge - age);
// var message = 'You will need ' + totalNeeded + 
// ' cups of tea to last you until the ripe old age 
// of ' + maxAge;
// console.log(message);