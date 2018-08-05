var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;    
};

var john = new Person('John',1990,'Teacher');

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

// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log('Hi ' + name + ', What do you know about UX Designing?');
//         }
//     } else if (job === 'teacher'){
//         return function(name){
//             console.log('How much year of experience do you have ' + name);
//         }
//     } else{
//         return function(name){
//             console.log('What do you do ? '+ name);
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Manini');

// interviewQuestion('designer')('Rohan');

// Call, Apply and Bind

// var years = [1990,1993,2002,2009,1989,1976];

var calcFunction = function(arr,fn){
    tempArr = [];
    for(var i = 0; i < arr.length; i++){
        tempArr[i] = fn(arr[i]);
    }
    return tempArr;
}

function calcAge(el){
    return 2018 - el;
}

function calcHeartRate(el){
    return Math.round(206.6 - (0.67*calcAge(el)));
}

function fullAge(limit,el){
    return el >= limit;
}
var ages = calcFunction(years,calcAge);
var fullAgeIndia = calcFunction(ages, fullAge.bind(this,20));

console.log(fullAgeIndia);


// Coding Challenge

// Self calling function
// (function(){
//     function quizQuestions(question,options,ans){
//         this.question = question;
//         this.options = options;
//         this.ans = ans;
//     }
    
//     quizQuestions.prototype.display = function(){
//         console.log(this.question);
    
//         for(var i = 0; i < this.options.length; i++){
//             console.log(i + ': ' + this.options[i] + '\n');
//         }
//     }
    
//     quizQuestions.prototype.checkAnswer = function(ans,callback){
        
//         var sc;

//         if(this.ans === ans){
//             console.log('Correct answer!!!');
//             sc = callback(true);
//         } else {
//             console.log('Wrong Answer!!! Please try again :(');
//             sc = callback(false);
//         }
//         this.displayScore(sc)
//     }

//     quizQuestions.prototype.displayScore = function(score){

//         console.log('Your Current Score : ' + score);
//         console.log('---------------------------------');
        

//     }
    
//     var q1 = new quizQuestions('What is the capital of India?',
//     ['Delhi','Mumbai','Chandigarh'],0);
    
//     var q2 = new quizQuestions('How many planets are the in the solar system?',
//     ['9','8','10','5'],1);
    
//     var q3 = new quizQuestions('Is JavaScript is client side or server side language?',
//     ['client','server','both'],2);

//     function score(){
//         var sc = 0;
//         return function(correct){
//             if(correct){
//                 sc++;
//             }
//             return sc;
//         }
//     }

//     var keepScore = score();

//     function nextQuestion(){
//         question = [q1,q2,q3];
    
//         var n = Math.floor(Math.random()*question.length);
        
//         question[n].display();
        
//         var answer = prompt('Enter your answer : ');
        
//         if(answer !== 'exit'){
//             question[n].checkAnswer(parseInt(answer),keepScore);

//             nextQuestion();
//         }
//     }

//     nextQuestion();
    

// })(); 





















