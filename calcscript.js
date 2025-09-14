// --- Simple Counter ---
let count = 0;

function countUp() {
  count++;
  document.getElementById("countResult").textContent = count;
}

function countDown() {
  count--;
  document.getElementById("countResult").textContent = count;
}

// --- Compound Assignment ---
let countBy = 0;

function countUpBy() {
  let value = parseInt(document.getElementById("countByValue").value);
  countBy += value;
  document.getElementById("countByResult").textContent = countBy;
}

function countDownBy() {
  let value = parseInt(document.getElementById("countByValue").value);
  countBy -= value;
  document.getElementById("countByResult").textContent = countBy;
}

// --- Arithmetic Operators ---
function getOperands() {
  let op1 = parseFloat(document.getElementById("op1").value);
  let op2 = parseFloat(document.getElementById("op2").value);
  return [op1, op2];
}

function add() {
  let [op1, op2] = getOperands();
  document.getElementById("arithmeticResult").textContent = op1 + op2;
}

function subtract() {
  let [op1, op2] = getOperands();
  document.getElementById("arithmeticResult").textContent = op1 - op2;
}

function multiply() {
  let [op1, op2] = getOperands();
  document.getElementById("arithmeticResult").textContent = op1 * op2;
}

function divide() {
  let [op1, op2] = getOperands();
  if (op2 === 0) {
    document.getElementById("arithmeticResult").textContent = "Cannot divide by zero";
  } else {
    document.getElementById("arithmeticResult").textContent = op1 / op2;
  }
}

function modulo() {
  let [op1, op2] = getOperands();
  document.getElementById("arithmeticResult").textContent = op1 % op2;
}

// --- Math Object Functions ---
function pi() {
  document.getElementById("mathResult").textContent = Math.PI.toFixed(5);
}

function sine() {
  let value = parseFloat(document.getElementById("mathOp").value);
  document.getElementById("mathResult").textContent = Math.sin(value).toFixed(5);
}

function squareRoot() {
  let value = parseFloat(document.getElementById("mathOp").value);
  document.getElementById("mathResult").textContent = Math.sqrt(value).toFixed(5);
}

function randomNum() {
  document.getElementById("mathResult").textContent = Math.random().toFixed(5);
}
