const numbers = document.querySelectorAll('.cyfra');
const currentValue = document.querySelector('.aktualne-dzialanie');
const clearButton = document.querySelector('.wyczys');
const delButton = document.querySelector('.usun')
const pastValue = document.querySelector('.poprzednie-dzialanie')
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
    const currentValue = document.querySelector('.aktualne-dzialanie');
    currentValue.textContent = '';
  });

delButton.addEventListener('click', ()=>{
    const currentValue = document.querySelector('.aktualne-dzialanie');
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
      result = pastNumber / currentNumber;
      pastValue.textContent = ""
      currentValue.textContent = result
      break;   
  }






});





