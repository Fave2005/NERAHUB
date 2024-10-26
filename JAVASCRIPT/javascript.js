'strict mode';

/*
let js = "amazing";
console.log(40+8+23-10);

console.log("favour");

let firstName = "favour";
console.log("firstName");
let PI = 3.125;


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof "favour");
console.log(typeof 23);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// dont forget to google out more on this
console.log(typeof null);

*/

//let age = 30;
//age = 31;
//  we didnt get any error messages because it can be changed. 

//const birthYear = 1990;
// we will get an error message if you dont declear the const variable.
// birthYear = 1990;
/*

let markData = 78 / 1.68 ** 2;
console.log(markData);

const johnData = 92 / 1.95 ** 2=;
console.log(johnData);

const markHigherBMI = markData < johnData;
console.log(markHigherBMI);
*/
/*
const firstName = 'Favour';
const job = 'student';
const birthYear = 2005;
const year = 2024;

const favour = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(favour)

const favourNew = `I'm ${firstName}, a ${year -birthYear} years old ${job}!`;
console.log(favourNew);
*/

// if_else statements
/*

const age = 15;

if (age >= 18) {
    console.log('Fvaour can now start his drivers license');
} else {
    const yearsLeft = 18 - age;
    console.log(`sorry Favour can't have his drivers license. Wait another ${yearsLeft - age} :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2010) {
    century = 20;
} else {
    century;
    century = 21;
}
console.log(century);
*/

// const markData = 78 / 1.68 ** 2;
// //console.log(markData);

// const johnData = 92 / 1.95 ** 2;
// console.log(markData, johnData);

// const markHigherBMI = markData > johnData;
// if (markData > johnData) {
//     console.log(`Mark's BMI ${markData} is hihger than John's BMI ${johnData}`);
// } else {
//     const johnData = 92 / 1.95 ** 2;
//     console.log(`John's BMI ${johnData} is not higher than Mark's BMI ${markData}`)
// }

// console.log('29' / 1);

// let n = '1' + 1; //this right here gives us a number 11 as a string by andding both the numbers 1 and 1

// n = n - 1; //and from our previous lessons the value of n is 11 then we say 11 - 1 which is 10

// console.log(n);

//falsy and truthy value
//this are all falsy values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Favour'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('You should get a job');
// }

//logical operators

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('she is able to drive');
// } else {
//     console.log('let someone else should drive');
// }

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('she should drive');
// } else if (isTired) {
//     console.log('let someone else drive');
// }

// const dolphinsScore = 108 + 96 + 89;
// const koalasScore = 110 + 91 + 88;
// const dolphinTotalScore = 293 / 3;
// const koalassTotalScore = 289 / 3

// console.log(dolphinsScore , koalasScore);
// console.log(dolphinTotalScore , koalassTotalScore);

// const dolphinWinner = dolphinTotalScore > koalassTotalScore;
// if (dolphinWinner) {
//     console.log('Dolphins are the winner!');
// } 
// else {
//     console.log('Koalas are the winner!')
// }

// const dolphinsScore = (97 + 112 + 80) / 3;
// const koalasScore = (109 + 95 + 50) / 3;

// console.log(dolphinsScore , koalasScore);
// //console.log(dolphinTotalScore , koalassTotalScore);

// //const dolphin_Winner = dolphinTotalScore2 > koalassTotalScore2;
// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//     console.log('Dolphins are the winner!');
// } else if (koalasScore > dolphinsScore && koalasScore >= 100){
//     console.log('Koalas are the winner!');
// } else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
//     console.log('they both win');
// } else {
//     console.log('nobody won the game!');
// }

// The switch statement

// const day = 'tuesday'

// if (day === 'monday') {
//     console.log('plan for the week!');
// } else if (day === 'tuesday') {
//     console.log('prepare theory videos')
// }  else if (day === 'wednesday') {
//     console.log('practice theories')
// }  else if (day === 'thursday') {
//     console.log('practice some more!')
// }  else if (day === 'friday') {
//     console.log('do some challenges')
// }  else if (day === 'saturday' || day === 'sunday') {
//     console.log('enjoy the weekend!')
// }  else  {
//     console.log('not a valid day')
// }

// const age = 23;
// age >= 18 ? console.log('i like to drink wine 🍷') : console.log('i like to crink water');

// //code challenge

// // const tip = 40 / 15;
// // const totalValue = 2.7+ 40;
// // console.log(tip, totalValue);

// // if (tip) {
// //     console.log(`the bill was ${tip}, the tip was 18.3 and the total value ${totalValue}`)
// // } else {
// //     console.log('wrong calculation!')
// // }

// const tip = 275 / 15; console.log(`the bill was 275 and the tip ${tip} total value is `) 

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// function logger() {
//     console.log('my name is Favour')
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(3, 4);
// console.log(appleOrangeJuice);

// function fave(age, height) {
//     const ageHeight = `Favour is ${age} years old and is ${height} feet tall👨‍💻`;
//     return ageHeight;
// }

// const myData = fave(19, 3);
// console.log(myData);

// function calcAge1(birthYear) {
//     const age = 2024 - birthYear;
//     return age
// }

// const age1 = calcAge1(2005);
// console.log(age1);

// // Arrow function
// const calcAge2 = birthYear => 2024 - birthYear;
// const age2 = calcAge2(2005);
// console.log(age2);

// function cutFruitPieces(fruits) {
//     return fruits * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces= cutFruitPieces(apples);
//     const orangePieces= cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));



// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }

// const yearsOfRetirement = function (birthYear, firstName) {
//     const calcAge = 2024 - birthYear;
//     const retirement = 65 - calcAge;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsOfRetirement(2005, 'Favour'));



// function calcAge(birthYear) {
//     return 2024 - birthYear;
// }

// function yearsOfRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - calcAge;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsOfRetirement(2005, 'Favour'));

// const adminYear = function (admissionYear) {
//     return 2025 - adminYear;
// }

// const yearOfGraduation = function (admissionYear, firstName) {
//     const adminYear = 2025 - admissionYear;
//     const graduation = 4 - adminYear;
//     return `${firstName} is graduating in ${graduation} years time!`;
// }

// console.log(yearOfGraduation(2025, 'Favour'));

function adminYear(admissionYear) {
    return 2025 - admissionYear
}

function yearOfGraduation(admissionYear, firstName) {
    adminYear = 2025 - admissionYear;
    const graduation = 4 - adminYear;
    return `${firstName} will graduation in ${graduation} years!`;
}

console.log(yearOfGraduation(2025, 'Favour'));


// function greet(name) {
//     return 'Hello, ' + name;
// }

const greet = (name) => 'Hello' + name; 
const sayName = greet(' Favour');
console.log(sayName);

const double = (num) => num * 2;
const value = double(2);
console.log(value);

const addFive = (num) => num + 5;
const valueFive = addFive(5);
console.log(valueFive);

const calcArea = (length, width) => length * width;
const area = calcArea(5, 4);
console.log(area);

const isEven = (num) => num % 2 === 0;
const ansEven = isEven(0);
console.log(ansEven);

//Objects

















