// ===== Simple Increment/Decrement =====
let counter = 0;
const counterDisplay = document.getElementById("countResult");

function increment() {
  counter++;
  counterDisplay.textContent = counter;
}

function decrement() {
  counter--;
  counterDisplay.textContent = counter;
}

// ===== Count By a Step =====
let counterByStep = 0;
const counterByDisplay = document.getElementById("countByResult");

function incrementByStep() {
  const stepInput = parseFloat(document.getElementById("countByValue").value);
  if (!isNaN(stepInput)) {
    counterByStep += stepInput;
    counterByDisplay.textContent = counterByStep;
    document.getElementById("countByValue").value = "";
  } else {
    alert("Please enter a valid number!");
  }
}

function decrementByStep() {
  const stepInput = parseFloat(document.getElementById("countByValue").value);
  if (!isNaN(stepInput)) {
    counterByStep -= stepInput;
    counterByDisplay.textContent = counterByStep;
    document.getElementById("countByValue").value = "";
  } else {
    alert("Please enter a valid number!");
  }
}

// ===== Arithmetic Operations =====
const arithmeticDisplay = document.getElementById("arithmeticResult");

function getOperands() {
  const firstNumber = parseFloat(document.getElementById("op1").value);
  const secondNumber = parseFloat(document.getElementById("op2").value);
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Please enter valid numbers for both operands.");
    return null;
  }
  return [firstNumber, secondNumber];
}

function addNumbers() {
  const operands = getOperands();
  if (operands) {
    arithmeticDisplay.textContent = (operands[0] + operands[1]).toFixed(2);
    clearArithmeticInputs();
  }
}

function subtractNumbers() {
  const operands = getOperands();
  if (operands) {
    arithmeticDisplay.textContent = (operands[0] - operands[1]).toFixed(2);
    clearArithmeticInputs();
  }
}

function multiplyNumbers() {
  const operands = getOperands();
  if (operands) {
    arithmeticDisplay.textContent = (operands[0] * operands[1]).toFixed(2);
    clearArithmeticInputs();
  }
}

function divideNumbers() {
  const operands = getOperands();
  if (operands) {
    if (operands[1] === 0) {
      arithmeticDisplay.textContent = "Cannot divide by zero!";
    } else {
      arithmeticDisplay.textContent = (operands[0] / operands[1]).toFixed(2);
    }
    clearArithmeticInputs();
  }
}

function clearArithmeticInputs() {
  document.getElementById("op1").value = "";
  document.getElementById("op2").value = "";
}

// ===== Math Functions =====
const mathDisplay = document.getElementById("mathResult");

function getMathValue() {
  const value = parseFloat(document.getElementById("mathOp").value);
  if (isNaN(value)) {
    alert("Please enter a valid number!");
    return null;
  }
  return value;
}

function showPi() {
  mathDisplay.textContent = Math.PI.toFixed(4);
}

function calculateSine() {
  const value = getMathValue();
  if (value !== null) {
    mathDisplay.textContent = Math.sin(value).toFixed(4);
    document.getElementById("mathOp").value = "";
  }
}

function calculateSquareRoot() {
  const value = getMathValue();
  if (value !== null) {
    if (value < 0) {
      mathDisplay.textContent = "Cannot take square root of negative number!";
    } else {
      mathDisplay.textContent = Math.sqrt(value).toFixed(4);
    }
    document.getElementById("mathOp").value = "";
  }
}

function generateRandomNumber() {
  mathDisplay.textContent = Math.random().toFixed(4);
}
