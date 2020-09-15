const calculatorCode = () => {
const display = document.querySelector(".display_input");
const calc_buttons = document.querySelector(".input-container");
// const calc_buttons = document.querySelector(".container")


calc_buttons.addEventListener("click", (e) => {

    if(e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent
        const previousKeyType = calc_buttons.dataset.previousKeyType

        const calculate = (n1, operator, n2) => {
            let result = " "
        
            if(operator === "add") {
             result =   parseFloat(n1) + parseFloat(n2)
            }
            else if (operator === 'divide') {
              result =  parseFloat(n1) / parseFloat(n2)
            }
            else if (operator === 'subtract') {
               result = parseFloat(n1) - parseFloat(n2)
            }
            else {
               result = parseFloat(n1) * parseFloat(n2)
            }
            return result;
        }
        // console.log(calculate(3, "add", 5))        
      
        if (!action) {
            if(displayedNum === '0' || previousKeyType === "operator") {
                display.textContent = keyContent
            }
            
            else {
                display.textContent = displayedNum + keyContent
            }
            
        }
        if (action === "Clear" || action === "divide" ||
        action === "multiply" || action === "subtract" ||
        action === "decimal" || action === "calculate") {
            key.classList.add("is-depressed")
            calc_buttons.dataset.previousKeyType = "operator"
            console.log("operator key");
            calc_buttons.dataset.firstValue = displayedNum;
            calc_buttons.dataset.operator  = action;
           
     }

     
     if (action === "calculate") {
        const firstValue = calc_buttons.dataset.firstValue
        const operator = calc_buttons.dataset.operator
        const secondValue = displayedNum;
        display.textContent = calculate(firstValue, operator, secondValue)
    }
      
     if (action === 'decimal') {
        display.textContent = displayedNum + '.'
    }
        // if (action === "multiply") {
        //     console.log("multiplication key was clicked")
        // }
        // if (action === "add") {
        //     console.log("addition key was clicked")
        // }
        // if (action === "subtract") {
        //     console.log("subtraction key was clicked")
        // }
        // if (action === "divide") {
        //     console.log("Divsion key was clicked")
        // }
        if (action === "Clear") {
            console.log("clear key was clicked")
            display.textContent = "0" 
        }
        if (action === "decimal") {
            console.log("decimal key was clicked")
        }
        
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
       

    }

})

}

calculatorCode();