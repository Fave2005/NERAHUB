/*
console.log("hello guys");

// var name = "favour";
// console.log(name);

const name = "favour"
console.log(name);

const student_name = "favourrrrr";
console.log(student_name);

const student_num = 23;
console.log(student_num);

const done_well = false
console.log(typeof done_well);

console.log(2 + 2);

const first_number = 8

console.log(first_number + 8)

const num_one = 4;
const num_two = 5;

console.log(num_one + num_two);

const num_three = 4;
const num_four = 4;
const thesame = num_three === num_four;
console.log("log for same number: ", thesame);

const same_again = num_three === num_four
console.log("log for same again number: ", same_again)

const num_five = 7;
const num_six = 10;

const greater_than = num_five <= num_six
console.log(greater_than)

// working with Arrays

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = ["a", "b", "c", "d", "e"];
const array3 = [...array1, ...array2];

console.log("the first array: ", array1)

const new_array2 = array2.pop();
const shift_array2 = array2.unshift();
console.log("the popped ", new_array2);
console.log("the popped array ", array2);
console.log("the shifted array ", array2);
console.log("the unshifted array ", array2);

const first_slot = array1[0];
console.log("the first slot : ", first_slot)
console.log("the first array: ", array1)



const eleven_slot = array1[11]
console.log("the eleventh slot: ", eleven_slot)


// objects in javascript

const student = {
    stdnt_name : "favour",
    stdnt_class : "sss3",
    stdnt_subject : "chemistry",
    stdnt_age : "25",
};

console.log("student data : ", student);
*/

/*
const num1 = parseFloat(prompt("Enter the first number"));
const num2 = parseFloat(prompt("Enter the second number"));
//const num3 = 4;
//const num4 = 5;

console.log("the num 1 :", num1);
console.log("the num 2 :", num2);

const result = num1 + num2;
console.log("the result = ", result);

const addition = num1 + num2;
const subtract = num1 - num2;
const multiply = num1 * num2;
const division = num1 / num2;
console.log("the result =", addition);
console.log('the addition result = ${addition}');
*/

// const line1 = prompt("Enter line one");
// const line2 = parseInt(prompt("Enter line one"));

// const sentence = `${line1}\nHe is ${line2} years old`;

// console.log(sentence);

const animal = "dog";

// if (animal === "dog") {
//     console.log("yes it is a dog");
// }

// if (animal === "cat") {
//     console.log("yes it is a dog");
// } else {
//     console.log("it is not a cat");
// }

// const firstNumber = prompt("Enter first number");
// const secondNumber = prompt("Enter second number");

// if (firstNumber > 20) {
//     console.log("yes it is greater");
// } else {
//     console.log("not greater")
// }

// if (secondNumber < firstNumber) {
//     console.log("yes it is less than");
// } else {
//     console.log("not less");
// }

// if (firstNumber % 2 === 0) {
//     console.log("this is an even number");
// } else if (secondNumber > firstNumber) {
//     console.log("this is a prime number");
// } else if (firstNumber >= 50) {
//     console.log("it is equal or graeter than 50");
// } else {
//     console.log("no condition is true");
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is an even number`);
//     } else {
//         console.log(`${i} is an odd number`);
//     }
// }

// let count = 0;
// do {
//     console.log("count is ", +count);
//     count++;
// } while (count < 5)
// const fruit = "3";

// switch(fruit) {
//     case  "apple":
//         console.log("this is an apple");

//         break;
//     case "watermelon":
//         console.log("this is a watermelon");
//         break ;

//     default:
//         console.log("I don't think fruit matches");

//         break;
// }
 
//FUNCTIONS 

// function add(a, b, c) {
//     const result = a + b ;
//     console.log("adddition result =", result);
// }

// add(5, 6,);
// add(56, 61);
// add(50, 6);
// add(10, 91);
// add(58, 66);

// function welcome_message() {
//     console.log("welcome to Javascript function")
// }

// welcome_message();

// function area(a, b,) {
//     const result = (a * b ) / 2;
//     console.log("addition result ", result);
//     // return result;
// }

// // console.log("the result of the fxn is", area(5, 6,));

// area(5, 6,);
// area(56, 61);
// area(50, 6);

// function calculate(a, b, operation) {
//     const cacl_expression = `${a} ${operation} ${b}`
//     const result = eval(cacl_expression)

//     console.log(`${cacl_expression} = `, result)
// }

// calculate(5, 3, "+");
// calculate(5, 3, "-");
// calculate(5, 3, "*");

// const add2 = (a, b) => a + b;
// console.log(add2(7, 7));

// add2(7, 7);

// const add3 = (a, b) => a + b;
// console.log(add3(3, 3));

// add3(3, 3);

// const addme = (a, b) => a + b;

// const num1 = parseFloat(prompt("Enter the first number"));
// const num2 = parseFloat(prompt("Enter the second number"));

// console.log("input sum =", addme(num1, num2));

// Promises

// let count = 5 + 6 === 11;

// let countValue = new Promise(function (resolve, reject){
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value.");
//     }
// });

// console.log("the count value =", countValue);

// let countValue2 = new Promise(function (resolve, reject) {
//     resolve("This is the fulfilled promise");
// })

// console.log('without the dot then', countValue2);

// countValue2.then((myresult) => {
//     console.log("the new result ", myresult);
// })

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {

        setTimeout(() =>{
            // const data = { message: 3 };
            if (2 + 2 === 4) {
                resolve({
                    name: "Ian",
                    location: "Atlanta",
                    age: 27,
                    savings: 7000,
                    votaed: true,
                    message: 3,
                });
            } else {
                reject({
                    success: false,
                    message: "the api sample failed",
                });
            }
        }, 2000);
    });
}

async function fetchmydata() {
    try {
        console.log("Fetching data .....");
        const response = await fetchDataFromAPI();
        console.log("the bare response : ", response);
        const savings = response.savings;
        console.log("the savings : ", savings);
    } catch (error) {
        console.log("the new error my data from trycatch", error);
        
    }
}

fetchmydata()
    .then((result) => {
        console.log("the result = > ", result);
        const sum = result.age + result.message

        console.log("the sum ", sum);
    })
    .catch((error) => {
      console.log("the then from try catch", error);

});




 






