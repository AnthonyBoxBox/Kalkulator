const numbers = document.querySelectorAll('.cyfra');
const decimal = document.querySelectorAll('.decimal')
const currentValue = document.querySelector('.currentValue-result');
const clearButton = document.querySelector('.wyczys');
const delButton = document.querySelector('.usun')
const pastValue = document.querySelector('.pastValue-result')
const operators = document.querySelectorAll('.operator')
const calculate = document.querySelector('.rownosc')
let currentOperator = undefined

numbers.forEach(number => {
  number.addEventListener('click', () => {
    const clickedValue = number.textContent;
    currentValue.textContent += clickedValue;
  });
});
clearButton.addEventListener('click', () => {
    const currentValue = document.querySelector('.currentValue-result');
    currentValue.textContent = '';
    currentOperator = undefined; 
    pastValue.textContent = '';
  });

delButton.addEventListener('click', ()=>{
    const currentValue = document.querySelector('.currentValue-result');
    const currentValueLength = currentValue.textContent.length;

    if (currentValueLength > 0) {
        currentValue.textContent = currentValue.textContent.slice(0, currentValueLength - 1);
      }
});
operators.forEach(operator => {
  operator.addEventListener('click', () => {
      currentOperator = operator.textContent;
      pastValue.textContent = currentValue.textContent;
      currentValue.textContent = "";
    });
  });

calculate.addEventListener('click', () => {
  const currentNumber = Number(currentValue.textContent)
  const pastNumber = Number(pastValue.textContent)
  
  pastValue.textContent = ""
  switch(currentOperator){
    case "+":
      result = pastNumber + currentNumber;
      pastValue.textContent = ""
      currentValue.textContent = result
      break;
    case "-":
      
      result = pastNumber - currentNumber;
      pastValue.textContent = ""
      currentValue.textContent = result
      break;
    
    case "*":
      
      result = pastNumber * currentNumber;
      pastValue.textContent = ""
      currentValue.textContent = result
      break;
    case "÷":
      
    
      If(currentNumber===0) 
      {
        clearButton()
        return
      }
      result = pastNumber / currentNumber;
      pastValue.textContent = ""
      currentValue.textContent = result
      
      break;   
      
    case '^':
      result = Math.pow(pastValue, currentValue)
      pastValue.textContent = ""
      currentValue.textContent = result
      break
    case '%':
      result = pastValue / 100 * currentValue
      pastValue.textContent = ""
      currentValue.textContent = result
      break
    case '√':
      result = Math.pow(pastValue, 1 / currentValue)
      pastValue.textContent = ""
      currentValue.textContent = result
      break
    case 'log':
      result = Math.log(pastValue) / Math.log(currentValue)
      pastValue.textContent = ""
      currentValue.textContent = result
      break
  
  }


  function containsDecimalPoint(value) {
    return value.includes('.');
  }

  document.body.addEventListener('click', (event) => {
    if (event.target.matches('.decimal')) {
      if (!containsDecimalPoint(currentValue.textContent)) {
        currentValue.textContent += '.';
      }
    }
  });


});





