// // Module Pattern
// Module Pattern is the collection of similar functions
// e.g functions to perform Database calls
// At its core it is just an object literal

var Repo = require('./taskRepository');

// Passing the JSON object in the Task object
var Task = function(data){
    this.name = data.name;
    this.completed = false;
}
Task.prototype.complete = function(){
    console.log('Completing task : ' + this.name);
    this.complete = true;    
}

Task.prototype.save = function(){
    console.log('Saving Task  : ' + this.name);
    // Calling save method in the repo with passing JSON object which we are getting
    // from the Task intialization
    Repo.save(this);
}

// Exporting the Task Object
module.exports = Task;