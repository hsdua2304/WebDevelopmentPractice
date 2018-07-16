// Constructor Pattern
// Used to create new objects with their own object scope.
// a. New keyword
//     i. Create a new object
//     ii. Link to an object prototype
//     iii. Binds this to the new object scope
//     iv. Returns this


var Task = function(name){
    this.name = name;
    this.completed = false;

    // Created function prototype below
    // this.complete = function(){
    //     console.log('Completing task : ' + this.name);
    //     this.complete = true;
    // }

    // this.save = function(){
    //     console.log('Saving Task  : ' + this.name);
    // }   
}
// When we create 4 objects each of the object's
// variable and fucntions were recreated all four times

// To avoid such senario's we create a object's protoype
// Prototype is the object instance from which new 
// objects will be created using the constructor

// The prototype will have a copy of functions but the objects derived
// from the Task object will not have the copy.
Task.prototype.complete = function(){
    console.log('Completing task : ' + this.name);
    this.complete = true;    
}

Task.prototype.save = function(){
    console.log('Saving Task  : ' + this.name);   
}

// Exporting the Task Object
module.exports = Task;

// var task1 = new Task('Create a Constructor');
// var task2 = new Task('Create a Modules');
// var task3 = new Task('Create a Singletons');
// var task4 = new Task('Create a Prototypes');


// Each task has its own scope
// task1.complete();
// task2.complete();
// task2.save();
// task3.save();
// task4.save();

// moving the declaration and call in main.js