var Task = function(name){
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function(){
    console.log("Completing task : " + this.name);
    this.complete = true;
};

Task.prototype.save = function(){
    console.log('Saving Task : ' + this.name);
};

var legacyTask = new Task('LegacyTask');
// legacyTask.complete();
// legacyTask.save();

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 3;
urgentTask.notify = function(){
    console.log('notifying important task');
}

urgentTask.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}

console.log(Object.keys(urgentTask));
// console.log(Object.keys(legacyTask));


// // urgentTask.notify();
// urgentTask.complete();
urgentTask.save()