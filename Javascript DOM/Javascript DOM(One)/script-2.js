// Chapter - 7
//If you want to find all HTML elements that match a specified CSS selector (id, class names, tag, attributes)
/*
const x = document.querySelectorAll("p");
const y = document.querySelectorAll("p.part");
const z = document.querySelectorAll("#two"); 
const xyz= document.querySelectorAll(".nodepart");

console.log(x);
console.log(y);
console.log(z);
console.log(xyz);

*/
// Chapter - 8
// To change or modify the content of an HTML element is by using the innerHTML property.
document.getElementById("ab").innerHTML="Array & Loop";

// Chapter - 9 
// firstElementChild    nextElementSibling    lastElementChild   previousElementSibling
const element = document.querySelectorAll(".node")
console.log(element[0].firstElementChild.nextElementSibling.nextElementSibling.style.color = "blue")

