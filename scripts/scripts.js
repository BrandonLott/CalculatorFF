/* everything should be data-classes as to not get confused with
 the classes used in css.
*/
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
    }

    delete(){}

    appendNumber(number){
        
        this.currentOperand = number;
        
    }

    chooseOperation(operation){}

    compute(){}

    wasEqualsClicked(equalsWasClicked){}

    updateDisplay(){
        
        this.currentOperandTextElement.innerText = this.currentOperand;
       
    }






}

const numberButtons = document.querySelectorAll ("[data-number]");
const operatorButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
let equalsWasClicked = false;


/*Calculator class bluprinted, time to use*/

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
console.log(numberButtons);
numberButtons.forEach(button => {
    
    button.addEventListener('click', () => {
        //check to see if the last buttin clicked was the  '=' if
        //it was then clear current contents and update with new information
        
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
        equalsWasClicked = false;
        
    })
})

