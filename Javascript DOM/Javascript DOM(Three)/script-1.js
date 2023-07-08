// Chapter - 1
const x = document.getElementById("demo")
function click_here() {
  x.innerHTML = "Full Stack Web Devloper";
  x.style.color = "Green";
  x.style.fontWeight = "bold";
  x.style.fontSize = "25px";
}

// Chapter - 2
const a = document.getElementById("btn");
a.onclick = myfunction;
function myfunction() {
  a.innerHTML = "JavaScript";
  a.style.height = "70px";
  a.style.minWidth = "100px";
  a.style.background = "blue";
  a.style.color = "white";
  a.style.borderRadius = "20px";
  a.style.fontSize = "18px";
  a.style.border = "2px solid red";
  a.style.cursor = "pointer";

  a.onclick = fun;
}

function fun() {
  a.innerHTML = "Html & Css";
  a.style.height = "70px";
  a.style.minWidth = "100px";
  a.style.background = "green";
  a.style.color = "white";
  a.style.borderRadius = "20px";
  a.style.fontSize = "18px";
  a.style.border = "2px solid red";
  a.style.cursor = "pointer";

  a.onclick = disable;
}

function disable() {
  a.style.display = "none";
  a.style.cursor = "pointer";
}


// Chapter - 3

function uppercase() {
  const ab = document.getElementById("input");
  ab.value = ab.value.toUpperCase();
}

// Chapter - 4

function over(obj) {
  obj.innerHTML = "Welcome Everyone"
}

function out(obj) {
  obj.innerHTML = "Thank You For Visit Again"
}

function down(obj) {
  obj.innerHTML = "Click"
}

// Example - 2

function mdown(obj) {
  obj.innerHTML = "JavaScript"
}

function leave(obj) {
  obj.innerHTML = "Call you letter"
}


function move(obj) {
  obj.innerHTML = "I will see you"
}
