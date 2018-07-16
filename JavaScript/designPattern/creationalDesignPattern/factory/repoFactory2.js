var repoFactory = function () {

    var repos = this;
    var repoList = [{name:'task',source:'./taskRepository'},
                    {name:'user',source:'./userRepository'},
                    {name:'project',source:'./projectRepository'}];

    repoList.forEach(function(repo){
        repos[repo.name] = require(repo.source)
    });
};

//     this.getRepo = function (repoType) {
//         if (repoType === 'task') {
//             if (this.taskRepo) {
//                 console.log('Retrieving from cache');
//                 return this.taskRepo;
//             } else {
//                 this.taskRepo = require('./taskRepository');
//                 // config -- 
//                 return this.taskRepo;
//             }

//         }
//         if (repoType === 'user') {
//             var userRepo = require('./userRepository');
//             return userRepo;
//         }
//         if (repoType === 'project') {
//             var projectRepo = require('./projectRepository');
//             return projectRepo;
//         }
//     }
// };
module.exports = new repoFactory;