// Exercise 2
//
// Below are two objects of the same "format".
// Each object is a mapping between individual people
// and their favourite desserts
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: "brownies",
  fred: "tiramisu",
  lisa: "chocolate cake",
  riley: "ice-cream",
  sunny: "cheese cake",
  john: "ice-cream",
  beth: "cheese cake",
  summer: "ice-cream",
  morty: "apple pie",
  rick: "brownies",
  andrew: "cheese cake",
  jerry: "rhubard pie",
  "jean-luc": "cheese cake",
  tiffany: "waffles",
  melissa: "profiteroles",
};

const favoriteDessertsGroupB = {
  alice: "pie",
  betty: "deep-fried mars bar",
  colin: "gummy bears",
  damien: "child tears",
  ellicia: "panda express",
  fertrude: "gummy bears",
  glinda: "pie",
  hethel: "not applicable",
  irsula: "rum cake",
  judas: "revenge (served cold)",
  khloe: "pie",
  lyndon: "easter eggs",
  minda: "dessert",
};

// Write a function which takes one of these objects and puts them into an
// array which is sorted from most popular to least popular. For example,
// in Group B, the most popular dessert is "pie", so it should be first
// in the array.
//
// For "ties", the order doesn't matter.
//
// HINT: You'll need to do this in 2 steps:
// - First, count how often each dessert appears
// - Second, put them in order

// Your function should work with both objects and any other objects of the same shape.

function sortByPopularity(obj) {
  // Write code
  //var counts = {};

// for (var i = 0; i < arr.length; i++) {
//   var num = arr[i];
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }
//throw everything into a new array for access (groupA + groupB)
// take the values by count and throw them PLUS their key in a new array, then just use sort() on
//the new value (occurence) applied to them

//const count = array.reduce((acc, cur) => cur.id === id ? ++acc : acc, 0);

  let dessertArray = Object.values(obj);

  let dessertCounter = dessertArray.reduce((acc, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});

  //taking the items from the array and giving them a number each time they occur

  let dessertOrder = [];
  let dessertNames = Object.keys(dessertCounter);
  let dessertCounts = Object.values(dessertCounter);

  //taking key/value pairs and pushing them into our new array for sorting

  dessertNames.forEach((item, index) => {
    let name = item;
    let count = dessertCounts[index];
    dessertOrder.push({name, count});
  });

  dessertOrder.sort((item1, item2) => {
    if (item1.count > item2.count) {
      return -1;
    } else {
      return 1;
    }
  });

  console.log(dessertOrder);

  // { name: 'cheese cake', count: 4 },
  // { name: 'ice-cream', count: 3 },
  // { name: 'brownies', count: 2 },
  // { name: 'tiramisu', count: 1 },
  // { name: 'chocolate cake', count: 1 },
  // { name: 'apple pie', count: 1 },
  // { name: 'rhubard pie', count: 1 },
  // { name: 'waffles', count: 1 },
  // { name: 'profiteroles', count: 1 }

  let sortedArray = dessertOrder.map((obj) => {
    return obj.name;
  });

  return sortedArray;

}

// Verification via console.log()
console.log(
  "Popular desserts in Group A:",
  sortByPopularity(favoriteDessertsGroupA)
);
console.log(
  "Popular desserts in Group B:",
  sortByPopularity(favoriteDessertsGroupB)
);

// Test your code: "yarn test exercise-2"

module.exports = sortByPopularity;
