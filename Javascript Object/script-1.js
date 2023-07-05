// Example -1
/*
class RailwayForm {
  submit() {
    alert(this.name + ": form is submited")
  }
  cancel() {
    alert(this.name + ": form is Canceled")
  }

  filldetail(name, age) {
    this.name = name
    this.age = age
  }
}


let harry = new RailwayForm()
let mohit = new RailwayForm()
//function call
mohit.filldetail("mohit", 25)
harry.filldetail("harry", 17)
harry.submit();
mohit.submit();
mohit.cancel();
*/

// Example - 2
/*
class RailwayForm {
    submit(){
        alert (this.name+": form is submited")
      }
      cancel(){
        alert (this.name+": form is Canceled")
      }
    
    filldetail(name, age){
      this.name = name 
      this.age = age 

      if(this.age>=18){
        this.submit()
      }
      else{
        this.cancel()
      }
    }
}
  
  
  let harry = new RailwayForm()
  let mohit = new RailwayForm()
  //function call
  mohit.filldetail("mohit",25)
  harry.filldetail("harry",17)
//   harry.submit();
//   mohit.submit();
//   mohit.cancel();
*/

// Example -3
/*
const person = {
  firstname: "Amit",
  lastname: "Das",
  age: 27,
  eyecolor: "Black",
  address: function() {
    console.log("Golmuri,Jamshedpur")
  }
};
console.log(person)
console.log(person.firstname)
console.log(person.address)
*/

// Example - 4
/*
const person = {
  firstname: "Amit",
  lastname: "Das",
  age: 27,
  city: "Jamshedpur",
  address: function() {
    console.log("Golmuri,Jamshedpur")
  }
};
// Update element detail
person.age = 28;
person.city = "bangalore";
console.log(person)
console.log(person.firstname)
console.log(person.address)
console.log(person.age + " " + person.city)
// Delete element detail
delete person.address;
console.log(person.address)
*/

// Example -5
/*
Acciojob={
  firstcourse:"Frontend",
  secondcorse:"Backend",
  
  companyjob:{
    comp1:"Google",
    comp2:"Amazon",
    comp3:"Flipkart"
  },

  salary: function() {
    console.log("Minimum Salary "+30,00,000)
  }
}
console.log(Acciojob.companyjob.comp1);
console.log(Acciojob.salary);
*/

//Example -6

const myObj = {
  name: "Amit",
  age: 27,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
console.log(myObj.cars[1]);

