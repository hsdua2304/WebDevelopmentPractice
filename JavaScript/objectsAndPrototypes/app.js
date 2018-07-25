// var Person = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;    
// };

// var john = new Person('John',1990,'Teacher');

// console.log(typeof(john));
// console.log(typeof(Person));
// console.log(typeof(Object));

// Object.Create

// var personProto = {
//     firstname : 'Harmandeep',
//     lastname : 'Singh',
//     calculateAge : function(){
//         console.log(2018 - this.yearOfBirth)
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = '1990';
// john.job = 'teacher';

// var jane = Object.create(personProto,{
//     name : {value : 'Jane'},
//     yearOfBirth : {value : '1990'},
//     job : {value : 'Teacher'}
// });

// FIRST CLASS FUNCTIONS

// Passing functions as arguments

// var years = [1990,1993,2002,2009,1989,1976];

// var calcFunction = function(arr,fn){
//     tempArr = [];
//     for(var i = 0; i < arr.length; i++){
//         tempArr[i] = fn(arr[i]);
//     }
//     return tempArr;
// }

// function calcAge(el){
//     return 2018 - el;
// }

// function calcHeartRate(el){
//     return Math.round(206.6 - (0.67*calcAge(el)));
// }

// var ages = calcFunction(years,calcAge);
// var heartRate = calcFunction(years,calcHeartRate);

// console.log(ages);
// console.log(heartRate);

// Returning function from a function

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log('Hi ' + name + ', What do you know about UX Designing?');
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log('How much year of experience do you have ' + name);
        }
    } else{
        return function(name){
            console.log('What do you do ? '+ name);
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Manini');

interviewQuestion('designer')('Rohan');


























