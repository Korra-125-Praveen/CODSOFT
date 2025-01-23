let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (operator !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  updateDisplay();
}

function calculate() {
  if (operator === '' || currentInput === '') return;
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = currentInput || '0';
}
