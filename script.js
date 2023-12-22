let inputField = document.getElementById('inputField');
let operator = null;
let operand1 = null;
let operand2 = null;
let resetInput = false;

function appendNumber(number) {
  if (resetInput) {
    inputField.value = '';
    resetInput = false;
  }
  inputField.value += number;
}

function setOperator(op) {
  if (operator !== null) {
    calculate();
  }
  operator = op;
  operand1 = parseFloat(inputField.value);
  resetInput = true;
}

function calculate() {
  if (operator === null || resetInput) {
    return;
  }
  operand2 = parseFloat(inputField.value);
  
  switch (operator) {
    case '+':
      inputField.value = operand1 + operand2;
      break;
    case '-':
      inputField.value = operand1 - operand2;
      break;
    case '*':
      inputField.value = operand1 * operand2;
      break;
    case '/':
      if (operand2 === 0) {
        inputField.value = 'Error';
      } else {
        inputField.value = operand1 / operand2;
      }
      break;
  }
  
  operator = null;
  operand1 = parseFloat(inputField.value);
  resetInput = true;
}

function clearField() {
  inputField.value = '0';
  operator = null;
  operand1 = null;
  operand2 = null;
  resetInput = false;
}
