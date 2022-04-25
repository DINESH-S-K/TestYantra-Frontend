// var a = 20;
// var b = 0;
// console.log((b += a));

// console.log(typeof NaN);

// var a = "20";
// var b = 20;
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);

// var c = 20 + 40 + "12";
// var d = "20" / 2;
// console.log(c);
// console.log(d);

// var x = 2 > 3 ? console.log("Dinesh") : console.log("Nallish");
// console.log(typeof x);

// 3 < 2 ? "Dinesh" : 2 > 3 ? console.log("vignesh") : console.log("Nallish");

// console.log(3 > 2 > 1);
// 3>2 true =1
// 1>1 gives false

// console.log(1.2 + 1.4 == 2.6);
//first value < second value

//functions
// add(10, 20);
// function add(a, b) {
//   console.log(a + b);
// }
// add(3, 5);

// //add1(6, 4); it throw an error
// var add1 = function (a, b) {
//   console.log(a + b);
// };
// add1(4, 4);

// add1();
// var add1 = function () {
//   console.log("Mine");
// };

// var add2 = (function (a, b) {
//   console.log(a + b);
// })(10, 20);

//exercise //function as a argument to a another function
// function arithmetic(a) {
//   console.log(a);
//   a(12, 14);
// }
// arithmetic(add);

// function findIsEligibleForVoting(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function printEligibleOrNot(result) {
//   if (result === true) {
//     console.log("eligible");
//   } else {
//     console.log("not eligible");
//   }
// }

// var result = findIsEligibleForVoting(12);
// printEligibleOrNot(result);

// var result2 = findIsEligibleForVoting(20);
// printEligibleOrNot(result2);

// function printEligibleOrNot1(result) {
//   if (result === true) {
//     console.log("eligible");
//   } else {
//     console.log("not eligible");
//   }
// }
// printEligibleOrNot1(findIsEligibleForVoting(20));

// function greeting(a) {
//   console.log(a);
//   console.log(a());
//   a("Dinesh");
// }

// function welcome(name) {
//   console.log("Hello " + name);
// }
// greeting(welcome);

// var welcome = "Nallish";
// console.log(welcome);

// var arr = ["a", 2, true, { ename: "dinesh" }];
// console.log(arr);

// for (var index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

//two ways creating object
// var EmpData = {
//   Name: "Dinesh",
//   empId: 1,
//   permanent: true,
// };
// console.log(EmpData);

// var obj = new Object();
// console.log(obj);
// obj.name = "ko";
// console.log(obj);

// var arr2 = [10, 20, 30, 40, 50];
// console.log(arr2);

//for loop
// for (let index = 0; index < arr2.length; index++) {
//   arr2[index] = arr2[index] + 10;
//   document.write(arr2[index] + "<br>");
// }
// console.log(arr2);

//for of loop
// for (const iterator of arr2) {
//   console.log(iterator);
// }

//for in loop
//array
// console.log("\n");
// for (const key in arr2) {
//key = index
//   const element = arr2[key];
//   console.log(element);
// }

//Object
// console.log("\n");
// var object = { 1: 10, 2: 20, 3: 30, 4: 40, 5: 50 };
// for (const key in object) {
//key = key value
//   const element = object[key];
//   console.log(element);
// }
// setTimeout(() => {
//   console.log("Dinesh");
// }, 3000);

// setTimeout(() => {
//   console.log("Dinesh");
// }, 3000);

//String Methods
// var str = "Hello World";
//not assigning a variable does not reflect because
//String is immutable
// str.toUpperCase();
// console.log(str);
//Assigning to a variable will reflect
// var upper = str.toUpperCase();
// console.log(upper);

// var lower = str.toLowerCase();
// console.log(lower);

// console.log(str.charAt(4));

// console.log(str.indexOf("o"));

// console.log(str.includes("o Wo"));

// console.log(str.replace("o Wo", "hi l"));

// console.log(str.length);

// var myArray = [
//   "Dinesh",
//   34,
//   true,
//   undefined,
//   null,
//   { color: "black" },
//   ["black", "blue", "pink"],
// ];
// console.log(myArray[2]);
// console.log(myArray[4]);
// console.log(typeof myArray[3]);
// console.log(myArray[5].length);
// console.log(myArray[5].color);
// console.log(myArray[5]["color"]);
// console.log(myArray.length);
// console.log(myArray[5]["co lor"]);
// console.log(myArray[6].length);
// console.log(myArray[6][0]);
// console.log(myArray[6][2 - 1]);

// var arr = [10, 20, 30, 40, 50, 60];
// var mapMethod = arr.map((value, index, array) => {
//   console.log(value + 10);
//   console.log(index);
//   console.log(array);
// });

//array of objects
// var books = [
//   {
//     name: "Dairy of a young girl",
//     aname: "anni frank",
//     price: 350,
//     publication: "spana",
//   },
//   {
//     name: "Mahabharatha",
//     aname: "vyasa",
//     price: 1000,
//     publication: "Renuka book house",
//   },
//   {
//     name: "Ramayana",
//     aname: "valmiki",
//     price: 500,
//     publication: "dinesh",
//   },
// ];
// console.log(books);

// var mapMethod = books.map((value, index, array) => {
//   console.log(value.name);
//   console.log(value.aname);
//   console.log(value.price);
//   console.log(value.publication);
//   console.log(index);
//   console.log(array);
// });

// var age = [6, 4, 667, 4, 3344, 5, 7, 464, 34, 56];
// var filterMethod = age.filter((value, index, arr) => {
//   if (value >= 18) {
//     console.log(value);
//   }
// });

// var a = [5, 4, 3, 2, 1];
//change the value
// var b = a.map((value) => {
//   return value * value;
// });
// console.log(b);
// console.log(a);
// console.log(a);
// var a = 10;
// console.log(a);

// console.log();
//Uncaught ReferenceError: Cannot access 'b' before initialization
//it is stored in temporal dead zone. so we need initilize some value.
//After that only we can used.

//console.log(b);
// const b = 20;
// console.log(b);

//Uncaught ReferenceError: Cannot access 'b' before initialization
//it is stored in temporal dead zone. so we need initilize some value.
//After that only we can used.

// console.log(c);
// let c = 110;
// console.log(c++);
// console.log(c);

// let sdate = new Date();
// console.log(sdate);
// console.log(sdate.getDate());
// console.log(sdate.getDay());
// console.log(sdate.getFullYear());
// console.log(sdate.getHours());
// console.log(sdate.getMilliseconds());
// console.log(sdate.getMinutes());

// console.log("==================");
// console.log(sdate.getMonth());
// console.log(sdate.getSeconds());
// console.log(sdate.getTime());

// let date1 = new Date("Dec/21/2021");
// console.log(date1);

// console.log(date1.getDate());
// console.log(date1.getDay());
// console.log(date1.getFullYear());
// console.log(date1.getHours());
// console.log(date1.getMilliseconds());
// console.log(date1.getMinutes());

// console.log("==================");
// console.log(date1.getMonth());
// console.log(date1.getSeconds());
// console.log(date1.getTime());

let date1 = new Date("Dec/21/2021");
let dateval = date1.getDate();
let monthval = date1.getMonth();
let yearval = date1.getFullYear();

let fullDate = `${monthval + 1}/${dateval}/${yearval}`;
console.log(fullDate);

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var fullDate1 = `${month[monthval]}/${dateval}/${yearval}`;
console.log(fullDate1);
