// Chapter - 1
/*
<section id="intro">
   <div class="myclass" id="one">
     <p id="oneby">
       Java
     </p>
   </div>
   <div class="classme" id="two">
     <p id="twoby">Html & Css</p>
     <p id="threeby">Javascript</p>
     <p id="threeby">React.js</p>
     
   </div>
 </section>

*/
// create object of body tag
const bodyelement = document.body;
//create section tag
const section = document.createElement ("section");
section.id = "intro";
// create div tag
const div = document.createElement("div");
div.className="myclass";
div.id="one";
// create p tag
const ptag = document.createElement("p");
ptag.id="oneby";
ptag.innerHTML = "Java";

div.appendChild(ptag);
section.appendChild(div);
bodyelement.append(section);
// create div tag
const div2 = document.createElement("div");
div2.className="classme";
div2.id="two";
// create p tag
const ptag1 = document.createElement("p");
ptag1.id="twoby";
ptag1.innerHTML = "Html & Css";
// create p tag
const ptag2 = document.createElement("p");
ptag2.id="threeby";
ptag2.innerHTML = "Javascript";

// create p tag
const ptag3 = document.createElement("p");
ptag3.id="fourby";
ptag3.innerHTML = "React.js";

div2.append(ptag1,ptag2,ptag3);
section.appendChild(div2);
bodyelement.append(section);

// Chapter - 2
console.log(section.firstChild);
console.log(section.lastChild);
console.log(section.lastChild.firstChild.style.color="blue");
console.log(section.lastChild.lastChild);
console.log(section.lastChild.firstChild.nextElementSibling.style.fontWeight = "bold");
                    // OR
console.log(section.lastChild.firstChild.nextSibling.style.fontSize = "20px");

// Chapter - 3
// insertBefore() method:-
const sec = document.getElementById("four");
const amazon = document.getElementById("four1");
const google = document.getElementById("four2");
sec.insertBefore(google,amazon);

// remove() method:-
// Example - 1
const dream11 = document.getElementById("four4");
dream11.remove();
// Example - 2
const parent = document.getElementById("four");
const child = document.getElementById("four5")
parent.removeChild(child);

// Modify the content of an HTML element.
document.getElementById("two1").innerHTML= "Html & Css";
document.getElementById("two2").innerText= "React.js & Angular.js";


// Function ,loop
function myfunction(){
  const para12 = document.querySelectorAll("#anu");
  // const para12 = document.querySelectorAll("#bnu");
  // const para12 = document.querySelectorAll("p");


  for(let i=0; i<para12.length; i++){
    para12[i].style.color = "coral";
    para12[i].style.fontWeight = "bold";
  }
}


// Chapter - 4

function validateForm(){
  let a = document.forms["myform"]["Your_Name"].value;
  if(a==""){
    alert ("Name must be filled out");
    return false;
  }
}