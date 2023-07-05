//Example -1 (Display javascript object in HTML)
/*
const myObj = {
  name: "Amit",
  age: 27,
  firstcourse: "Frontend",
  secondcorse: "Backend",

  companyjob: {
    comp1: "Google",
    comp2: "Amazon",
    comp3: "Flipkart"
  },

}
//document.getElementById("demo").innerHTML = myObj;

//Note:- if you want to add single element of object in Htlm.
document.getElementById("demo").innerHTML = myObj.name + " =>  " + myObj.companyjob.comp1;

*/

//Example -2 (Display javascript object in HTML)
// Note:-Any JavaScript object can be converted to an array using Object.values():
/*
const myObj = {
  name: "Amit",
  age: 27,
  firstcourse: "Frontend",
  secondcorse: "Backend",

  companyjob: {
    comp1: "Google",
    comp2: "Amazon",
    comp3: "Flipkart"
  },

}

const array = Object.values(myObj);
document.getElementById("demo").innerHTML = array;

*/

//Example -3 (Display javascript object in HTML)
//Note:-Getters and setters allow you to define Object
/*
const myObj = {
  firstname: "Amit",
  lastname:"Das",
  language:"english",
  get lang (){
    return this.language.toUpperCase();
  }
};

document.getElementById("demo").innerHTML = myObj.lang;
*/

//Example -4 (Display javascript object in HTML)
//Note:-Getters and setters allow you to define Object
/*
const myObj = {
  firstname: "Amit",
  lastname:"Das",
  age:27,
  address:"",
  set addr (addr){
    this.address=addr.toUpperCase();
  }
  
};

myObj.addr="Golmuri";
document.getElementById("demo").innerHTML = myObj.address;
*/


//Example -5 (Display javascript object in HTML)
//Note:-Getters and setters allow you to define Object

const myObj = {
    firstname: "Amit",
    lastname:"Das",
    age:27,
    ////Method - 1
    fullName: function() {
      return this.firstname + " " + this.lastname+" "+this.age;
    },
    ////Method - 2
    get FULLNAME() {
      return this.firstname + " " + this.lastname;
    },
    
  };
  //Method - 1
  document.getElementById("demo").innerHTML = myObj.fullName();
  
  //Method - 2
  //document.getElementById("demo").innerHTML = myObj.FULLNAME;
  
  
  
  