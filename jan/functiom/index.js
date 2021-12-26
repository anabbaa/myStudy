// old school function
// function print(str) {
//   console.log(str);
// }
// Es 6
const print = (str) => {
    console.log(str);
  };
  
  const display = (str) => {
    console.log(str);
  };
  
  print("Hi");
  display("cool");
  console.log(typeof print);
  
  const sum = (x, y) => x + y;
  console.log(sum(3, 4));
  
  const isBigger = (num1, num2) => num1 < num2;
  console.log(isBigger(33, 43));
  
  const printFullWord = (firstName, age, add) =>
    console.log(`Hi ${firstName}, I am ${age}, I live in ${add}`);
  
  printFullWord("Hadi", 31, "Berlin");
  printFullWord("Zain", 22, "Paris");
  
  let isLogged = false;
  const login = () => {
    isLogged = true;
  };
  
  login();
  
  let name1 = "Hadi";
  let name2 = "Zain";
  let name3 = "Nancy";
  //                 0       1    2
  let namesArr = ["Hadi", "Zain", "Olga"];
  console.log(namesArr[2]);
  const numbers = [2, 0, 8, 3, 5, 1, 6, 4, 7, 9];
  console.log(numbers[5]);
  
  const funThingsToDo = ["eat", "sleep", "repeat"];
  // DRY
  // let i = 0;
  // console.log(funThingsToDo[i]);
  // i++;
  // console.log(funThingsToDo[i]);
  // i++;
  // console.log(funThingsToDo[i]);
  
  // loops
  // i = 0       length = 3
  for (let i = 0; i < funThingsToDo.length; i++) {
    console.log(funThingsToDo[i]);
  }
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  
  for (let i = 1; i <= 10; i++) {
    // 1 * 1 = 1
    console.log(`${i} * 1 = ${i * 1}`);
    //   console.log(i, " * 1 = ", i * 1);
  }
  const longArr = ["Hi I am, Coo to see you in.", "Hi I am"];
  console.log(longArr.length);
  const mixedArr = ["hi", 1222, true];
  console.log(typeof mixedArr);
  const chrArr = ["a", "b", "c"];
  // index
  for (let i = 0; i < chrArr.length; i++) {
    //             a.toUpperCase() => A
    console.log(chrArr[i].toUpperCase());
  }
  const names = ["hadi", "nancy"];
  // names[0][0]
  let str = "";
  for (let i = 0; i < names.length; i++) {
    //             a.toUpperCase() => A
    str = "";
    str = names[i][0].toUpperCase() + names[i].substring(1);
    console.log(str);
  }
  console.log(names[0]);
  
  //console.log(1 == 11 ? "cool" : "nooooo");
  let isSmart = false;
  if (isSmart) {
    console.log("coool");
  } else {
    console.log("nooooo");
  }
  let count = 0;
  if (22 * 3 == 299 + 3) {
    count++;
  
    console.log("You are nice");
  } else {
    count--;
    // \' \"  ignore
    // \n new line
    console.log("No that's \n this is new line");
  }
  
  // functions, if else, objects ,scopes all with {}
  // arrays, strings []
  // if conditions, method, conditions function call ()
  let a = true;
  let b = false;
  let c = 11 == 23;
  if ((a == b && c != a) || c == a) {
    console.log("Wow");
  } else {
    console.log("I don't know what you need from me 🤓 ");
  }
  //The odd/even reporter.
  // Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
  for (let i = 0; i <= 20; i++) {
    console.log(i % 2 == 0 ? `${i} is even` : `${i} is odd`);
  }
  // Write programs that produce the following outputs:
  // 100 200 300 400 500 600 700 800 900 1000
  let text = "";
  // i = i + 100
  //  i += 10
  for (let i = 100; i <= 1000; i += 100) {
    text += i + " ";
  }
  console.log(text);
  // 0 2 4 6 8 10
  text = "";
  for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      // text = text + i + " ";
      text += i + " ";
    }
  }
  text = "";
  for (let i = 0; i <= 10; i += 2) {
    text += i + " ";
  }
  console.log(text);
  console.log("--------");
  // 3 6 9 12 15
  text = "";
  for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0) {
      text += i + " ";
    }
  }
  console.log(text);
  console.log("--------");
  // 9 8 7 6 5 4 3 2 1 0
  text = "";
  for (let i = 9; i >= 0; i--) {
    text += i + " ";
  }
  console.log(text);
  console.log("--------");
  // 1 1 1 2 2 2 3 3 3 4 4 4
  text = "";
  for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
      text += i + " ";
    }
  }
  console.log(text);
  console.log("--------");
  
  // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
  text = "";
  for (let i = 1; i <= 3; i++) {
    // i =2
    for (let j = 0; j <= 4; j++) {
      // j = 0
      text += j + " ";
    }
  }
  console.log(text);
  
  for (let i = 1; i <= 10; i++) {
    // 1 * 1 = 1
    for (let j = 1; j <= 10; j++) {
      //  console.log(i + "*" + j + "=" + i*j);
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("--- new table");
    // something else
  }
  
  text = "";
  for (let i = 0; i <= 10; ) {
    text += i + " ";
    i += 2;
  }
  console.log(text);
  
  // 1 1 1 1 2 2 2 2 3 3 3 3 4 4 4 4
  
  let st = "Hi this is me 12343 334";
  let stToArr = st.split(" ");
  console.log(stToArr);
  let backToSt = stToArr.join(" ");
  console.log(backToSt);
  
  console.log("1".repeat(3));
  console.log("2".repeat(3));
  
  // Count Occurrences.
  // Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
  
  // Example:
  
  // countOccurrences("this is a string", "i") ➞ 3
  const countOccurrences = (str, chr) => {
    let strIntoArr = str.split("");
    console.log(strIntoArr);
    let count = 0;
    for (let i = 0; i < strIntoArr.length; i++) {
      // i == i
      if (strIntoArr[i] == chr) {
        count++; // 2
      }
    }
    return count;
  };
  
  console.log(countOccurrences("this is a string", "i"));
  
  console.log("-----");
  
  //1 1 1 2 2 2 3 3 3 4 4 4
  let countNum = 1;
  text = "";
  for (let i = 1; i <= 4; ) {
    text += i + " ";
    if (countNum !== 0 && countNum % 3 === 0) {
      i++;
      countNum = 0;
    }
    countNum++;
  }
  console.log(text);

  // let, const, var
let x = 10;
const personalId = 2525252; // ho
var mainAdd = "Berlin";
// strings
//         012345567910
let str = "This is a long.";
// bracket notions
console.log(str[10]);
// Escaping spatial characters ( \' , \" )
// New line (\n)
let strWithChr = "I'am   \n Hi";
console.log(strWithChr);
// numbers
let y = 5;
console.log(x + y); // 10 + 5 = 15
let something;
console.log(something);
let float; //
float = 22.5; //
// typeof
console.log(typeof float);
console.log(typeof something);
console.log(typeof console);

// booleans
let bool = true;
console.log("bool = ", bool);
let check = 12 < 20;
console.log(1 == 100);
let str1 = "Hi ";
let str2 = "I am Hadi";
console.log("check =", check);
console.log(str1 + str2);
// conditions (===, !==, >=, <=, >, <)
// =
// ==
// ==
console.log(!bool);
let bool2 = false;
console.log(1 !== 1);
let che = 1 < 12;
console.log(che);
let age = 12;
let age2 = "12";
console.log(" value check == ", age == age2); // true
console.log(" value and type check === ", age === age2); // false
// ternary Operator
console.log(true ? "I like apple 🍏" : "Hi cool I like pizza 🍕");
console.log(1868677 < 100 ? "yeahhh" : "Noooo");
let varStr1 = "😏";
let varStr2 = "🙄";
let resultStr = 1 < 55 ? varStr1 : varStr2;

console.log(resultStr);

// Js methods from Math(.max , .min  , .floor , .ceil ,random   )

console.log(Math.max(22, 3, 45, 555, -1)); // 6675
console.log(Math.min(1, 2, 455, 6675, 2, -1)); // -1
let num1 = 33.5;
console.log(Math.floor(num1)); //33
console.log(Math.ceil(num1)); //34
// -3 -2 -1 0 1 2 3
let str3 = "Hi";
let userName = "Hadi ";
let lastName = "Nsreeny     ";
console.log(str3.trim());
console.log(str3.length);
//                           floor (0.444 * 2)
let randomNum = Math.floor(Math.random() * str3.length);
console.log(str3[randomNum]); //
// Js methods for str (.trim , .length , .includes , .split , .toUpperCase , .toLowerCase)
userName = "Hadi    ";
lastName = "Nsreeny     ";
//                Nsreeny.toUpperCase()
let newLastName = lastName.trim().toUpperCase();
console.log(newLastName);
console.log(lastName);
console.log("Hi");
console.log(Math.floor(1.22) / Math.random());

let str4 = "Hi I like. I need a  🍣. I want to sleep. ";
console.log(str4.includes("ooooo"));
let strToArr = str4.split(".");
console.log(strToArr);
//console.log(userName.length);
// if
// || or, && and
if (1 == 122 || 1 == 1) {
  console.log("hi");
  x = 2 + 3;
  console.log("🍏");
} else {
  console.log("Not cool");
}

// if (con)
//{
//     // correct
// } else {
// not true
//}
console.log("Hiiii");
// functions
function funName(num1, num2) {
  // num1 = 3333; NEVER DO THAT IN YOUR LIFE 😭

  console.log(num1);
  let sumNumbers = 5555 + num1 * num2;
  return sumNumbers;
}
// [    ] {    }   ( ) <> ; : , . - _ / \ ! ? @ %  $
console.log(funName(44, 33));
// Es6 function
const functionName = () => {
  return `I am Es6 function 😉`;
};
console.log(functionName());
// array
//               0        1      2
const names = ["Zain", "Olga", "Nancy"];
console.log(names[1]);
let number1 = 1;
//
console.log(names[number1]); // console.log(names[1])
number1++; // 2
console.log(names[number1]);
const NumArr = [22, 33, 55, 6754, 2, 22, 4, 55, 677, 432, 2];
console.log(NumArr[NumArr.length - 1]);
// for loop
let bOne = 33;
let billOneTip = 1.1;
result = `bOne ${Math.floor(bOne * billOneTip)} `;
console.log(result);
