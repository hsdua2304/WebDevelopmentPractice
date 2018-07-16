var Task = require('./task');
var repoFactory = require('./repoFactory2');

// Replacing this with repoFactory
// ---------------------------
// var taskRepo = require('./taskRepository');
// var userRepo = require('./userRepository');
// var projectRepo = require('./projectRepository')
// ---------------------------
// var task1 = new Task(repoFactory.getRepo('task').get(1));
var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

// var task2 = new Task({name : 'Create a Modules'});
// var task3 = new Task({name : 'Create a Singletons'});
// var task4 = new Task({name : 'Create a Prototypes'});
// var user = repoFactory.getRepo('user').get(1);
var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;


// console.log(task1);
task1.save()