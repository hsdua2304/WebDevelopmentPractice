//Strict mode causes the javascript to through error in places, where it otherwise, just silently fail
'use strict';

// -------------------------------------------------------------------------------------------
// // Object Literals
// -------------------------------------------------------------------------------------------

// //We can also add function to our object
//  var cat = {name : 'fluffy',
//             color:'white',
//             speak : function(){console.log('Meooowww');}
//         }
// //We can add propert without altering the object itself
// cat.age = 3;

//  console.log(cat.name);
//  console.log(cat.age);
//  console.log(cat.speak());

// -------------------------------------------------------------------------------------------
// Using constructor function to intialize the objects
// -------------------------------------------------------------------------------------------

// new keyword return a new empty object
//this keyword refer to the object which executing the current bit of code i.e. the global object window
// function cat(name,color){
//     this.name = name;
//     this.color = color;
// }

// var cat  = new cat('Billy','brown');

// // below code states : cat function returning the value which is equal to cat variable but cat() doesn;t return anything
// // var cat = cat();

// console.log(cat);
// console.log(window.color);

// -------------------------------------------------------------------------------------------
//Using Object.create() method to create objects
// -------------------------------------------------------------------------------------------

//behind the scene above method is also creating these properties for object creation
// var cat = Object.create(Object.prototype,
//     {
//         name : {
//             value : 'Fluffy',
//             enumerable : true,
//             writeable : true,
//             configurable : true
//         },
//         color : {
//             value : 'White',
//             enumerable : true,
//             writeable : true,
//             configurable : true
//         }
//         })

//         console.log(cat)

// -------------------------------------------------------------------------------------------
// // CREATING OBJECTS USING ES6 STANDARDS
// -------------------------------------------------------------------------------------------

// class Cat{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     speak(){
//         return 'Meoowwww';
//     }
// }

// var cat = new Cat('Billy',4);

// console.log(cat);
// console.log(cat.speak());

// -------------------------------------------------------------------------------------------
// BRACKET NOTATION TO ACCESS THE PROPERTIES
// -------------------------------------------------------------------------------------------

// var cat = {
//     name : {first:'Fluffy',last:'Kaur'},
//     color : 'white'
//  };

// //  Properties can also be accessible using the bracket notation
// console.log(cat['name']);
// // We can also set the value of new property
// cat['Eye Color'] = 'Green';
// console.log(cat['Eye Color']);

// console.log(cat.name);

// -------------------------------------------------------------------------------------------
// GET THE DESCRIPTION OF THE OBJECT'S PROPERTY
// -------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------
// // WRITABLE
// -------------------------------------------------------------------------------------------

// // Changing the writeable property
// Object.defineProperty(cat,'name',{writable:false});
// // writable property is only affecting the name literal not its sub elements.So, we have to freeze the whole name literal
// Object.freeze(cat.name)
// // Assigning new value to name
// // cat.name.first = 'Simran';

// console.log(Object.getOwnPropertyDescriptor(cat,'name'));

// console.log(cat.name.first)

// -------------------------------------------------------------------------------------------
// ENUMERABLE
// -------------------------------------------------------------------------------------------

// if set to false we cannot loop over the property

// Object.defineProperty(cat,'name',{enumerable:false})

// for(var propertyName in cat){
//     console.log(propertyName)
// }

// // setting the enumerable to false also effect the JSON string

// console.log(JSON.stringify(cat));

// -------------------------------------------------------------------------------------------
// CONFIGURABLE
// -------------------------------------------------------------------------------------------

// this property locks down the property from getting changed

// Object.defineProperty(cat,'name',{configurable:false})

// Object.defineProperty(cat,'name',{writable:false})

// // making a property configurable:false we cannot delete the property
// delete cat.name

// console.log(cat.name);

// -------------------------------------------------------------------------------------------
// GETTER AND SETTERS
// -------------------------------------------------------------------------------------------

// Object.defineProperty(cat,'fullname',{
//     get:function(){
//         return this.name.first + ' ' + this.name.last
//     },
//     set:function(value){
//         var firstLast = value.split(' ');
//         this.name.first = firstLast[0];
//         this.name.last = firstLast[1];
//     }
// })

// // for(var propertyName in cat){
// //     console.log(propertyName);
// //     console.log(Object.getOwnPropertyDescriptor(cat,propertyName));
// // }

// cat.fullname = 'Miller Singh'
// console.log(cat.fullname);
// console.log(cat.name.first);
// console.log(cat.name.last);

// -------------------------------------------------------------------------------------------
// JAVASCRIPT PROTOTYPES AND INHERITANCE
// -------------------------------------------------------------------------------------------

// var arr = ['one','two','three'];

// Object.defineProperty(arr,'last',{
//     get:function(){
//         return this[this.length-1]
//     }
// })
// console.log(arr[arr.length-1]);

// To make 'last' property valid for all the arrays we need to change the Array.prototype

// Object.defineProperty(Array.prototype,'last',{
//     get:function(){
//         return this[this.length-1]
//     }
// })

// var arr2 = ['four','five','six']

// console.log(arr.last);
// console.log(arr2.last);

// -------------------------------------------------------------------------------------------
// WHAT IS PROTOTYPE : PROTOTYPE IS AN OBJECT WHICH EXIST FOR EVERY FUNCTION IN THE JAVASCRIPT
// -------------------------------------------------------------------------------------------

// var myfunction = function(){}
// console.log(myfunction.prototype);//function prototype

// var cat = {name:'fluffy'}
// // console.log(obj.prototype);\
// console.log(cat.__proto__);//object prototype


// 1. FUNCTION PROTOTYPE : FUNCTION PROTOTYPE IS THE OBJECT INSTANCE THAT WILL BECOME THE PROTOTYPE
//                         FOR ALL THE OBJECTS CREATED USING THIS FUNCTION AS A CONSTRUTOR.

// 2. OBJECT PROTOTYPE : OBJECT PROTOTYPE IS THE OBJECT INSTANCE FROM WHICH THE OBJECT IS INHERITED.

// Create a function
// function Cat(name,color){
//     this.name = name;
//     this.color = color;
// }

// // Create and Intialize object

// var fluffy = new Cat('Fluffy','White')

// // both have same shape and pointing to the same instance or these are the same instance
// // console.log(Cat.prototype);
// // console.log(fluffy.__proto__);
// // console.log(Cat.prototype === fluffy.__proto__);

// // If we change the Cat() prototype
// Cat.prototype.age = 3;
// console.log(Cat.prototype);
// console.log(fluffy.__proto__);
// // It reflected in both prototypes
// // It also true if we create another instance of cat

// var muffin = new Cat('Muffin','Brown')
// console.log(muffin.__proto__);

// -------------------------------------------------------------------------------------------
// PROTOTYPE VS INSTANCE
// -------------------------------------------------------------------------------------------

function Cat(name,color){
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 3;

var fluffy = new Cat('Fluffy','White');
var muffin = new Cat('Muffin','Brown');

//We are adding the age property to the instance property for fluffy
// both instance still have age property define at the Prototype level
// Instance property override the prototype property in case of fluffy

fluffy.age = 5;
console.log(fluffy);
console.log(muffin);
console.log(fluffy.__proto__.age,muffin.__proto__.age);
console.log(fluffy.age,muffin.age,);

console.log(Object.keys(fluffy));

console.log(Object.keys(muffin));

