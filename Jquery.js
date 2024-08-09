
// $(document).ready(function(){


const calculator = {
    secondEntry : '',
    firstEntry : '',
    operator : '',
   

    AC(){
        this.firstEntry='';
        this.secondEntry='';
        this.operator='';
        this.updateScreen('')
        calculator.assignment.lastEntry = '';
        calculator.assignment.noSecondEntry = false;
        calculator.Operate.numOperation = 1;
    }, 
    Operate : {  
        numOperation : 1,
        checkNumOperation(){ debugger;
            if(this.numOperation>1){
                calculator.assignment.assignment();
                this.numOperation = 1;
            }
        },
        addition(){
            debugger
            this.checkNumOperation()
                calculator.operator = '+'
                this.numOperation +=1;
            
        },
        multiplication(){
            if (! this.checkNumOperation()){
                calculator.operator = '*'
            }
        },
        subtraction(){
            debugger
            this.checkNumOperation()
                calculator.operator = '-'
            
        },
        devision(){
            debugger;
            if (! this.checkNumOperation()){
                calculator.operator = '/'
            }
        },
        percentage(){
            if (! this.checkNumOperation()){
                    calculator.operator = '%'
                    calculator.assignment.assignment()
            }
        },
    },


    plus_minus: {
        isPositive(){
            return  (parseFloat($(".screen").html()) >=0)
        },
        makeItNegative(value){
           return value = '-' + value
        },
        makeItPositive(value){
            debugger;
            if(typeof value !== "string" )
                value = value.toString();
             value = value.substring(1,value.length)
            return value;
        },
        inverseFirstEntry(){
            if(calculator.EmptyFirstEntry()){  
                alert("nothing has entered");
            }
            else{
                if(this.isPositive()){
                    calculator.firstEntry = this.makeItNegative(calculator.firstEntry);
                    calculator.updateScreen(calculator.firstEntry)
                }
                else{
                    calculator.firstEntry = this.makeItPositive(calculator.firstEntry);
                    calculator.updateScreen(calculator.firstEntry)
                }
            }
        },
        inverseSecondEntry(){
            if(this.isPositive()){
                calculator.secondEntry = this.makeItNegative(calculator.secondEntry);
                calculator.updateScreen(calculator.secondEntry)
            }
            else{
                calculator.secondEntry = this.makeItPositive(calculator.secondEntry);
                calculator.updateScreen(calculator.secondEntry)
            }
        },
        inverse(){
            if(calculator.EmptySecondEntry())
                this.inverseFirstEntry();
            else               
                this.inverseSecondEntry();
        }
            
    },
    negative(){
            if(calculator.operator === ''){
                if(calculator.checkInput.EmptyFirstEntry() ){  
                    calculator.firstEntry = '-'
                    calculator.updateScreen(calculator.firstEntry)
                }
                else{
                    alert('You can not do that in first entry')
                }
            }
            else if(calculator.operator !== ''){
               if(calculator.checkInput.EmptySecondEntry()){
               calculator.secondEntry = '-'
                calculator.updateScreen(calculator.secondEntry)
                }
                else{ 
                    alert('You can not do that in secod entry')
                }     
            }
    },

    dot(){
        this.checkInput.checkInput('.')
    },
    
    assignment : {
         lastEntry : '',
         noSecondEntry : false,
         updateLastEntry(temp1,temp2){
            if(isNaN(temp2)){
                this.noSecondEntry = true;
                if(this.lastEntry === '')
                    this.lastEntry = temp1;
                  
            }
            else{
                this.lastEntry = temp2;
                this.noSecondEntry = false;
            }
         },
        assignment(){
            debugger;
            let temp1 = this.convertToNum(calculator.firstEntry);
            let temp2 = this.convertToNum(calculator.secondEntry);
            let resault = 0;
            this.updateLastEntry(temp1,temp2);
            if(this.noSecondEntry)
                temp2 = this.lastEntry;
            switch (calculator.operator){
                case "+":
                    resault = temp1+temp2;
                    break
                case "*":
                    resault = temp1*temp2;
                    break
                case "/":
                    resault = temp1/temp2;
                    break
                case "-":
                    resault = temp1-temp2;
                    break
                case "/":
                    resault = temp1/temp2
                    break;
                case "%":
                    resault = (temp1)/100
                    calculator.firstEntry = resault;
                    calculator.operator = ''
                    break;
                default:
                    alert("Error 404")
            }
                calculator.updateScreen(resault)
                calculator.firstEntry = resault;
                calculator.secondEntry = '';

                calculator.Operate.numOperation = 1;
                
            },
        convertToNum(value){
        return parseFloat(value);
        }
    },
    updateScreen(value){
        debugger;
        value = value.toString();
        $(".screen").html(value.substring(0,10));
    },
    
    checkInput : {
            EmptyFirstEntry(){
                return calculator.firstEntry === '';
            },
            updateFirstEntry(value){  
                debugger
                calculator.firstEntry += value;
        
            },
            EmptySecondEntry(){
                return calculator.secondEntry === '';
            },
            updateSecondEntry(value){
                debugger;
                calculator.secondEntry += value;
            },
            checkInput(value){
                debugger;
            if(calculator.operator === ''){
                if(this.EmptyFirstEntry() ){          
                    this.updateFirstEntry(value)
                    calculator.updateScreen(value)
                }
                else{
                    this.updateFirstEntry(value)
                    calculator.updateScreen(calculator.firstEntry)
                }
            }
            else if(this.operator !== ''){
                    if(this.EmptySecondEntry()){          
                        this.updateSecondEntry(value)
                        calculator.updateScreen(value)
                }
                else{
                    this.updateSecondEntry(value)
                    calculator.updateScreen(calculator.secondEntry)
                }
            }
        }
    }
}

