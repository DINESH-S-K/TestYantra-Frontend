//Rest Operator can pass Multiple arguments

let add = function (...nums) {
  sum = 0;
  for (const key in nums) {
    sum = sum + nums[key];
  }
  console.log(`sum - ${sum}`);
};
add(1);
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);

//destructuring the object
let obj = {
  name1: "Ram",
  age: 20,
  id: 15,
};

const { name1, age, id } = obj;
//Simply varaiable name itself getting the value
//instead of object_name.attribute = attribute
console.log(obj.name1, name1);
console.log(obj.age, age);
console.log(obj.id, id);

//desstructuring the array
const hobbies = ["dancing", "reading", "walking"];
const [hobbie1, hobbie2, hobbie3] = hobbies;

console.log(
  `hobbie1 - ${hobbie1}`,
  `hobbie2 - ${hobbie2}`,
  `hobbie3 - ${hobbie3}`
);
//All the window object is global
console.log(window);

var a = 20;

//window.alert();

console.log(window.document);

console.log(window.history);

console.log(window.navigator);

console.log(window.navigator.geolocation);

navigator.geolocation.getCurrentPosition((loc) => {
  console.log("location", loc);
});
