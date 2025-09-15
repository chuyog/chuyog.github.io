// ----------------- Simple Increment / Decrement -----------------
let simpleCount = 0;
const simpleDisplay = document.getElementById("countResult");

function countUp() {
  simpleCount++;
  simpleDisplay.textContent = simpleCount;
}

function countDown() {
  simpleCount--;
  simpleDisplay.textContent = simpleCount;
}

// ----------------- Compound Assignment -----------------
let stepCount = 0;
const stepDisplay = document.getElementById("countByResult");

function incrementByStep() {
  const stepValue = parseFloat(document.getElementById("countByValue").value);
  if (!isNaN(stepValue)) {
    stepCount += stepValue;
    stepDisplay.textContent = stepCount;
  } else {
    alert("Please enter a valid number!");
  }
}

function decrementByStep() {
  const stepValue = parseFloat(document.getElementById("countByValue").value);
  if (!isNaN(stepValue)) {
    stepCount -= stepValue;
    stepDisplay.textContent = stepCount;
  } else {
    alert("Please enter a valid number!");
  }
}

// ----------------- Arithmetic Operators -----------------
function getOperands() {
  const operand1 = parseFloat(document.getElementById("op1").value);
  const operand2 = parseFloat(document.getElementById("op2").value);
  return { operand1, operand2 };
}

function add() {
  const { operand1, operand2 } = getOperands();
  document.getElementById("arithmeticResult").textContent = operand1 + operand2;
}

function subtract() {
  const { operand1, operand2 } = getOperands();
  document.getElementById("arithmeticResult").textContent = operand1 - operand2;
}

function multiply() {
  const { operand1, operand2 } = getOperands();
  document.getElementById("arithmeticResult").textContent = operand1 * operand2;
}

function divide() {
  const { operand1, operand2 } = getOperands();
  if (operand2 !== 0) {
    document.getElementById("arithmeticResult").textContent = operand1 / operand2;
  } else {
    alert("Cannot divide by zero!");
  }
}

function modulo() {
  const { operand1, operand2 } = getOperands();
  document.getElementById("arithmeticResult").textContent = operand1 % operand2;
}

// ----------------- Math Object Functions -----------------
function getMathOperand() {
  return parseFloat(document.getElementById("mathOp").value);
}

function pi() {
  document.getElementById("mathResult").textContent = Math.PI.toFixed(5);
}

function sine() {
  const operand = getMathOperand();
  document.getElementById("mathResult").textContent = Math.sin(operand).toFixed(5);
}

function squareRoot() {
  const operand = getMathOperand();
  if (operand >= 0) {
    document.getElementById("mathResult").textContent = Math.sqrt(operand).toFixed(5);
  } else {
    alert("Cannot take square root of a negative number!");
  }
}

function randomNum() {
  document.getElementById("mathResult").textContent = Math.random().toFixed(5);
}
