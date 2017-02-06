// #1  ###################
// # Scope
// Given the following function
// ```
// function grandpa(){
//     var playball = "homerun";

//     function dad(){
//         var playball = "touchdown";

//         function son(){
//             var playnintendo = "Mario";
//         }
//     }

//     function uncle(){
//         var badjoke = "Har";

//         function cousin(){

//         }
//     }
// }
// ```

// Remove entries from the array until only correct answers remain

// Which function(s) access the playball variable and get homerun (Delete wrong answers, leave correct ones)
var scopeArray1 = ["grandpa"];

// Which function(s) access the playball variable and get touchdown (Delete wrong answers, leave correct ones)
var scopeArray2 = ["grandpa", "dad"];

// Which function(s) access the badjoke variable and get undefined (Delete wrong answers, leave correct ones)
var scopeArray3 = ["grandpa", "dad", "son"];

// Which functions accesss the badjoke variable and get "Har" (Delete wrong answers, leave correct ones)
var scopeArray4 = ["uncle"];

// Which functions access the playnintendo variable and get Mario (Delete wrong answers, leave correct ones)
var scopeArray5 = ["son"];


// #2  ###################
// # Promises
var foo;
/* Write a function called async.
  Use $q to create a promise object and return the promise.
  Call setTimeout on a function which sets the variable foo (above) to 'bar' and then resolve the promise when setTimeout completes.
*/

async = function(){
  var defer = $q.defer();
  function setTimeout(){
    var foo = 'bar';
  }
  defer.resolve(setTimeout());
  return defer.promise;
};




// #3  ###################
// # Context 1
// Write a function called context1 that takes in 4 parameters: A function called myFn, an object called context, param1, and param2.
// Invoke myFn and explicitly set the context to the object called context and pass in param1 and param2 in order. Return the result.
function context1(myFn, context, param1, param2){
  return myFn.call(context, param1, param2);
}



// #4  ###################
// # Context 2
// Write a function called context2 that takes in 3 parameters: A function called myFn, an object called context, and an array called params.
// Invoke myFn and explicitly set the context to the object called context and pass in the params array. Return the result.

function context2(myFn, context, params){
  return myFn.apply(context, params);
}


// #5  ###################
// # Context 3
// Write a function called context3 that takes in 2 parameters: A function called myFn, and an object called context.
// Make sure the function is permanently linked to the context and return it.
function context3(myFn, context){
  return myFn.bind(context);
}



// #6  ###################
// # Constructor Function
// Make a constructor function called taco that takes in 3 parameters: shell, meat, veggies and assigns them to identically named properties.
function Taco(shell, meat, veggies){
  this.shell = shell;
  this.meat = meat;
  this.veggies = meat;
}



// #7  ###################
// # Implicit binding
// Make a constructor function called burrito. Give it a property called percentLeft and set it equal to 100. Give it another property called eat that is a function. When eat is invoked it uses context to subtract 25 from the percentLeft property on the burrito.
function Burrito() {
  this.percentLeft = 100;
  this.eat = function(){
    this.percentLeft -= 25;
  };
}


// #8  ###################
// # Prototype 1
// Add a prototype function to the Array type that doubles the value of every item in the array and returns the modified array.
Array.prototype.doubler = function(){
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i] *= 2;
    console.log(this);

  }
  return this;

};



// #9  ###################
// # Prototype 2
// Write a constructor function called chimichanga. Give it a property called percentLeft and set it equal to 100. Give it a prototype function called eat. When eat is invoked it uses context to subtract 20 from the percentLeft property on the chimichanga.
// function Chimichanga(){
//   this.percentLeft = 100;
//   this.eat = function(){
//     this.percentLeft -= 20;
//   };
//   return this.percentLeft;
//
// }
function Chimichanga(){
  this.percentLeft = 100;
  Chimichanga.prototype.eat = function(){
  this.percentLeft -= 20;
  };
}



// #10  ###################
// # Closure 1
// Write a function called sentence machine that takes in a parameter called partOne and returns a function called sentenceSmasher.
// When sentenceSmasher is invoked it should take in a parameter called partTwo and return a new string that adds partOne and partTwo together.
function sentenceMachine(partOne){
  return function sentanceSmasher(partTwo){
    return partOne + partTwo;
  };
}


// #11  ###################
// # Closure 2
// Write a function called subway that takes in one parameter called personName.
// It needs to keep track of what ingredients the person wants on their sandwich.
// It needs to do this by returning a function called addIngredient.
// When addIngredient is invoked it saves that ingredient with previously added ingredients and then returns an object that looks like this (Replace the parts wrapped in <> with correct data):
// ```
// {
//     orderPerson: <Person name goes here>,
//     ingredients: <Array of ingredients goes here>
// }
// ```
// function subway(personName){
//   return function(newIngredients){
//     var ingredients = [];
//     var added = ingredients.push(newIngredients);
//     return {
//       orderPerson: personName,
//       ingredients: added
//
//     };
//   };
// }
function subway(personName){

    this.personName = personName;
    this.ingredients = [];

   return function ingredient(ingredient){
    this.ingredients.push(ingredient);
    console.log(ingredients);
    };

  }





// #12  ###################
// # Type checking
// Write a function called compareValues that takes in 2 parameters.
// If both parameters are the same type and the same value return "Exact match".
// If both parameters have the same value but are different types return "Different types".
// Otherwise return "Different values".
function compareValues(param1, param2){
  if(param1 === param2){
    return "Exact match";
  }else if (param1 == param2){
  return  "Different types";
  }else return "Different values";
}
