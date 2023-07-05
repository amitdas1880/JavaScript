// Arrow Function
/*
Syntax :- 
const myfunction = (x, y) => {
return x * y 
};

*/

// Example - 1(Rest Parameters)(...)
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.
/*
function myfunction (...para){
  let sum=0;
  for(let arg of para)
  sum=sum+arg;
  return sum;
}
 const x = myfunction(12,36,45,78,39,48,86,62,42,15,59,35,57,25);
document.getElementById("demo").innerHTML = x;
*/


// Example - 2
/*
function myfunction (...abc){
  let max=0;
  for(let i=0; i<arguments.length; i++){
    if(max<arguments[i]){
      max=arguments[i];
    }
  }
  return max;
}
document.getElementById("demo").innerHTML = myfunction(12,45,78,23,85,45,79,83,95,100,12,45,19);

*/

// Example - 3 (Use of "this" keyword in Object)
/*
const myobject ={
  firstname:"Amit",
  lastname:"das",
  fullname:function(){
    return this.firstname + " "+ this.lastname;
  }  
};

document.getElementById("demo").innerHTML = myobject.fullname();
*/


// Example - 4 (Use of "this" keyword in Function)
/*
 function myfunction (arg1,arg2){         //create a function
    this.firstname = arg1;
    this.lastname =arg2;
}

const myobj = new myfunction("Amit", "Das");   // create a new object

document.getElementById("demo").innerHTML = myobj.firstname ;


*/

// Example - 5 ("call()" function)
/*
const person ={       //object create
  fullname : function (){
    return this.firstname +" "+ this.lastname 
  }
  
};

const person1 = {
  firstname : "Amit",
  lastname : "Das"
}
const person2 = {
  firstname : "Rupai",
  lastname : "Das"
}

document.getElementById("demo").innerHTML = person.fullname.call(person2);
*/

// Example - 6 ("call()" function with argument)
/*
const person ={       //object create
  fullname : function (city,country){
    return this.firstname +" "+ this.lastname + " "+ city +" "+ country 
  }
  
};

const person1 = {
  firstname : "Amit",
  lastname : "Das"
}
const person2 = {
  firstname : "Rupai",
  lastname : "Das"
}

document.getElementById("demo").innerHTML = person.fullname.call(person2, "Bankura","India" );
*/



// Example - 7 ("apply()" function)

/*
const person ={       //object create
  fullname : function (){
    return this.firstname +" "+ this.lastname 
  }
  
};

const person1 = {
  firstname : "Amit",
  lastname : "Das"
}
const person2 = {
  firstname : "Rupai",
  lastname : "Das"
}

document.getElementById("demo").innerHTML = person.fullname.apply(person2);
*/

// Example - 8 ("apply()" function with argument)

// Note - The call() method takes arguments separately.        The apply() method takes arguments as an array.

/*
const person ={       //object create
  fullname : function (city,country){
    return this.firstname +" "+ this.lastname + " "+ city +" "+ country 
  }
  
};

const person1 = {
  firstname : "Amit",
  lastname : "Das"
}
const person2 = {
  firstname : "Rupai",
  lastname : "Das"
}

document.getElementById("demo").innerHTML = person.fullname.apply(person2, ["Bankura","India"] );

*/

// Example - 9
//document.getElementById("demo").innerHTML = Math.max(5,8,7,9,10,15,14,16,12);

//Note:- Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

 //document.getElementById("demo").innerHTML = Math.max.apply(null,[5,8,7,9,10,15,19,18,12]);

                  //OR
//document.getElementById("demo").innerHTML = Math.max.apply(Math,[5,8,7,9,10,15,14,18,12]);
                  //OR
//document.getElementById("demo").innerHTML = Math.max.apply(" ",[5,8,7,9,10,15,14,20,12]);
                  //OR
document.getElementById("demo").innerHTML = Math.max.apply(0,[5,8,7,9,10,25,14,18,12]);

