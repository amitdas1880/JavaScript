const bth = document.getElementById("bth");
const name = document.getElementById("name");
const age = document.getElementById("age");
const para = document.getElementById("para");

bth.addEventListener("click", data_display);

function data_display() {
  para.innerHTML += name.value + " " + age.value + "<br>";
  name.value = " ";
  age.value = " ";
};

// (Used Some Css ) 
  bth.style.backgroundColor = "Skyblue";
  bth.style.border = "2px solid black";
  bth.style.padding = "8px 10px";
  bth.style.color = "black";
  bth.style.borderRadius = "8px";
  bth.style.cursor = "pointer";



