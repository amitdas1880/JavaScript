// Chapter - 1
const btn = document.getElementById("btn");
const intro = document.getElementById("intro");

btn.addEventListener("click", show_and_hide);

function show_and_hide() {
  if (intro.style.display != "none") {
    intro.style.display = "none";
    btn.innerHTML = "Show";
    showing();
  }
  else {
    intro.style.display = "block";
    btn.innerHTML = "Hide";
    hidding();
  }
}

// (Used Some Css ) (Used Some Function)
function hidding() {
  btn.style.backgroundColor = "red";
  btn.style.border = "2px solid black";
  btn.style.padding = "10px 14px";
  btn.style.color = "white";
  btn.style.borderRadius = "11px";
  btn.style.cursor = "pointer";
};


function showing() {
  btn.style.backgroundColor = "green";
  btn.style.border = "2px solid black";
  btn.style.padding = "10px 14px";
  btn.style.color = "white";
  btn.style.borderRadius = "11px";
  btn.style.cursor = "pointer";
};
// (Used Some Css in Button)
btn.innerHTML = hidding();
btn.innerText = "Hide" ;