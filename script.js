//Exercise 1:
let numKids = 1;
let partner = 'mike';
let geoLocation = 'bangkok';
let jobTitle = 'Front End Developer';

console.log('You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partner + ' with ' + numKids + ' kids');

//Exercise 2:
let birthYear = 1992;
let futureYear = 2023;
let myAge = futureYear - birthYear;

console.log('I will be ' + myAge + ' in ' + futureYear);

//Exercise 3:

let age = 31;
let maxAge = 85;
let numPerDay = 500;
let totalNeeded = numPerDay * ((maxAge - age)*365);
console.log('You will need ' + totalNeeded.toLocaleString() + ' bath to last you until the ripe old age of ' + maxAge);
