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

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
        
    }

    chooseOperation(operation){
        if (this.currentOperand === '')return;
        if (this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {

            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
       
    }

    wasEqualsClicked(equalsWasClicked){
        if (equalsWasClicked === true){
            this.clear()
        }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }else{
            this.previousOperandTextElement.innerText = ''
        }  
        //if current button clicked is '=' store evaluated expression in history   
    }
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)){
            integerDisplay = ''
        }else{
            integerDisplay = integerDigits.toLocaleString('en',{maximumFractionDigits: 0}) 
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
        //const floatNumber = parseFloat(number)
        //if (isNaN(floatNumber)) return ''
        //return floatNumber.toLocaleString('en');
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

numberButtons.forEach(button => {
    
    button.addEventListener('click', () => {
        //check to see if the last buttin clicked was the  '=' if
        //it was then clear current contents and update with new information
        calculator.wasEqualsClicked(equalsWasClicked);
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        equalsWasClicked = false;
        
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        equalsWasClicked = false;
        console.log('equalswasClicked set to : ', equalsWasClicked);
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    equalsWasClicked = true;
    console.log('equalswasClicked set to : ', equalsWasClicked);
    calculator.compute()
    calculator.updateDisplay()
    //i want to clear the value when a number button is clicked
//testing
    //if (equalsWasClicked)) {alert('you clicked equals'
});

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
});

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
});