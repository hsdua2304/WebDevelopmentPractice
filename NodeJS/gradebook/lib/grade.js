var gradeBook = {

    _grades : [],

    addGrade : function(newGrade){
        console.log(newGrade);
        this._grades.push(newGrade);
    },

    getCountOfGrades :  function(){
        return this._grades.length;
    },

    getAverage : function(){
        var total=0;
        for(var i = 0; i < this._grades.length; i++){
            total += this._grades[i];
        }

        return total/this._grades.length;
    },

    getLetterGrade : function(){
        var result = this.getAverage();

        if(result >= 90){
            return 'A';
        } else if(result >= 80){
            return 'B';
        } else if(result >= 70){
            return 'C';
        } else if(result >= 60){
            return 'D';
        } else if(result >= 50){
            return 'E';
        } else{
            return 'F';
        }
    },

    reset : function(){
        this._grades = [];
    }

};

exports.book = gradeBook;