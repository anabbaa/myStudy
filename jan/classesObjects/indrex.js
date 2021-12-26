
const car = {
    brandName: "Audi",
    modelYear: "2021",
    priseWithVAT: 20,
    colors: ["red", "black", "white"],
  };
  
  // Shallow clone for an object using ...
  const newClonedObj = { ...car };
  console.log(newClonedObj);
  newClonedObj.brandName = "BMW";
  newClonedObj.colors[0] = "orange";
  console.log(car);
  //  Recursion
  // factorial example
  const factorial = (num) => {
    //console.log(num);
    if (num == 1) {
      return 1;
    }
    return num * factorial(num - 1);
  };
  console.log(factorial(7));
  // 7*6 = *5  = *4 = *3 = *2 = *1
  
  // Deep copy using recursion 🤨
  // use for free :) new version with arrays and shorter methods 😎
  function deepCopy(obj) {
    // check if it's array
    if (Array.isArray(obj)) {
      return obj.map(deepCopy);
    }
    // check it it's object
    if (typeof obj == "object") {
      return (
        Object.keys(obj)
          //                    userName: deepCopy("Hadi")
          .map((key) => {
            console.log(deepCopy(obj[key]));
            return { [key]: deepCopy(obj[key]) };
          }) // [{},{},{},{}]
          .reduce((acc, cur) => Object.assign(acc, cur), {})
      );
    }
    // return the obj and if was no object or no array return the argument itself
    return obj;
  }
  
  const brandNewCloned = deepCopy([{ name: "Hadi" }, { name: "Zain" }]);
  console.log(brandNewCloned);
  const deepCopyObj = deepCopy(car);
  console.log(deepCopyObj);
  //brandNewCloned.colors[2] = "Pink";
  console.log(car);
  const newObj = Object.assign({}, car);
  newObj.brandName = "Bugatti";
  console.log(car);
  
  // Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
  const scores = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ];
  
  const scrabble = (arr) => {
    return arr.reduce((acc, cur) => acc + cur.score, 0);
  };
  
  console.log(scrabble(scores));
  
  // Please print each of your answers to the console.
  
  // 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
  
  // 2. Get Values. Create a function that returns an array of all values of an object's properties.
  
  // Examples:
  // Expected output:
  // ["tea", "coffee", "milk"]
  function getObjectValues(obj) {
    return Object.values(obj);
  }
  const obj1 = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
  };
  console.log(getObjectValues(obj1));
  
  // 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
  
  // Example
  let person = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    print: function () {
      return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`;
    },
  };
  // Example of Expected Output "Michael Smith is a 20 year old driver in Paris".
  // person.print = function () {
  //   return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`;
  // };
  console.log(person.print());
  // Bonus Questions
  // 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
  const keysAndVal = (obj) => {
    return Object.entries(obj);
  };
  
  console.log(keysAndVal(person));
  
  // Examples:
  // objectToArray({
  //   A: 1,
  //   B: 2,
  //   C: 3
  // })
  // Expected output:
  // [["A", 1], ["B", 2], ["C", 3]]
  // objectToArray({
  //   cats: 1,
  //   dogs: 2,
  //   turtles: 4
  // })
  // Expected output:
  // [["cats", 1], ["dogs", 2], ["turtles", 4]]
  
  const objectToArray = (obj) => {
    return Object.entries(obj);
  };
  console.log(
    objectToArray({
      cats: 1,
      dogs: 2,
      turtles: 4,
    })
  );
  // 2. List Properties. Create a function that returns an array of properties of a javascript object.
  
  // Example
  let student = {
    name: "Mike",
    class: "4A",
    course: "English",
  };
  // Expected output:
  // ["name", "class", "course"]
  
  const propNames = (obj) => {
    return Object.keys(obj);
  };
  console.log(propNames(student));
  // 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
  
  // Example
  let first = { firstName: "John", lastName: "Vooo" };
  let last = { lastName: "Smith" };
  // Expected output:
  // {firstName: "John", lastName: "Smith"}
  const makeItIntoOne = (obj1, obj2) => {
    return Object.assign(obj1, obj2);
  };
  console.log(makeItIntoOne(first, last));
  // Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
  
  // 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
  
  // Example:
  // let person = {
  //   name: "John",
  //   job: "teacher"
  // }
  // Expected Output:
  // {"John": name, "teacher": job}
  
  const reverseObject = (obj) => {
    let newObj = {};
    for (let prop in obj) {
      newObj[obj[prop]] = prop;
    }
    return newObj;
  };
  console.log(reverseObject(person));
  
  // 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
  
  // Examples:
  // { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
  // {key: true} ➞ [["key"], [true]]
  
  // Expected Output:
  // {"John": name, "teacher": job}
  const twoArrFromAnObj = (obj) => {
    const keysArr = Object.keys(obj);
    const ValArr = Object.values(obj);
    return [keysArr, ValArr];
  };
  
  console.log(twoArrFromAnObj({ a: 1, b: 2, c: 3 }));

  // Destructuring objects as function parameters
function fun(num, { name }) {
    console.log(num);
    let firstName = { name };
    console.log(firstName);
  }
  
  fun(2, { name: "Hadi", age: 31, add: "B" });
  
  const userData = {
    firstName: "Steel",
    lastName: "soWhat",
    age: 21,
    single: true,
    get fullName() {
      console.log(
        `${this.firstName} ${this.lastName} ${this.age} ${this.single}`
      );
    },
    set fullName(str) {
      let arr = str.split(" ");
      console.log(arr);
      this.firstName = arr[0];
      this.lastName = arr[1];
      this.age = arr[2];
      this.single = arr[3];
    },
  };
  // getter
  userData.fullName; // getting the object data
  
  // setter
  userData.fullName = "Hadi Nsreeny 31 true"; // filling the object
  userData.fullName; // getting the new data
  
  // constructor our own 😬
  function Person(name, age, act) {
    this.name = name;
    this.age = age;
    this.act = act;
    this.printOut = function () {
      console.log(
        `Hey ${this.name}, you are too old ${this.age} and you do ${this.act}`
      );
    };
  }
  const newObj = new Person("Zain", 21, ["sleep", "eat"]);
  newObj.printOut();
  console.log(newObj);
  const olga = new Person("Olga", 40, "No thing");
  olga.printOut();
  
  // for in  object
  for (let prop in newObj) {
    console.log(`zain.${prop} : ${newObj[prop]}`);
  }
  
  let family = [
    ["Zain", 22, "teacher"],
    ["Olga", 40, "chef"],
  ];
  for (let i = 0; i < family.length; i++) {
    for (let j = 0; j < family[i].length; j++) {
      console.log(family[i][j]);
    }
  }
  // forEach  arr
  family.forEach((arr) => arr.forEach((element) => console.log(element)));
  // for of  arr
  for (let [key, val] of Object.entries(newObj)) {
    console.log(` ${key} : ${val}`);
  }
  
  console.log(Object.entries(newObj));
  // Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
  // build two product using your constructor function
  // i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store
  function Product(productName, price, inventory) {
    this.productName = productName;
    this.price = price;
    this.inventory = inventory;
    this.display = function () {
      console.log(
        `From item ${this.productName} selling price ${this.price}€. we have ${this.inventory} in our store`
      );
    };
  }
  const pepsi = new Product("Pepsi", 2.33, 2232);
  pepsi.display();
  // get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
  // first get the data
  // then set the data
  
  const car = {
    modelName: "Audi",
    modelNumber: "A8",
    enginCapacity: 332,
    get data() {
      console.log(
        `The brand ${this.modelName} model ${this.modelNumber} has enginCapacity of ${this.enginCapacity}hp`
      );
    },
    set data(obj) {
      // let arr = str.split(" ");
      // this.modelName = arr[0];
      // this.modelNumber = arr[1];
      // this.enginCapacity = arr[2]
  
      this.modelName = obj.name;
      this.modelNumber = obj.num;
      this.enginCapacity = obj.cap;
    },
  };
  // "Hadi Nsreeny 1989 yes"
  car.data = { name: "BMW", num: "i8", cap: 33 };
  car.data;
  // class
  class Animals {
    // constructor method aka setup
    constructor(_kind, _hometown) {
      this.kind = _kind;
      this.hometown = _hometown;
    }
    // instances properties after constructor
    display() {
      console.log(`this very cute ${this.kind} lives in ${this.hometown}`);
    }
  }
  console.log(Animals);
  const cat = new Animals("cat", "LA");
  cat.display();
  
  console.log(cat);
  const newPet = new Animals("dog", "NY");
  newPet.display();
  console.log(typeof Animals);
  newPet.displayAge = () => {
    console.log("Hi");
  };
  
  newPet.displayAge();
  console.log(newPet);
  
  class Color {
    constructor() {
      this.name = "";
      this.tep = 0;
    }
  }
  
  const red = new Color();
  console.log(red);
  red.name = "RED";
  red.tep = 232;
  console.log(red);
  
  // TV app
  class Tv {
    constructor(_brand, _channel = 1, _volume = 10) {
      this.brand = _brand;
      this.channel = _channel;
      this.volume = _volume;
    }
    incVolume() {
      // increase the volume
      if (this.volume < 100) {
        this.volume++;
        console.log(this.volume);
      } else {
        console.log("This is too much");
      }
    }
    decVolume() {
      // decrease the volume
      if (this.volume > 0) {
        this.volume--;
        console.log(this.volume);
      } else {
        console.log("NO sound");
      }
    }
    rest() {
      // volume and channel
      this.channel = 1;
      this.volume = 10;
    }
    randomChannel() {
      // max 50
      this.channel = Math.floor(Math.random() * 50) + 1;
      console.log(`you are watching channel ${this.channel}`);
    }
    display() {
      return `This Tv ${this.brand}, had ${this.channel} channels and the volume is on ${this.volume}`;
    }
  }
  
  const samsung = new Tv("SAMSUNG");
  console.log(samsung);
  samsung.incVolume();
  
  samsung.decVolume();
  const apple = new Tv("Apple", 30, 100);
  console.log(apple);
  
  // extends && super

  class Person {
    constructor(_name, _age) {
      this.name = _name;
      this.age = _age;
    }
    printData() {
      return `Hey ${this.name}, you are too old ${this.age}`;
    }
  }
  // const newBuddy = new Person("Steel", 21);
  //console.log(newBuddy.printData());
  // extends && super
  // extends and super()
  // extends --> inheriting the methods from the Original class which being called
  // super --> gets access to the parent's properties and methods
  
  class Kid extends Person {
    constructor(_name, _age, _height = 0) {
      super(_name, _age);
      this.height = _height;
    }
    show() {
      return `this is a kid class from Person, ${this.name}`;
    }
  }
  
  const zain = new Kid("Zain", 21);
  console.log(zain);
  console.log(zain.show());
  // Date
  
  // UTC Coordinated Universal Time
  // CET Central European Time
  // GMT Greenwich Mean Time
  // More about that https://24timezones.com/#/map
  
  let time = new Date().getMonth();
  console.log(Date());
  // A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
  // const isPandigital = (num) => {
  //   let numbers = "0123456789".split("");
  //   arr = num.toString().split("");
  //   let newArr = [];
  //   //   for (let i = 0; i < arr.length; i++) {
  //   //     for (let j = 0; j < numbers.length; j++) {
  //   //       if (arr[i].includes(numbers[j]) && !newArr.includes(arr[i])) {
  //   //         newArr.push(arr[i]);
  //   //       }
  //   //     }
  //   //   }
  // other way
  //   arr.forEach((num) => {
  //     numbers.forEach((el) => {
  //       if (num.includes(el) && !newArr.includes(num)) {
  //         newArr.push(num);
  //       }
  //     });
  //   });
  //   return newArr.sort().join("") == numbers.sort().join("");
  // };
  // console.log(isPandigital(1234560789));
  // third way
  // const  isPandigital = (num)=> {
  //   let numToArr = num.toString().split("").sort();
  //   let filteredArr = numToArr.filter((el, i) => numToArr.indexOf(el) == i);
  //   return filteredArr.join("") == "0123456789";
  // }
  // console.log(isPandigital(123334567890));
  // console.log(isPandigital(90864523148909));
  // Binary converter, convert any given number to binary.
  // Bounce : your code should be using one line only
  // Example :
  // 20 -> 10100
  // 10-> 1010
  // 44-> 101100
  const binary = (num) => num.toString(2);
  
  console.log(binary(10));
  const binary2 = (num) => {
    return parseInt(num, 2);
  };
  console.log(binary2(10));

  // Data Structure

//Objects
const profileData = {
  name: "Steel",
  surname: "Von",
  age: 13,
  city: "Paris",
};

// Convert Object -> Array
const convertObjectToArray = (obj) => Object.entries(obj);

const myObj = {
  1: 10,
  2: 20,
  3: 30,
};

console.log(convertObjectToArray(myObj));

// Convert Array Data
const convertArrayData = (arr) => {
  arr.pop();
  let reversed = arr.reverse();
  reversed.push("milk");
  return reversed;
};

const drinks = ["coffee", "tea", "juice"];
console.log(convertArrayData(drinks));

// Nested Arrays
const createGrid = (size, char) => {
  //   let grid = [];
  //   for (let i = 0; i < size; i++) {
  //     grid.push([]);
  //     for (let j = 0; j < size; j++) {
  //       grid[i].push(char);
  //     }
  //   }
  //   return grid;
  const newArr = new Array(size).fill(new Array(size).fill(char));
  return newArr;
};
console.log(createGrid(3, "*"));

// Word Converter
const wordConverter = (arr, suffix) => arr.map((word) => (word += suffix));

let adjectives = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(adjectives, "er"));

//Hour Tracking

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];

const calculateHours = (hours) => {
  return hours.reduce((total, hours) => total + (hours.end - hours.start), 0);
  // return hours.reduce((acc, cur) => acc + (cur.end - cur.start), 0);
};

console.log(calculateHours(hourTracking));

// Classes
class Course {
  constructor(_teacher, _type, _number) {
    this.teacher = _teacher;
    this.type = _type;
    this.number = _number;
  }
  spaceNeeded() {
    let result = this.number * 2;
    return `The classroom should be ${result}m².`;
  }
  details() {
    return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
  }
}

let course = new Course("Hadi", "web development", 21);
console.log(course.spaceNeeded());
console.log(course.details());

// Problem Solving

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(capitalizeFirstLetter("hey there"));

// Validate Pin
function validPin(pinCode) {
  const number = Number(pinCode);
  //checks if pin is not a number
  if (isNaN(number)) {
    return false;
  }

  const pinSplit = pinCode.split("");
  const lengthOfPin = 4;
  //checks pin length
  if (pinSplit.length !== lengthOfPin) {
    return false;
  }
  //checks if last value is odd or even
  if (parseInt(pinCode[lengthOfPin - 1]) % 2 !== 0) {
    return false;
  }
  let result = 0;
  let checkIdenticalNumbers = [];
  for (let i = 0; i < pinSplit.length; i++) {
    result += parseInt(pinSplit[i]);
    if (pinSplit[0] !== pinSplit[i]) {
      checkIdenticalNumbers.push(pinSplit[i]);
    }
  }
  //checks if all numbers are identical
  if (checkIdenticalNumbers.length === 0) {
    return false;
  }
  //checks if total value of pin is less than 5
  if (result < 5) {
    return false;
  }
  return true;
}
console.log(validPin("1100"));
console.log(validPin("1230"));