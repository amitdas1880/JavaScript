//Chapter - 1
//Create div tag, p tag, span tag, b tag, h1 etc
const ptag = document.createElement("p");

const h3tag = document.createElement("h3");

// Insert text inside the div tag, p tag, span tag, b tag etc
ptag.innerText = "Frontend Devloper";

h3tag.innerText = "BackEnd";
//create inside body element
const bodyelement = document.body;

// append div tag, p tag, span tag, b tag etc inside body of Html (You can add one or mode then one element at a time)
bodyelement.append(ptag, h3tag);

// put colour , increase fontsize, increase font-weigth, in div tag, p tag, span tag, b tag etc

ptag.style.color = "darkgreen";
ptag.style.fontSize = "50px";
ptag.style.fontWeight = "bold";
ptag.style.border = "2px solid red";
ptag.style.borderRadius = "20px";
ptag.style.padding = "5px 20px";
ptag.style.cursor="pointer";

// Chapter -> 2
// Create object of id='root'
const root = document.getElementById("root");
// Create object of class="mytext"
const mytext = document.getElementsByClassName("mytext");
//Create div tag, p tag, span tag, b tag, h1 etc
const paratag = document.createElement("p");

const boldtag = document.createElement("b");

// Insert text inside the div tag, p tag, span tag, b tag etc
paratag.innerText = "Full Stack Web Devloper";

boldtag.innerText = "FrontEnd & BackEnd";

// append div tag, p tag, span tag, b tag etc inside id='root' of Html
root.append(paratag, boldtag);

// Chapter - 3
/*
<div class="module">
  <div class ="module-body">
      <input type ="text">
      <button>Click</button>
    </div>
  </div>
*/

const model = document.createElement("div");
model.className = "module";

const modelbody = document.createElement("div");
modelbody.className = "module-body";

const input = document.createElement("input");
input.type = "text";

const submitbutton = document.createElement("button");
let buttontext = document.createTextNode("Click");
submitbutton.append(buttontext);


modelbody.appendChild(input, submitbutton);
model.appendChild(modelbody);
bodyelement.append(model);

//         OR
//bodyelement.append(model, modelbody, input, submitbutton);

//Chapter - 4
const paraElement = document.getElementById("uff")
function change() {
  paraElement.innerText = paraElement.innerText === "Frontend & Backend" ? "this is a span" : "Frontend & Backend";
}

// Chapter - 5

const hidebutton = document.getElementById('hidebutton');
hidebutton.addEventListener('click', function() {
  const input = document.getElementById('myinput');
  input.style.display = 'none';
});

// Chapter -6
function changeimg() {
  document.getElementById("myimage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyIX4aR1n_d20JZ7KgmQTVI_qW6DmhUBqK2yMThc-dou7_5j6GBwK4BXHd9I-417z_XY&usqp=CAU";

}


