/*
Function Declaration(Syntex)

function functionName(parameters) {
  // code to be executed
}  */

/*
// Example - 1
const x = myfunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myfunction(a,b) {
  return a*b;
}
*/


// Example - 2
/*
const myfunction = new Function("a","b", "return a+b");
document.getElementById("demo").innerHTML = myfunction(10,18);
*/

// Example - 3  (in this function new keyword not used)
/*
const myfunction = function(a,b)
  {
    return a/b;
  };
document.getElementById("demo").innerHTML = myfunction(18,3);
*/

//Example - 4 (Missing parameters)
/*
document.getElementById("demo").innerHTML = myfunction(5);

function myfunction(a,b){
  if(b===undefined){
    b=10;
    return a*b;
  }
};
*/

//Example - 5 (Default parameters)

document.getElementById("demo").innerHTML = myfunction(5);

function myfunction(a,b=18){
  
    return a*b;
  
};









