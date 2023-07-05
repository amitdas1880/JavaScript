//You can create a Map by passing an Array to the new Map() constructor:

//Example - 1
/*
const fruits = new Map([
  ["apple", 800],
  ["mango",900],
  ["banana",700],
  ["coconut",500]
]);
document.getElementById("demo").innerHTML=fruits.get("coconut");
*/


//Example - 2
//You can add elements to a Map with the set() method:
/*
const fruits = new Map();          //Create map

fruits.set("apple",500);          //Set map value
fruits.set("orange",600);
fruits.set("mango",450);

document.getElementById("demo").innerHTML=fruits.get("mango")
*/


// Example - 3
/*
// Use of some other function
const fruits = new Map([
  ["Coconut", "Rs 25 pic"],
  ["Mango", "Rs 40 perkg"],
  ["Banana", "Rs 60 per dozen"],
  ["Orange", "Rs 50 perkg"],
  ["Apple","Rs 80 perkg"]
]);
//function - 1
document.getElementById("demo").innerHTML = fruits.size;

//function - 2
// document.getElementById("demo").innerHTML=fruits.get("Apple");
// fruits.delete("Apple");
// document.getElementById("demo").innerHTML=fruits.has("Apple");

//function - 3
// fruits.clear();
// document.getElementById("demo").innerHTML = fruits.size;
*/


//Example - 4

// Note:- The forEach() method invokes a callback for each key/value pair in a Map:

const fruits = new Map([
    ["Coconut", "Rs 25 pic"],
    ["Mango", "Rs 40 perkg"],
    ["Banana", "Rs 60 per dozen"],
    ["Orange", "Rs 50 perkg"],
    ["Apple","Rs 80 perkg"]
  ]);
  
  
  //method = 1
  let text = "";
  fruits.forEach(function(value , key){
    text = text + key + " =  "+ value+"<br>"
  })
  document.getElementById("demo").innerHTML = text;
  
  
  //method - 2
  //let text = "";
  // for (const x of fruits.entries()) {
  //   text =text + x + "<br>";
  // }
  //document.getElementById("demo").innerHTML = text;
  
  
  //method = 3
  //let text = "";
  // for (const x of fruits.keys()) {
  // text =text + x + "<br>";
  // }
  //document.getElementById("demo").innerHTML = text;
  
  //method = 4
  //let text = "";
  // for (const x of fruits.values()) {
  // text =text + x + "<br>";
  // }
  //document.getElementById("demo").innerHTML = text;
  