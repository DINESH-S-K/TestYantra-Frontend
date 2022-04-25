let num = 7;
let copyNum = num;
/*it will not affect the original data 
all the primitive value memory created in stack memory*/
console.log(num, copyNum + 10);

/*Reference types will affect the copied array. Because both the array will pointed
towards the same memory address.Solving by
1.Deep copy
2.Shallow copy*/
let arr = [1, 2, 3, 4, 5, 6];
let copyArr = arr;
console.log(arr, copyArr);
copyArr.push(7);
console.log(arr, copyArr);
//console.log("\n");

/*Using Sperad operator(...)
Shallow Copy[first layer of the array or object]
All the reference data type memory will be created in heap memory*/
let arr1 = [1, 2, 3, 4, 5, 6];
let copyArr1 = [...arr1];
console.log(arr1, copyArr1);
copyArr.push(7);
console.log(arr1, copyArr1);

//Object copy
let person = { pname: "Dinesh", age: 20, percentage: "90%" };
let copyPerson = { ...person };
console.log(person, copyPerson);
person.pname = "Saravanan";
person.salary = 30000;
copyPerson.age = 22;
console.log(person, copyPerson);

//deepCopy of an Object
const movie = {
  movieName: "KGF 2",
  director: "Prashanth Neel",
  actor: "Yash",
  details: {
    heroine: "Srinidhi Shetty",
    budjet: "100 crore",
  },
};
// in shallow copy only first layer will be copied.
//Nested Object will have the same reference, so it will affect both.
let movieCopy = { ...movie };
movie.numberOfDays = 100;

console.log(movie, "Movies");
console.log(movieCopy, "movieCopy");

movie.details.heroine = "Sri Divya";
console.log(movie, "Movies");
console.log(movieCopy, "movieCopy");

//Deep copy of an Object
let deepCopy = { ...movie, details: { ...movie.details } };

deepCopy.details.heroine = "Alia";
console.log(movie, movieCopy, deepCopy);

//Example - 2
let employee = {
  ename: "Dinesh",
  age: 20,
  salary: 50000,
  personDetails: {
    fatherName: "Srinivasan",
    motherName: "Kokila",
  },
};

let copyEmp = { ...employee };
employee.id = 15;
copyEmp.personDetails = { app: "" };

console.log(employee, "Employee");
console.log(copyEmp, "EmployeeCopy");

//employee.personDetails.motherName = "Kokila P";

let deepCopy1 = { ...employee, personDetails: { ...employee.personDetails } };
deepCopy1.op = "hi";
console.log(deepCopy1, "DeepCopy");
console.log(employee, "Employee");
console.log(copyEmp, "EmployeeCopy");
