/* everything should be Data classes as to not get confused with
 the classes used in css.
*/
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
    }

    clearScreen(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
    }

    deleteLast(){}

    appendNumber(number){}

    chooseOperation(operation){}

    compute(){}

    wasEqualsClicked(equalsWasClicked){}

    updateDisplay()






}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
let equalsWasClicked = false;

/*Calculator class bluprinted, time to use*/