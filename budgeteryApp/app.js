var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    Expense.prototype.calculatePercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value/totalIncome)*100);
        } else {
            this.percentage = -1;
        }
    }

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    function calculateTotal(type){
        var sum = 0;

        data.allItems[type].forEach(function(current){
            sum += current.value;
        });

        data.totals[type] = sum;
    }

    var data = {
        allItems: {
            expense: [],
            income:[]
        },
        totals: {
            expense : 0,
            income : 0
        },
        budget: 0,
        percentage: -1
    }

    return{
        addItem: function(type, des, val){
            var newItem, ID;
            
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if(type === 'expense'){
                newItem = new Expense(ID, des, val);
            } else if(type === 'income'){
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            
            return newItem;

        },

        calculateBudget: function(){
            calculateTotal('expense');
            calculateTotal('income');

            // Income - Expense
            data.budget = data.totals.income - data.totals.expense;

            // Expense Percentage
            if(data.totals.income > 0){
                data.percentage = Math.round((data.totals.expense / data.totals.income) * 100);
            } else {
                data.percentage = -1;
            }
        },

        calculatePercentages: function(){
            data.allItems.expense.forEach(function(current){
                current.calculatePercentage(data.totals.income);
            });
        },

        getPercentages: function(){
            var allPer = data.allItems.expense.map(function(current){
                return current.getPercentage();
            });

            return allPer;
        },

        deleteItem: function(type,id){
            var ids,index;
            // We are not using below approcah as index and id's may differ in sequence
            // console.log(data.allItems[type][id]);

            ids = data.allItems[type].map(function(current){
               return current.id 
            });

            index = ids.indexOf(id);

            if(index !== -1){
                data.allItems[type].splice(index,1);
            }
            // console.log(data.allItems);
            
        },
        
        getBudget: function(){
            return{
                income: data.totals.income,
                expense: data.totals.expense,
                budget: data.budget,
                percentage: data.percentage
            };
        },

        testingData: function(){
            console.log(data);
        }
    };
})();

var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn',
        incomeList: '.income__list',
        expenseList : '.expenses__list',
        budgetLabel : '.budget__value',
        incomeLabel : '.budget__income--value',
        expenseLabel : '.budget__expenses--value',
        percentageLabel : '.budget__expenses--percentage',
        container: '.container',
        expensePercentage: '.item__percentage'
    };

    var formatNumber = function(num, type){

        var int, dec, numSplit;

        num = Math.abs(num).toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];

        if(int.length > 3){
            int = int.substr(0,int.length-3) + ',' + int.substr(int.length-3,3);
        }
        dec = numSplit[1];

        return (type === 'income' ? '+' : '-') + ' ' + int + '.' +dec;
    };
    
    
    var nodeListForEach = function(list,callback){
        for(var i = 0; i < list.length; i++){
            callback(list[i],i);
        }
    };

    return{
        getDOMStrings : function(){
            return DOMStrings;
        },

        addItemList: function(obj, type){
            var html, newHtml, element;

            if(type === 'income'){
                element = DOMStrings.incomeList;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if(type === 'expense'){
                element = DOMStrings.expenseList;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',formatNumber(obj.value,type));

            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);

            
        },

        deleteItemList: function(selectorID){
            // document.getElementById(selectorID).remove();
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        getInput : function() {
            return{
                type : document.querySelector(DOMStrings.inputType).value,
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },

        clearFields: function(){
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

            fieldsArr = Array.from(fields);
            // Similar to above statement
            // fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array){
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        displayBudget: function(obj){

            var type;
            obj.budget >= 0 ? type='income' : type = 'expense';

            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget,type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.income,'income');
            document.querySelector(DOMStrings.expenseLabel).textContent =formatNumber(obj.expense,'expense');
            

            if(obj.percentage >= 0){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '--'
            }

        },

        displayPercentage: function(percentages){
            var fields = document.querySelectorAll(DOMStrings.expensePercentage);

            nodeListForEach(fields,function(current,index){
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';                
                } else {
                    current.textContent = '--';
                }
            });

        },

        displayMonth: function(){
            var now, year, month,months;
            
            now = new Date();

            months = ['January','February','March','April','May','June','July','August','September','October','November','December']
            month = now.getMonth();
            year = now.getFullYear();

            document.querySelector('.budget__title--month').textContent = months[month] + ' ' + year;
        },

        changedType: function(){
            var fields =  document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDescription + ',' +
                DOMStrings.inputValue);
            
            nodeListForEach(fields, function(current){
                current.classList.toggle('red-focus');
            });

            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
        }
    }

})();

var controller = (function(budgetCtrl,UICtrl){

    var setupEventListners = function(){

        var DOMStrings = UICtrl.getDOMStrings();
        
        document.querySelector(DOMStrings.inputBtn).addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress',function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });

        document.querySelector(DOMStrings.container).addEventListener('click',ctrlDeleteItem);

        document.querySelector(DOMStrings.inputType).addEventListener('change', UICtrl.changedType);
    }

    function updateBudget(){
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return Budget
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on UI. 
        UICtrl.displayBudget(budget);
    }

    function updatePercentage(){
        budgetCtrl.calculatePercentages();

        var percentage = budgetCtrl.getPercentages();

        UICtrl.displayPercentage(percentage);
    }

    function ctrlAddItem(){

        var input, newItem;
        // 1. Get Data from the Input field
        input = UICtrl.getInput();

        if(input.description !== "" && !isNaN(input.value) && input.value !== 0){
            // 2. Add Item to the budget Controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add Item to the UI
            UICtrl.addItemList(newItem,input.type);

            // 4. Clear Field after input
            UICtrl.clearFields();

            // 5. Update Budget
            updateBudget();

            updatePercentage();

        }
    }

    function ctrlDeleteItem(event){
        var item,itemList,type,ID;

        item = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(item);
        itemList = item.split('-');
        type = itemList[0];
        ID = parseInt(itemList[1]);

        // 1. Delete item from the data struncture
        budgetCtrl.deleteItem(type,ID);

        // 2. Delete Item from the UI
        UICtrl.deleteItemList(item);

        // 3. Display the updated budegt
        updateBudget();

        updatePercentage();


    }

    return{
        init : function(){
            console.log('Application has started.');
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                income: 0,
                expense: 0,
                budget: 0,
                percentage: -1
            });
            setupEventListners();
        }
    };

})(budgetController,UIController);

controller.init();
