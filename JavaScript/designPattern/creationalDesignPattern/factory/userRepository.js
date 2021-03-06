var repo = function(){
    
    //This variable is private therfore we can define the database related stuff above here
    // and only the methods within this repo object can have access to it
    var db = {};

    //Writing the function above ande returning them at the end of the return statement is also called
    // Revealling Module Pattern

    // Return a JSON Object
    var get = function(id){
        console.log('Getting User : ' + id);
        return{
            name:'Harmandeep Singh'
        }    
    }
    // Passing a JSON object in task
    var save = function(task){
        console.log('Saving Task ' + task.name + ' to DB.');
        
    }

    return{
        get : get ,
        save : save
    }
}

module.exports = repo();