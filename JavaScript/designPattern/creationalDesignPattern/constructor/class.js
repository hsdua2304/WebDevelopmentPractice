'use strict';

class Task{
    constructor(name){
        this.name = name;
        this.completed = false;
    };

    complete(){
        console.log('Completing task : ' + this.name);
        this.complete = true;  
    };

    save(){
        console.log('Saving Task  : ' + this.name);
    };
}

var task1 = new Task('Create a Constructor');
var task2 = new Task('Create a Modules');
var task3 = new Task('Create a Singletons');
var task4 = new Task('Create a Prototypes');


// Each task has its own scope
task1.complete();
task2.complete();
task2.save();
task3.save();
task4.save();