// array.prototype.map()

const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); 


// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const numResult = nums.map((numElement) => {
    return numElement * 2;
})

console.log(numResult)


// array destructuring

const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'


// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// // Your code here

// const [firstTopping, secondTopping] = pizzaToppings

// console.log(firstTopping);
// console.log(secondTopping);


// Object destructuring


const person = {
    name: 'Alex',
    role: 'Software Engineer',
};

// Object destructuring:
const { name, role } = person;

console.log(name); // 'Alex'
console.log(role); // 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name); // 'Alex'
console.log(person.role); // 'Software Engineer'


// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//     make: 'Audi',
//     model: 'q5',
// };
  
// Your code here


// const { make, model } = car;

// console.log(make);
// console.log(model);


// Applying the spread operator on arrays


const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); // [1, 2, 3]


const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']


// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings)

// Applying the spread operator on objects

const originalObject = {
    foo: 'Hello',
    bar: 100,
};

// Copy the properties of originalObject:
const clonedObject = { ...originalObject };

// Update the properties of clonedObject:
clonedObject.foo = 'Goodbye';
clonedObject.bar = 0;

console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }
  


// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
    make: 'Audi',
    model: 'q5',
};
  
// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car, model: 'q7' };

console.log('Original: ', car);
console.log('clone: ', myCar)



// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here


const userProfile = {};
const propertyName = 'username';
userProfile[propertyName] = 'bobby111';

console.log(userProfile);


// Create a function that takes two parameters, noun and adjective, both with the following respective default values:

// 1. cat

// 2. white

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function describeNoun(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
}

describeNoun();   


// Convert the following if...else statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here

let pizza = 'tasty';

console.log(pizza === 'tasty' ? 'yum' : 'yuck');


// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

// const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const localLangConfig = null; 
const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);



// 2. SET WEBSITE THEME

// const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here

const userSavedTheme = null; 
const USER_THEME = userSavedTheme || 'light'; 


// Log the result
console.log('User theme setting:', USER_THEME);




// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
};
  
let cat; adventurer.cat?.age; // Your code here
  
console.log(cat);
  

