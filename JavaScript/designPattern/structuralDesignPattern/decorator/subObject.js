var Task = function(name){
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function(){
    console.log("Completing task : " + this.name);
    this.completed = true;
};

Task.prototype.save = function(){
    console.log('Saving Task : ' + this.name);
};

var legacyTask = new Task('LegacyTask');
legacyTask.complete();
legacyTask.save();

var UrgentTask = function(name,priority){
    Task.call(this , name);
    this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function(){
    console.log('Notifying : ' + this.name );
};

UrgentTask.prototype.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}

var ut = new UrgentTask('Urgent Task',1);

var ut2 = new UrgentTask('Urgent Task 2',2);

ut2.complete();
ut2.save();
console.log(ut2)

