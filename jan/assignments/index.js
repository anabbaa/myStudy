// One is not like the others Create a function that takes an array of numbers and return the number that’s unique.

// Examples:

// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
// unique([3, 3, 3, 7, 3, 3]) ➞ 7

const unique = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let currentValue = arr[i];
      if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
        result.push(currentValue);
      }
    }
    return result.join(", ");
  };
  console.log(unique([3, 3, 3, 7, 3, 3]));
  // The Greater Numbers Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
  
  // Examples:
  
  // findGreatest([3, 4, 5], 4) ➞ 5
  // findGreatest([10, 20, 30], 12) ➞ 20, 30
  // findGreatest([0, 10, 3], 4) ➞ 10
  
  const findGreatest = (arr, num) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (element > num) {
        result.push(element);
      }
    }
    return result.join(", ");
  };
  console.log(findGreatest([10, 20, 30], 12));
  // The longest word Create a function to find the longest word in a given string.
  
  // Example: longestWord("this is a web development course") ➞ development
  
  const longestWord = (str) => {
    let strToArr = str.split(" ");
    let longWord = "";
    for (let i = 0; i < strToArr.length; i++) {
      if (longWord.length < strToArr[i].length) {
        longWord = strToArr[i];
      }
    }
    return longWord;
  };
  
  console.log(longestWord("this is a web development course"));
  
  // Reverse Create a function to reverse a number.
  
  // Example: reverse(34532) ➞ 23543
  const reverse = (num) => {
    // let x = ""+ num;
    // let x = `${num}`
    // let x = num.toString()
    return num.toString().split("").reverse().join("");
  };
  
  console.log(reverse(34532));
  
  // Alphabetical Order Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.
  
  // Example: alphaOrder("webdev") ➞ "bdeevw"
  
  const alphaOrder = (word) => {
    // let wordToArr = word.split("");
    // let sortedArr = wordToArr.sort();
    // let joinedArr = sortedArr.join("");
    // return joinedArr
    return word.split("").sort().join("");
  };
  
  console.log(alphaOrder("webdev"));
  
  // Bonus Questions
  
  // c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
  
  // Examples:
  
  // hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
  // hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
  // hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
  
  const hackerSpeak = (str) => {
    const lowerStr = str.toLowerCase();
    const letters = lowerStr.split("");
    const hackerSpeak = [];
    for (let i = 0; i < letters.length; i++) {
      switch (letters[i]) {
        case "a":
          letters[i] = "4";
          break;
        case "e":
          letters[i] = "3";
          break;
        case "i":
          letters[i] = "1";
          break;
        case "o":
          letters[i] = "0";
          break;
        case "s":
          letters[i] = "5";
          break;
        default:
          letters[i];
      }
      hackerSpeak.push(letters[i]);
    }
    return hackerSpeak.join("");
  };
  
  // console.log(hackerSpeak("become a coder"));
  // console.log(hackerSpeak("I love map"));
  // snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
  
  // Examples:
  
  // toCamelCase("hello_world") ➞ "helloWorld"
  // toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"
  
  const toCamelCase = (str) => {
    let strToArr = str.toLowerCase().split("_");
    for (let i = 1; i < strToArr.length; i++) {
      strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1); //  W + orld = World
    }
    return strToArr.join("");
  };
  console.log(toCamelCase("hello_world"));
  console.log(toCamelCase("javascript_is_fun"));
  // Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.
  
  // Examples:
  
  // isSymmetrical(7227) ➞ true
  // isSymmetrical(12567) ➞ false
  // isSymmetrical(44444444) ➞ true
  // isSymmetrical(9939) ➞ false
  // isSymmetrical(1112111) ➞ true
  
  const isSymmetrical = (num) => {
    return num.toString() === num.toString().split("").reverse().join("");
  };
  console.log(isSymmetrical(1112111));
  console.log(isSymmetrical(1123451));
  
  let lettersArr = ["H", "a", "d", "i"];
  console.log(lettersArr.join(""));
  
  // Pig Latin Translation Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".
  // Move the first letter of each word to the end of the word. Add "ay" to the end of the word. Words starting with a vowel (A, E, I, O, U) append "way" to the end instead. Extra Practice
  
  // Preserve proper capitalization as in the examples below. Examples:
  
  // pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
  // pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
  // // pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."
  
  const pigLatin = (str) => {
    const lowerCase = str.toLowerCase().split(".").join("");
    const splitStr = lowerCase.split(" ");
  
    const vowels = ["a", "e", "i", "o", "u"];
    const pigTranslation = [];
    for (let i = 0; i < splitStr.length; i++) {
      // this
      let firstChar = splitStr[i][0]; // t
      let remainder = splitStr[i].slice(1, splitStr[i].length); // his
      if (vowels.includes(firstChar)) {
        // checking if i is truthy or falsy.
        //If falsy, then it's the first word because it's 0.
        let firstCharVowel =
          (i ? firstChar : firstChar.toUpperCase()) + remainder + "way";
        pigTranslation.push(firstCharVowel);
      } else {
        if (i === 0) {
          let firstCharRem = remainder[0];
          let wordRemainder = remainder.slice(1, remainder.length);
          remainder = firstCharRem.toUpperCase() + wordRemainder;
        }
        let firstCharConsonant = remainder + firstChar + "ay";
        pigTranslation.push(firstCharConsonant);
      }
    }
  
    return `${pigTranslation.join(" ")}.`;
  };
  
  console.log(pigLatin("this pig latin."));
  console.log(pigLatin("He told us a very exciting tale."));



console.log("____________________");
// Count characters only
// Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number
// Example :
// emptySpaces("Hi i") -> 3
const emptySpaces = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      counter++;
    }
  }
  return str.length - counter;
};
console.log(emptySpaces("Hi i"));
console.log(emptySpaces("i    Hi i"));
const emptySpacesAdvancedVersion = (str) => {
  return str.split("").filter((chr) => chr != " ").length;
};
console.log(emptySpacesAdvancedVersion("Hi  "));
console.log("____________________");
// Need more money
// Create a function that will receive a (user name , salary and his/her kids names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.
// Examples :
// salaryCalculator("Fabi", 5000, "Zain", "Uschi");
// salaryCalculator("Olga", 4055, "Zain");

const salaryCalculator = (userName, salary, ...kids) => {
  let netto, percentValue;
  switch (kids.length) {
    case 0:
      percentValue = 0.55;
      break;
    case 1:
      percentValue = 0.3;
      break;
    case 2:
      percentValue = 0.25;
      break;
    default:
      percentValue = 0.2;
  }
  netto = salary - salary * percentValue;
  return `${userName} has ${kids.length} kids, so his/her salary after taxes ${netto}`;
};
console.log(salaryCalculator("Fabi", 5000, "Zain", "Uschi"));
console.log(salaryCalculator("Olga", 7000, "Zain"));
console.log(salaryCalculator("Jack", 200));
console.log("____________________");
// Call me
// Create a function that receive a text from user and check if the user has entered a phone number, and print that out.
// Note : phone number should be within the German network starts with (030 or 017) only and has 7 digits after the prefix number
// Examples :
// phone("Hi, call me on 030221A398 "); -> This is not a valid phone number 030221A398
// phone("Hi my number is 038 "); -> This is not a valid phone number 038

const phone = (str) => {
  let numberToCheck = str
    .split(" ")
    .find(
      (number) => number.slice(0, 3) == "030" || number.slice(0, 3) == "017"
    );
  if (numberToCheck == undefined) {
    return `Sorry, please enter your phone number.`;
  }
  if (numberToCheck.length == 10 && numberToCheck == parseInt(numberToCheck)) {
    //                                    "030" == 30 -> true
    return `Your phone number is ${numberToCheck}`;
  } else {
    return `This is not valid phone number ${numberToCheck}`;
  }
};
console.log(phone("hi 0302220000"));
console.log(phone("hi 030222Q000"));
console.log(phone("hi "));

console.log("____________________");
// IsBank
// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with DE and has 20 number after that.
// DExxxxxxxxxxxxxxxxxxxx
// Examples :
// bankChecker("Hi, why you need my bank account? "); -> There was no bank account in the text
// bankChecker("I delete, have bank DE"); -> This is not a valid bank account
// bankChecker("DE12100110013000400011")); -> The bank account DE12100110013000400011 is valid

const bankChecker = (str) => {
  let result = "";
  let counter = 0;
  let strToArr = str.split(" ");
  for (let i = 0; i < strToArr.length; i++) {
    let firstTwoChr = strToArr[i].slice(0, 2);
    let remainderStr = strToArr[i].slice(2);
    if (firstTwoChr == "DE") {
      if (remainderStr.length != 20 || isNaN(remainderStr)) {
        result = `This is not a valid bank account`;
        counter++;
      } else if (remainderStr.length == 20) {
        result = `The bank account DE${remainderStr}`;
        counter++;
      }
    }
  }
  if (counter == 0) {
    return `There was no bank account in the text`;
  }
  return result;
};
console.log(bankChecker("Hi my bank account is "));
console.log(bankChecker("Hi my DE2200002222A000220022 account is "));
console.log("____________________");
// This is crazy
// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".
// Examples :
// checkStr("Hi my name is HADI");
// checkStr("I like JavaScript");

const checkStr = (str) => {
  return str.toLowerCase().includes("javascript")
    ? "I know it's crazy 😉"
    : "Sorry, No JavaScript No FUN";
};
console.log(checkStr("Hi my name is HADI"));
console.log(checkStr("I like JaVAScriPT"));
console.log("____________________");
// Tell me my age
// Create a function that calculates the user age e.g. 2000 -> 20.
// tip try mdn for this one aka need some research
// Examples :
// age(1940) -> 81
// age(2022)) -> Please enter a valid year

const age = (year) => {
  const currentYear = new Date().getFullYear();
  const userAge = currentYear - parseInt(year);
  if (userAge > 0 && userAge <= 115) {
    return userAge;
  } else {
    return "Please enter a valid year";
  }
};
console.log(age("1929Hadi"));
console.log(age(1200));
console.log("____________________");
// Seasons
// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.
// I will be nice again to you and offer the arrays 😉
// const months = [ "december", "january", "february", "march", "april", "may", "jun", "july", "august", "september", "october", "november" ];
// const seasons = ["Winter", "Spring", "Summer", "Autumn"];
// Examples :
// monthCheck("I love Jun"); -> Jun is in Summer
// monthCheck("We need Kartoffel"); -> We couldn’t find any month in your text, sorry try again

const monthCheck = (str) => {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  const currentSe = (monthName) => {
    return seasons[Math.floor(months.indexOf(monthName) / 3)];
  };
  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");
  return month == ""
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)} `;
};
console.log(monthCheck("I love June"));
console.log(monthCheck("We need Kartoffel"));

console.log("____________________");
// Student level check
// Create a function will calculate a student degrees for 6 subjects, if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)
// Example :
// studentAverage(99, 44, 44, 80, 80, 98, 89);
// function average(...notes) average(2,4,5,6,77) Dos not mean function average(notes=[])  average(2,2)

function average(...notes) {
  let notesResult = Math.floor(
    notes.reduce((acc, cur) => acc + cur) / notes.length
  );
  let result = "";
  if (notesResult > 90) {
    result = `A+`;
  } else if (notesResult >= 85 && notesResult <= 90) {
    result = `A`;
  } else if (notesResult >= 80 && notesResult <= 84) {
    result = `B`;
  } else if (notesResult >= 70 && notesResult <= 79) {
    result = `C`;
  } else if (notesResult < 70) {
    result = `F`;
  } else {
    return `Sorry something went wrong`;
  }
  return `${notesResult} percent is ${result}`;
}

console.log(average(99, 44, 44, 80, 80, 98, 89));

console.log("____________________");
// Tell me more
// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// print all the user input adding the greeting part and more text turning that input into a readable text.
// If one of his activities was dance or party add "you are cool" to your outputted text.
// Examples :
// userData("Zain", 22, "Kurfürstendamm", "dance", "party");
// userData("Olga", 40, "potsdamer platz", "party");
// userData("Nancy", 33, "viktoria luise platz", "swimming");

function userData(userName, age, address, ...activities) {
  let result = `Hey ${userName}, really nice to live in ${address}, hope you are having a lot of fun in your ${age}, it is nice to do ${activities.join(
    ", "
  )} `;
  if (activities.includes("dance") || activities.includes("party")) {
    result += "Oh BTW You are cool";
  }
  return result;
}
console.log(userData("Zain", 22, "Kurfürstendamm", "dance", "party"));
console.log(userData("Olga", 40, "potsdamer platz", "party"));
console.log(userData("Nancy", 33, "viktoria luise platz", "swimming"));
console.log("____________________");
// Validate Email
// Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.
// Examples :
// validate("contact@hadi-nsreeny.com") -> This is valid email address, thank you
// validate("@hadi-nsreeny.com") -> Sorry, invalid email address

function validate(email) {
  //   let atPos;
  //   let dotPos;
  //   for (let i = 0; i < email.length; i++) {
  //     if (email[i] === "@") {
  //       atPos = i;
  //     }
  //     if (email[i] === ".") {
  //       dotPos = i;
  //     }
  //   }
  let atPos = email.indexOf("@");
  let dotPos = email.lastIndexOf(".");
  if (atPos > 0 && dotPos > atPos) {
    return `${email} is valid.`;
  } else {
    return `${email} is invalid.`;
  }
}

console.log(validate("contact@hadi-nsreeny.com"));
console.log(validate("@hadi-nsreeny.com"));

// parameters: Naming and order
const userPrint = (name, add, age) => {
    console.log(`Hi ${name},your age ${age} your address is ${add}. `);
  };
  userPrint("Hadi", "Berlin", 31);
  // default value
  
  const halloUser = (userName = "Zain") => {
    console.log(`Hi ${userName}. `);
  };
  halloUser();
  halloUser("Hadi");
  // Spread syntax ...
  // ...array
  const arr = ["Hi", "I", "You"];
  const cloneArr = [101, ...arr, "super nice"];
  cloneArr[0] = "cool";
  console.log(cloneArr);
  console.log(arr);
  
  // ...args
  const sum = (x, y) => x + y;
  console.log(sum(2, 4));
  const printFunThingsToDo = (userName, age, ...arr) => {
    console.log(arr);
    console.log(`Hi ${userName} I am ${age}, you like ${arr}`);
  };
  printFunThingsToDo(
    "Hadi",
    31,
    "Coding",
    "Cooking",
    "Do fun things",
    "Cool draws"
  );
  
  const numbers = (...nums) => {
    console.log(nums[nums.length - 1]);
  };
  
  numbers(2, 4, 5, 67, 7, 8, 3);
  // cool functions
  // self invoked functions
  (function printMyName(x, y) {
    console.log(`Hi I am cool function ${x + y}`);
  })(2, 3);
  
  // printMyName()
  
  // Write a function that it returns  “Two for me and one for you” when no arguments are passed
  // e.g
  // console.log(twofer("Fran")) ---> "Two for me and one for Fran"
  // console.log(twofer()) ---> "Two for me and one for you"
  const twoFor = (who = "you") => `Two for me and one for ${who}`;
  console.log(twoFor("Zain"));
  console.log(twoFor());
  // Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
  // e.g
  // console.log(exponent(3, 3)) ---> 27
  // console.log(exponent(3)) ---> 9
  const exponent = (num, exp = 2) => num ** exp;
  console.log(exponent(3));
  const exponent2 = (num, exp = 2) => Math.pow(num, exp);
  console.log(exponent2(3));
  const exponent3 = (num, exp = 2) => {
    let result = 1;
    for (let i = 0; i < exp; i++) {
      // 1 = 1 * 3
      // 3 * 3
      result *= num;
    }
    return result;
  };
  console.log(exponent3(3));
  // Write a function that it returns the total amount of arguments passed to it.
  // e.g
  // console.log(howManyArgs()) ---> 0
  // console.log(howManyArgs(1, false, "hello")) ---> 3
  // console.log(howManyArgs("better")) ---> 1
  const howManyArgs = (...args) => args.length;
  console.log(howManyArgs(1, false, "hello"));
  // Write a function which accepts any amount of numbers and return the sum of their addition
  // e.g
  // console.log(sum(1)) ---> 1
  // console.log(sum(1, 15)) ---> 16
  // console.log(sum(25, 25, 20)) ---> 70
  const sum2 = (...args) => {
    let acc = 0;
    for (let i = 0; i < args.length; i++) {
      let cur = args[i];
      acc += cur;
    }
    return acc;
  };
  console.log(sum2(25, 25, 20));
  // Bonus: Write a function which accepts any amount of numbers and returns the average.
  // e.g
  // console.log(average(0)) ---> 0
  // console.log(average(1, 2)) ---> 1.5
  // console.log(average(1, 3, 6, 10)) ---> 5
  // console.log(average(12, 14, 16)) ---> 14
  const average = (...args) => {
    let result = 0;
  
    for (let i = 0; i < args.length; i++) {
      result += args[i];
    }
    return result / args.length;
  };
  console.log(average(25, 25, 20));
  
  const books = ["One Day", "One more thing", "Done by me"];
  
  // .map
  // Converting an array to a different array: `Array.prototype.map(<function>)`
  const printLabel = (item, index) => `${index}. title ${item}`;
  const printBook = books.map(printLabel);
  // const printBook = books.map((item, index) => `${index}. title ${item}`);
  
  console.log(printBook);
  console.log(books);
  const numbs = ["1", "2", "3"];
  const nums = numbs.map((item) => parseInt(item));
  console.log(nums);
  
  const printMany = [1, 2, 3, 4, 5].map((item, index) => console.log(item));
  // const printMany = [1, 2, 3, 4, 5].map((el, i) => console.log(item));
  
  // .reduce
  // Getting a in single output value
  const reducer = (acc, cur) => acc + cur; // 9
  const resultArr = [2, 3, 1, 3].reduce(reducer, 1);
  console.log(resultArr);
  
  // .filter
  // - Getting an array with items that aline with your condition: `Array.prototype.filter(<function>)`
  const names = ["Zain", "Nancy", "Olga"];
  const filArr = names.filter((name) => name.length > 4);
  console.log(filArr);
  // .find
  // - Getting a the first item that aline with your condition : `Array.prototype.filter(<function>)`
  
  const coolNumbers = [1, 2, 7, 43, 5, 6];
  const biggerThanFive = coolNumbers.find((num) => num >= 5);
  console.log(biggerThanFive);
  
  //  Maybe more 😏
  
  // sum numbers
  // Write a function which accepts any amount of numbers and return the sum of their addition
  // e.g
  // console.log(sum(1)) ---> 1
  // console.log(sum(1, 15)) ---> 16
  // console.log(sum(25, 25, 20)) ---> 70
  const sumNumbers = (...args) => {
    return args.reduce((acc, cur) => {
      return acc + cur;
    });
  };
  console.log(sumNumbers(25, 25, 20));
  // toCamelCase
  const toCamelCase = (str) => {
    // cool_fun -> coolFun
    let strToArr = str.toLowerCase().split("_");
    let result = strToArr.map((item, i) =>
      1 > i ? item : item[0].toUpperCase() + item.slice(1)
    );
    return result.join("");
  };
  console.log(toCamelCase("cool_fun_things"));
  // hackerSpeak
  const hackSpeak = (str) => {
    return str
      .toLowerCase()
      .split("")
      .map((chr) => {
        switch (chr) {
          case "a":
            return "4";
          case "e":
            return "3";
          case "i":
            return "1";
          case "o":
            return "0";
          case "s":
            return "5";
          default:
            return chr;
        }
      })
      .join("");
  };
  console.log(hackSpeak("I like javaScript"));
  // Odds and Evens.
  // Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
  // [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
  // [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
  
  // using ...
  const oddOrEven = (...args) => {
    return args.map((item) => (item % 2 == 0 ? ++item : --item));
  };
  console.log(oddOrEven(2, 4, 5, 6, 7));
  
  // using array
  const oddOrEven2 = (arr) => {
    return arr.map((item) => (item % 2 == 0 ? ++item : --item));
  };
  console.log(oddOrEven2([2, 4, 5, 6, 3]));
  
  // how many chr in a str(not case sens)
  // howManyStr("I like pizza","p") -> 1
  
  const howManyStr = (str, chr) => {
    return str
      .toLowerCase()
      .split("")
      .filter((letter) => letter == chr).length;
  };
  
  // [i, " ", l,i,k,e ....]
  //
  
  console.log(howManyStr("I like pizza", "i"));
  console.log(howManyStr("I like pizza", "p"));