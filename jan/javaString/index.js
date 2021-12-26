// printing out using log method
console.log("Hadi ");
// var
let x = 3;
let str = "Berlin";
let old = true;
// ternary condition ? ex if true : ex if false
let kid = 18;
kid > 16
  ? console.log("Yay I can Drive")
  : console.log("No My Mom will drive me");
// $ nodemon index.js
// $ node index.js
// typeof
console.log(typeof x);
console.log(typeof old);
console.log(typeof str);
// length
let firstNa = "Hadi";
console.log(firstNa.length);
console.log(firstNa[0]);
let something = 1231;
something = 4567;
console.log(something);
const fatherName = "Wii";
console.log(fatherName);
// global var
var global = "Hi I am global"; // hoisted
// scope
{
  let local = 22;
  global = "Hi";
  var localGlob = "Hi It's me";
}
console.log(localGlob);
print("Hadi");

// function declaration
// hoisted
function print(xxx) {
  console.log(xxx);
}
// function call
print("Hadi");
print(22);
console.log(lastName);
var lastName = "Nsreeny"; // hoisted
console.log(lastName);
function sum(x, y) {
  let z = 0;
  z = x + y;
  return z;
}

console.log(sum(2, 3));
let sumRe = sum(2, 44);
console.log(sumRe);

// ----- option 1
console.log(5);
// ----- option 2
let num = 5;
console.log(num);
// ----- option 3
const a = 2;
const b = 3;
console.log(a + b);
// ----- option 4
console.log(3 - 2 - 4 + 2 + 6);

// substring
let originalString = "Hi My Name is Hadi, I'm 31 y.";
print(originalString.length);
let str1 = originalString.substring(5);
console.log(str1);
let str2 = originalString.substring(6, 10);
console.log(str2);
// toUpperCase
let str3 = originalString.toUpperCase();
console.log(str3);
// toLowerCase
let str4 = originalString.toLowerCase();
console.log(str4);
let firstName = "hAdI";
// Hadi
let firstChr = firstName[0].toUpperCase();
console.log(firstChr);
let restChr = firstName.substring(1).toLowerCase();
console.log(restChr);
let FinalFirstName = firstChr + restChr;
console.log(FinalFirstName);

let shortForm =
  firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
console.log(shortForm);

// shortForm = H + adi
// comment one line

/* 
THis is many lines
comment
*/

// camelCase vs snake_case
let longStr = "Hi this is me Hi, I am Hadi, I live in Berlin";

// includes
let text = longStr.includes("Is");
let text2 = longStr.includes("@");
console.log(text);
console.log(text2);

//
let partOfStr = longStr.substring(4, 7);
console.log(partOfStr);

// 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let strExOne = "I can walk in the park all day!";
let shortStrOne = strExOne.substring(18, 22);
console.log(shortStrOne);
//  2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let strExTwo = "Hello World";
console.log(strExTwo.toUpperCase());
//  3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let strExThree = "Earthlings";
console.log(strExThree.toLowerCase());
//  4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
let Js = "JavaScript";
console.log(Js.substring(3, 6));

//  5. Check if the sentence “nice shoes” contains the letter l.
let strExFive = "nice shoes";
let lIsThere = strExFive.includes("l");
console.log(lIsThere);
//  6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
let strExSix = "JavaScript";
let strExSix_1 = "JJavaScriptJ";

//let ModStr = "J" + strExSix + "J";
console.log("J" + strExSix + "J");
//let ModStr = strExSix[0] + strExSix + strExSix[0];
let firstStrExSix = strExSix[0];
console.log(firstStrExSix + strExSix + firstStrExSix);

// .length - num
let longText = "This is a long text";
let subStr = longText.substring(longText.length - 4);
console.log(subStr);

// slice
let sliceStr = longText.slice(5);
console.log(sliceStr);

// ` `
let firstUserName = "Zain";
let lastUserName = "something";
let add = "xxx str, 1234 Berlin";
// console.log(
//   "Hi I am" +
//     firstUserName +
//     ",I live in " +
//     add +
//     ". My last" + " " + "name " +
//     lastUserName +
//     "."
// );
console.log(
  `Hi I am ${firstUserName}, I live in ${add}. My last name is ${lastUserName}.`
);

var globalVar = "This is global";
console.log(globalVar);
globalVar = "This is global plus";

function sub(x, y) {
  let local = "This is local";
  console.log(local);
  console.log(globalVar);
  globalVar = "This is global plus ++";
  return x - y;
}
console.log(sub(10, 4));

// ++ += -- -=
let num1 = 1;
//num1 = num1 + 1; == num1 += 1;
num1 += 333;
console.log(num1);
let num2 = 2;
//num2 = num2 - 1; == num2 -= 1;
num2 -= 1;
console.log(num2);
// Increment
let w = 10;
w++;
++w;
console.log(w);
// decrement
let q = 10;
q--;
--q;
console.log(q);
// 7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let lastThree = Js.substring(Js.length - 3);
let newJsStr = lastThree + Js + lastThree;
console.log(newJsStr);
// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.
let newStr = "I will go to Java";
let upperNewStr = newStr.toUpperCase();
console.log(upperNewStr);
console.log(upperNewStr.includes("Java"));
// something for fun :)
upperNewStr.includes("Java") ? console.log("Nice") : console.log("Oh noo");

console.log(11 == 12 ? "cool" : "Not cool");
// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let modJsStr = Js.substring(1) + Js[0];
console.log(modJsStr);
let firstJsChr = Js[0];
// JavaScript
let lastJsChr = Js[Js.length - 1];
let midJsStr = Js.substring(1, Js.length - 1);
let newLongJsStr = lastJsChr + midJsStr + firstJsChr;
console.log(newLongJsStr);
// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
let myName = "Nancy";
let myAdd = "Berlin";
let myJob = "Teacher";
let aboutMeStr = `My name is ${myName}. I live in ${myAdd}, and I am a ${myJob}.`;
console.log(aboutMeStr);

//11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let foxStr = "the quick brown fox";
let foxUpper = foxStr[0].toUpperCase() + foxStr.substring(1);
console.log(foxUpper);

console.log(x);
var x;
x = true;
//x= "";
//x = null;
//x = 199;
//x = undefined;
console.log(typeof x);
sum(3, 4);
sum(3900, 334);

function sum(x, y) {
  return x + y;
}
let bool = " ";
bool ? console.log("cool") : console.log("Not cool");

// bracket notation [0]
let str = "Hadi";
console.log(str[str.length - 1]);
// .trim()
let LongStr = "    Hi I am Hadi      ";
console.log(LongStr.trim());

function display(str) {
  console.log(str);
}
display("Zain");

// Numbers
let y = 3;
let w = 44;
// + - * /
console.log(y % w);
// (123) (23.4)
let int1 = "122";
let int2 = "1.5";
console.log(int1 + " " + int2);
// isNaN
isNaN(int1) ? console.log("Yeah it's not a number") : console.log("Nope sorry");
let intSum = int1 + int2;
console.log(intSum);
let newNum = parseInt(int1, 10);
console.log(newNum);
intSum = newNum + int2;
console.log(intSum);
let newFloat = parseFloat(int2);
console.log(newFloat);

//1. Create two variables.
// One variable should contain a string value and
//the other should contain a number. Concatenate the string and the number.
let str1 = "This is a string";
let int101 = 22;
let longStr1 = str1 + int101;
console.log(longStr1);
//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
//(33, 40, 2,1,22)

let numb = 22;
let numX = numb % 2;
console.log(numX);
console.log(numX == 0 ? `${numb} is even` : `${numb} is odd`);

function oddOrEven(num) {
  return num % 2 == 0 ? "even" : "odd";
}
console.log(oddOrEven(33));
console.log(oddOrEven(4));
console.log(oddOrEven(44));

// * + - /
let a = 3;
let b = 2;
let sum1 = a + b;
let div = a / b;
let mul = a * b;
let sub = a - b;
console.log(sum1, div, mul, sub);
// ++ --
++a;
b--;
// **
let power = 2 ** 2;
console.log(power);
// Math.floor()
// 3.33
let float1 = 1.8;
let realInt = Math.floor(float1);
console.log(realInt);
// Math.ceil()
let realInt2 = Math.ceil(float1);
console.log(realInt2);
// Math.max()
console.log(Math.max(2, 33, 434, 643, 123211, -212));
// Math.min()
console.log(Math.min(2, 33, 434, 643, 123211, -212));
// Create a variable with the value of “123”. Convert it to a number.
let strToInt = "123";
// console.log(parseInt(strToInt.10));
console.log(parseInt(strToInt));
// Create a variable with the value of “130.7". Convert it to a number.
let strToFloat = "130.7";
console.log(parseFloat(strToFloat));
// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let isDog = "";
console.log(isDog ? "pat, pat" : "find me a dog to pat!");

let x, y, z;
console.log(x);
x = 4;
y = 5;
z = x + y;
console.log(Math.max(3, 5, 2, x, y, 100));
console.log(Math.min(x, y, z));
let str = "20.4";
let strIntoNum = parseInt(str, 10); // always use pls
// 0,1,2,3,4,5,6,7,8,9 ->10
// 0,1 ->2
// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F ->16
console.log("parseInt", strIntoNum);
let strIntoNum1 = +str; // never use
console.log("+str", strIntoNum1);
let strIntoNum2 = str * 1; // we don't use
console.log(" * 1= ", strIntoNum2);
let strIntFloat = parseFloat(str);
// 1005.44
console.log("parseFloat", strIntFloat);
console.log(((x + y) / (z + 2.44)) * 29 + x);
//
// Number + String
let d, f, r;
d = "H";
f = 33;
console.log(d + f); // H33

// Number + Boolean
r = true; // true = 1,  false =  0
console.log(f + r); // 33 + 1 = 34
// string + string
let str1 = "Hi";
let str2 = " I am Hadi";
console.log(str1 + str2);
//  ++ --
let a = 3;
console.log(a++);
console.log(a);

// --
let q = 3;
console.log(q--);
console.log(q);
//console.log(a);
// typeof
console.log(typeof str1); // sti
console.log(typeof x);
console.log(typeof console.log);
console.log(typeof Math);
// 3.444444444444
// (0.1*0.2)
let floatNum1 = 0.1;
let floatNum2 = 0.2;
let result = floatNum1 * floatNum2;
console.log(result);
// toFixed()
let num = 3;
console.log(result.toFixed(num));

// 1
console.log(Math.min(-1, 0, 1, 2, 3, 4));
//2
console.log(Math.max(-1, 0, 1, 2, 3, 4));

// 3
// Round up
function roundUp(num) {
  let result = Math.ceil(num);
  console.log(result);
}
roundUp(3321.32321);
roundUp(326.76);
roundUp(43.342);
// 4
// Round down
function roundDown(num) {
  let result = Math.floor(num);
  console.log(result);
}
roundDown(3321.32321);
roundDown(326.76);
roundDown(43.342);
// concatenation
// 1
let introSent = "Hi, my name is Nancy";
let age = 25;
console.log(introSent + " " + age);
console.log(`${introSent} ${age}`);
// The `+` operator is concatenating the string and the number.

// 2
let integer = "1005";
console.log(parseInt(integer));
let float = "10.05";
console.log(parseFloat(float));

// Math.random()
// 0 - 100 -> 0 - 99
//
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.random());
// ==
// 1 == 1 -> true
// 1 != 44 -> true

console.log(1 == 1);
console.log(1 != 2);
console.log(1 == 1 && 1 == 10);
// and &&
// true && false => false
// false && true => false
// false && false => false
// true && true => true
//  or ||
// true || false => true
// false || true => true
// false || false => false
// true || true => true
console.log(1 == 20 || (1 == 1 && 1 != 292)); // false || true && true -> true

let bool1, bool2, boo3;
bool1 = true;
bool2 = false;
console.log(bool1 && bool2 ? "cool" : "not cool");
console.log(bool1 || bool2 ? "cool" : "not cool");
// === ==
let numInStr = "10";
let numb = 10;
console.log(numInStr == numb ? "cool" : "not cool"); //
console.log(numInStr === numb ? "cool" : "not cool"); //
// 1 = true
// 0 = false
// ""= false
// " " , "H" = true
// true = true
// false = false
console.log(3.14 ? "yeah it's true" : "Nooooo");
// Create a program that prints a random integer from 1 - 6.
console.log(Math.floor(Math.random() * 6) + 1);

//
// 0 1 bit
// 0000 4 bit
// 0001
// 32 bit
//0000 0000 0000 0000 0000 0000 0000
