
const names = ["Zain", "Nancy", "Olga"];

// .length
// to get the number of elements in an array
console.log(names.length);
// .length -1
// to access the last item
console.log(names[names.length - 1]);

let cityName = [];
console.log(cityName.length);
cityName[0] = "Paris";
cityName[1] = "Berlin";
cityName[2] = "Dubai";

console.log(cityName);

// .push()
// add an item
cityName.push("Hi");
cityName.push("Hi");
cityName.push("Cool");
console.log(cityName);
// .pop()
// remove an item
cityName.pop();
cityName.pop();
let removedItem = cityName.pop();

console.log(cityName);
console.log(removedItem);

// .unshift()
// add an item to the beginning
cityName.unshift("🍀");
console.log(cityName);
//  .shift()
// remove an item to the beginning
let removeEle = cityName.shift();
console.log(cityName);
console.log(removeEle);
//const names = ["Zain", "Nancy", "Olga"];
// .indexOf()
// Find the index of an item
console.log(names.indexOf("Nancy"));
let pos = names.indexOf("Nancy");
// console.log(typeof pos);
let n = 0;
// // .splice()
// // remove an item by the index number
let removedItemFromIndex = names.splice(pos, n);
console.log(names);
console.log(removedItemFromIndex);
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
let str = "Hi this is me 😎";
// .split()
// divide a string into an array
let newArr = str.split(" ");
console.log(newArr);
// .join()
// create a string from an array
let newStr = newArr.join(" ");
console.log(newStr);

// .concat()
// merge two (or more) arrays
let arr1 = [1, 233, 55];
let arr2 = [33, 3, 55];
let arr3 = arr1.concat(arr2, [22, 4, 555, 44]);
console.log(arr3);

const add = ["Berlin", "Paris", "Pra", "Malaga", "Hi"];
let fakeCopy = add;
console.log(fakeCopy);
fakeCopy.push("Dubai");
console.log(add);
fakeCopy.pop();
console.log(add);
// .slice()
// to make a shallow copy
// [ 'Berlin', 'Paris', 'Pra', 'Malaga', 'Hi' ]
let shallowCopy = add.slice(1, 5); // 4
console.log(add.slice(1, 3));
console.log(shallowCopy);
shallowCopy.push("London");
console.log(shallowCopy);
console.log(add);

const smileys = ["😎", "🤓", "🥳"];
let otherArr = smileys.slice(0, 2); // 2
console.log(smileys);
console.log(otherArr);
// using a negative number in slice
let otherArr2 = smileys.slice(-2);
console.log(otherArr2);
// Create a program with two variables: “item” and “times”.
// Create a program that repeats the “item” as many times as specified by “times”.
// The first variable (“item”) is the item that needs repeating while the second argument (“times”) is the number of times the item is to be repeated.
// Print the result in an array. Examples:
// (“example”, 3) ➞ [“example”, “example”, “example”]

const rep = (item, times) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(item);
  }
  return result;
};
console.log(rep("Hadi", 3));

// The Greater Numbers.
//  Create a function which accepts two arguments:
// the first argument being an array of numbers,
//and the second argument being a number.
// The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10
const findGreatest = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result.join(", ");
};

console.log(findGreatest([3, 4, 12, 44], 3));

let originalArray = [
  "JavaScript",
  "will",
  "turn",
  "your",
  "dreams",
  "into",
  "Reality",
];
let shallowCopyOg = originalArray.slice(-1); //

console.log(shallowCopyOg);
console.log(originalArray);

// Dictionary.
//  Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
// dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
// dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []

const dictionary = (str, arr) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].toLowerCase();

    if (currentValue.includes(userInput)) {
      result.push(currentValue);
    }
  }
  return result;
};
console.log(dictionary("bo", ["cool", "Bool", "nool", "doOOol"]));
console.log(dictionary("bolll", ["cool", "nool", "doOOol"]));
// other way to do it :)
const dictionary2 = (str, arr) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].toLowerCase();
    let shortStr = currentValue.substring(0, userInput.length);
    if (shortStr == userInput) {
      result.push(currentValue);
    }
  }
  return result;
};

console.log(dictionary2("bo", ["cool", "Bool", "nool", "doOOol"])); // [ 'bool' ]
console.log(dictionary2("bo", ["ooBol", "nool", "doOOol"])); // empty array


const arr1 = []; // 1st way
arr1.push("Hi");
console.log(arr1);
const arr2 = ["Good", "Day"];

// new Array
const arr3 = new Array();
arr3.push("cool");
console.log(arr3);
//.of()
let newArr = Array.of(1, 44, 55, 6);
console.log(newArr);
// .sort()
// to sort the elements in an array
// will use the UTF-16 code
let alpha = ["c", "b", "a", "A", "1", "$"];
let newSortedAlpha = alpha.sort();
console.log(newSortedAlpha);
// .reverse()
// to reverse an array aka first is last and last is first
let crazyArr = [3, 55, 2];
let crazyArrRe = crazyArr.reverse();
console.log(crazyArrRe);
let newCrazy = ["A", "B", "c", "D"];
console.log(newCrazy.reverse());
console.log(typeof newCrazy);
// .isArray()
// true or false
let bool = Array.isArray([]);
console.log(bool);
// .lastIndexOf()
// will start searching backwards
// -1 means nothing been found
let arr4 = ["Hi", "I", "you", "you", "i"];
console.log(arr4.lastIndexOf("Hadi"));
console.log(arr4.lastIndexOf("you")); // 3
console.log(arr4.indexOf("you")); // 2

// .fill()
// (what,from,to) => (0,2,3)
let arr5 = [22, 34, 6, 7, 4, 4, 3];
// let newArr5 = arr5.fill(101, 1,4);
let newArr5 = arr5.fill(101, 3);
console.log(newArr5);
console.log(arr5);
// do
let counter = 1000;
do {
  console.log(`counter is now at ${counter}`);
  //arr5.push("Hi");
  counter++;
} while (counter <= 10 && userLog);

// while
let loopOne = 0;
while (loopOne < 5) {
  loopOne++;
  console.log(loopOne);
}
//console.log(loopOne);
// for(let i =0;i<10;){
//     //do things
//     i++
// }
//console.log(loopOne);

// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4

const findVowels = (str) => {
  let counter = 0;
  let vowelArr = ["a", "e", "o", "i", "u"];
  let newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < vowelArr.length; j++) {
      if (newStr[i].includes(vowelArr[j])) {
        counter++;
      }
    }
  }
  return counter;
};
console.log(findVowels("Hi this is nice party, will be"));

const findVowels2 = (str) => {
  let currentValue;
  let counter = 0;
  let toLowStr = str.toLowerCase();
  for (let i = 0; i < toLowStr.length; i++) {
    currentValue = toLowStr[i];
    if (
      currentValue == "i" ||
      currentValue == "a" ||
      currentValue == "e" ||
      currentValue == "o" ||
      currentValue == "u"
    ) {
      counter++;
    }
  }
  return counter;
};

const findVowels3 = (str) => {
  let counter = 0;
  let strToArr = str.toLowerCase().split("");
  for (let i = 0; i < strToArr.length; i++) {
    switch (strToArr[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        counter++;
        break;
    }
  }
  return `You had ${counter} Vowels`;
};
console.log(findVowels3("Hi this is cool"));
// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

function cleanUp(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(cleanUp([5, 5, 15, 20, 25, 5, 5, 15]));

function cleanUp2(arr) {
  //  for (i = 0; i < arr.length; i++) {
  //     // if (arr[i] === arr[i + 1]) {
  //     //   // still fixing the problem, will update soon
  //     // }
  //
}
console.log(cleanUp2([5, 5, 15, 20, 25, 5, 5, 15]));

// SumOfNumbers.

// Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

const sumOfNumbers = (arr) => {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }
  return `The sum of that arr is ${sum}, the product also is ${product}`;
};

console.log(sumOfNumbers([3, 4, 4, 6]));
// Add Up.

// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:

// sumIntFrom1ToN(4) ➞ 10 sumIntFrom1ToN(13) ➞ 91 sumIntFrom1ToN(600) ➞ 180300

const sumIntFrom1ToN = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumIntFrom1ToN(7));
// String Check.

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:

// isStrStartOfWord("bu", "button") ➞ true isStrStartOfWord("tri", "triplet") ➞ true isStrStartOfWord("beau", "pastry") ➞ false

const isStrStartOfWord = (str, word) => {
  let lowStr = str.toLowerCase();
  let lowWord = word.toLowerCase();
  return lowWord.substring(0, lowStr.length) == lowStr;
};
console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("bu", "ttobun"));
// Pie.

// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets. Examples:
// isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

// isEqualSlices(8, 3, 2) ➞ true

// isEqualSlices(8, 3, 3) ➞ false

// isEqualSlices(24, 12, 2) ➞ true

const isEqualSlices = (totalSlices, numOfRecipients, slicePerPerson) => {
  let neededSlices = numOfRecipients * slicePerPerson;
  return `your had ${totalSlices >= neededSlices} so good luck with that `;
};

console.log(isEqualSlices(24, 12, 2));
console.log(isEqualSlices(8, 3, 3));
// isPalindrome.

// Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

const isPalindrome = (str) => {
  let wordToArr = str.toLowerCase().split("");
  return str === wordToArr.reverse().join("");
};

console.log(isPalindrome("tarrattarrat"));

function display(str) {
    console.log(str);
  }
  // Functions declarations as values:
  // const functionName = function(parameters){ ... }
  
  const sum = function (x, y) {
    return x + y;
  };
  // const functionName = (parameters) =>{ ... }
  const print = (str) => {
    console.log(str);
  };
  sum(3, 4);
  
  // Invoke the function
  function login() {
    // some things
    halloUser();
  
    // more steps
  }
  
  function halloUser() {
    // call other function
    return `Hej, welcome back`;
  }
  
  login();
  // call stack
  
  // Never do this one 😏
  // function one() {
  //   two();
  // }
  // function two() {
  //   one();
  // }
  // one();
  
  // .map()
  
  // for(let i=0;i<Array.length;i++){
  // some code here is my Gift i and currentValue
  //}
  const names = ["Zain", "Olga", "Nancy"];
  const cities = ["Berlin", "Paris"];
  const newArr = names.map((name, i) => {
    if (name == "Nancy") {
      console.log("I don't Like you");
    }
    console.log(`this ${name} has index ${i}`);
  });
  // Array.map( ()=>{})
  const newCity = cities.map((city, index) => console.log(city));
  // .reduce()
  const numArr = [1, 2, 2, 2, 2];
  const reducer = numArr.reduce((acc, cur) => acc + cur, 50);
  console.log(reducer);
  
  // break;
  // Breaking out of a loop:
  /*
  T
  TT
  TTT
  TTTT
  */
  let TBox = "";
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      if (i == j) {
        break;
      } else {
        TBox += "T";
        console.log(TBox);
      }
    }
  }
  
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 4) {
      break;
    }
  }
  // here
  
  // continue;
  // Skipping an iteration:
  
  for (let i = 1; i <= 10; i++) {
    if (i == 4) {
      continue;
    } else {
      console.log(i);
    }
  }
  const arr1 = [2, 2, 2, 3, 3, 44, 55, 44, 55];
  const cleanUp = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (result.includes(arr[i])) {
        continue;
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  };
  
  console.log(cleanUp(arr1));