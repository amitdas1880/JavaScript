// EventListener
/*Syntax : 
document.getElementById("id").addEventListener(event, function(){
  Contant of the function
}, useCapture);
*/

//Chapter - 5

let a1 = 79;
let b1 = 82;

const bth = document.getElementById("bth");
bth.addEventListener("click", function() {
  myfun(a1, b1);
});
function myfun(a1, b1) {
  //document.getElementById("addemo").innerHTML=a1*b1;
  document.getElementById("addemo").innerHTML = Math.max(a1, b1);
}

document.getElementById("mpl").addEventListener("click", function() {
  document.getElementById("addemo").innerText = "Good to see you again";
});

//Chapter - 6
const ele = document.getElementById("clickIt");
ele.style.cursor="pointer";

ele.addEventListener("click", clickfunction)
ele.addEventListener("mouseover", mouseover)
ele.addEventListener("mouseout", mouseout)

function clickfunction() {
  document.getElementById("effect").innerHTML += "JavaScript" + "<br>";
}

function mouseover() {
  document.getElementById("effect").innerHTML += "Html & Css" + "<br>";
}

function mouseout() {
  document.getElementById("effect").innerHTML += "React.js & Angular.js" + "<br>";
}
