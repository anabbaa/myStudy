// callbacks
function first(cb) {
    const funFunction = () => "Noooo";
    return cb;
  }
  function cb() {
    return "fun";
  }
  
  console.log(first(cb()));
  
  // map
  const names = ["Zain", "Olga", "Nancy", "Nancy21"];
  //const heyNames = names.map((item, index) => `Hi ${item}, you live in ${index}`);
  const heyNames = names.map((name, index) => `Hi ${name}`);
  
  console.log(heyNames);
  //console.log(names);
  // reduce
  
  const numArr = [2, 3, 4, 5, 6, 78, 8];
  const reducer = (acc, cur) => acc + cur;
  const totalArr = numArr.reduce(reducer, 0);
  console.log(totalArr);
  // filter
  const filterArr = names.filter((item, index) => item.length == 7);
  console.log(filterArr);
  
  // find
  const findVal = names.find((item) => item.length == 400);
  console.log(findVal);
  
  // fill
  const numbers = [2, 4, 5, 67, 8, 8, 9, 5, 4];
  //numbers.fill(3,3,3);
  console.log(numbers);
  // nodemon index.js
  // some
  const isEven = (item) => item % 2 == 0;
  console.log(numbers.some(isEven));
  
  // every
  const isBigger = (item) => item > 55;
  console.log(numbers.every(isBigger));
  
  // sort
  const alpha = ["a", "c", "b", 2, "!", "ü"]; // UTF-16
  console.log(alpha.sort());
  const words = ["hi", "a", "web", "development"];
  const sortedArr = words.sort((a, b) => b.length - a.length);
  console.log(sortedArr);
  
  console.log([11, 2, 1, 22].sort((a, b) => a - b));
  
  // for in
  const person = {
    userName: "Zain",
    age: 22,
    add: "Hamburg",
  };
  
  for (prop in person) {
    console.log(`${prop} : ${person[prop]}`);
  }
  // for of
  
  const people = [
    {
      userName: "Zain",
      age: 22,
      add: "Düs",
    },
    {
      userName: "Olga",
      age: 21,
      add: "Berlin",
    },
    {
      userName: "Nancy",
      age: 40,
      add: "L",
    },
  ];
  
  // loops,  ,SIAF,IIFE , closure, Array advanced methods(map,filter,reduce)
  
  // ==       ===     !=       <=
  //  &&   ||
  
  let con1 = 1 < 23; // true
  let con2 = 1 == 23; // false
  let con3 = 1 <= 23; // true
  console.log(con3);
  // true && true = true
  // true && false = false
  // true || true = true
  // false || true = true
  // false || false = false
  if (con1 && con2) {
    console.log("Nice you are the best person in the world");
  }
  const arr1 = [333, 333456, 777];
  let box; // box is ready
  for (let i = 0; i <= 5; i++) {
    // i = 2
    box = ""; // box is empty now
    for (let j = 0; j < i; j++) {
      // j = 3
      box += "+"; // box=  +
    }
    console.log(box); // ++
  }
  
  let text = "Hi";
  console.log(text);
  text += "something";
  console.log(text);
  text = "";
  console.log(text);
  text = "c";
  text += "o";
  text += "o";
  text += "l";
  text += " ";
  console.log();
  text = "c";
  text += "o";
  text += "o";
  text += "l";
  console.log(text);
  const arrOfPe = [
    [2, 33],
    [44, 3],
    [66, 4],
  ];
  for (let i = 0; i < arrOfPe.length; i++) {
    for (let j = 0; j < arrOfPe[i].length; j++) {
      console.log(arrOfPe[i][j]);
    }
  }

  //Name of City

function nameOfCity(cityName) {
    const firstThreeChr = cityName.substring(0, 3).toLowerCase();
    if (firstThreeChr == "new" || firstThreeChr == "los") {
      return cityName;
    } else {
      return `the city name it's not `;
    }
  }
  console.log(nameOfCity("Valletta"));
  // Is Divisible
  const isDivisible = (num) => num % 100 == 0;
  console.log(isDivisible(1000));
  // Ternary Operator
  const isRaining = (bool) =>
    bool
      ? "wet day - you need an umbrella!"
      : "dry day - leave your umbrella at home!";
  
  console.log(isRaining(true));
  // Loop Sequence
  
  const geometricalSequence = () => {
    let str = "";
    for (let i = 1; i <= 256; ) {
      // if (i == 1) {
      //   str += i;
      //   i += i;
      //   continue;
      // }
      str += `${i} `;
      i += i;
      // i+= i -> i + i
    }
    return str.trim();
  };
  console.log(geometricalSequence());
  // Multiples of Three
  function multiplesOfThree() {
    let str = "";
    for (let i = 1; i <= 15; i++) {
      if (i % 3 == 0) {
        str += `${i} `;
      }
    }
    return str.trim();
  }
  
  console.log(multiplesOfThree());
  
  // powerOf
  function powerOf(integer) {
    return Math.pow(integer, integer);
    // return integer ** integer
  }
  
  console.log(powerOf(5));
  
  // Problem Solving: Number of vowels
  function vowelCount(string) {
    const vo = "aeiou";
    const str = string.toLowerCase();
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < vo.length; j++) {
        if (str[i] == vo[j]) {
          count++;
        }
      }
    }
    return count;
  }
  
  console.log(vowelCount("test"));
  
  // Objects
  const obj1 = {};
  obj1["name"] = "Olga";
  console.log(obj1);
  const obj2 = {
    userName: "Hadi",
  };
  console.log(obj2);
  const obj3 = new Object();
  const person = {
    userName: "Zain",
    age: 22,
    add: "Berlin",
  };
  const arr = Object.entries(person);
  console.log(arr);
  // [[],[],[],[]]
  const arrOfArr = [
    [33, 2],
    [22, 3],
    [44, 11],
    [51, 55],
  ];
  
  console.log(arrOfArr[2][1]);
  //
  
  const objects = [
    { name: "Nancy", lasName: "Zo" },
    {
      name: "Olga",
      lastName: "do",
      printOut: function () {
        console.log("Hi");
      },
    },
  ];
  
  //objects[1].printOut();
  // other way to acc
  objects[1]["printOut"]();
  
  // Clones vs. References
  
  // Primitive  (Simple values are always clones)
  // String, Number, Boolean
  let x = 3;
  let z = x; // clone coz it's simple
  console.log(z);
  z = 55;
  console.log(x);
  let strLong = "Hi, I am here";
  let cloneStr = strLong; // clone coz it's simple
  cloneStr = "Noooooooooo";
  console.log(strLong);
  
  // Object
  const car = {
    name: "Ford",
    year: "2020",
    color: "Red",
  };
  // Objects are references by default: Array and object literals
  
  const newCar = car; // ref
  
  newCar.name = "BMW";
  console.log(car);
  const names = ["Olga", "Zain", "Jack", "Nancy"];
  //  1
  const namesClone = [...names];
  namesClone[0] = "Hadi";
  console.log(names);
  
  // 2
  const newCloneArr = [].concat(names);
  console.log(newCloneArr);
  // 3
  const lastWay = names.slice(0);
  lastWay[0] = "cool";
  console.log(lastWay);
  
  const geometricalSequence1 = () => {
    let result;
    for (let i = 0; i < 9; i * 2) {
      result += i;
    }
    return result;
  };
  console.log(geometricalSequence1());