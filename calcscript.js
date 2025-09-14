// Increment / Decrement
let count = 0;

function countUp() {
  count++;
  document.getElementById("countResult").innerHTML = count;
}

function countDown() {
  count--;
  document.getElementById("countResult").innerHTML = count;
}

// Compound Assignment
let countBy = 0;

function countUpBy() {
  const n = parseFloat(document.getElementById("countByValue").value) || 0;
  countBy += n;
  document.getElementById("countByResult").innerHTML = countBy;
}

function countDownBy() {
  const n = parseFloat(document.getElementById("countByValue").value) || 0;
  countBy -= n;
  document.getElementById("countByResult").innerHTML = countBy;
}

// Arithmetic Operators
function add() {
  const op1 = parseFloat(document.getElementById("op1").value) || 0;
  const op2 = parseFloat(document.getElementById("op2").value) || 0;
  document.getElementById("arithmeticResult").innerHTML = op1 + op2;
}

function subtract() {
  const op1 = parseFloat(document.getElementById("op1").value) || 0;
  const op2 = parseFloat(document.getElementById("op2").value) || 0;
  document.getElementById("arithmeticResult").innerHTML = op1 - op2;
}

function multiply() {
  const op1 = parseFloat(document.getElementById("op1").value) || 0;
  const op2 = parseFloat(document.getElementById("op2").value) || 0;
  document.getElementById("arithmeticResult").innerHTML = op1 * op2;
}

function divide() {
  const op1 = parseFloat(document.getElementById("op1").value) || 0;
  const op2 = parseFloat(document.getElementById("op2").value) || 0;
  if (op2 === 0) {
    document.getElementById("arithmeticResult").innerHTML = "Cannot divide by zero!";
  } else {
    document.getElementById("arithmeticResult").innerHTML = op1 / op2;
  }
}

function modulo() {
  const op1 = parseFloat(document.getElementById("op1").value) || 0;
  const op2 = parseFloat(document.getElementById("op2").value) || 0;
  document.getElementById("arithmeticResult").innerHTML = op1 % op2;
}

// Math Object Functions
function pi() {
  document.getElementById("mathResult").innerHTML = Math.PI;
}

function sine() {
  const mathOp = parseFloat(document.getElementById("mathOp").value) || 0;
  document.getElementById("mathResult").innerHTML = Math.sin(mathOp);
}

function squareRoot() {
  const mathOp = parseFloat(document.getElementById("mathOp").value) || 0;
  if (mathOp < 0) {
    document.getElementById("mathResult").innerHTML = "Cannot take square root of negative number!";
  } else {
    document.getElementById("mathResult").innerHTML = Math.sqrt(mathOp);
  }
}

function randomNum() {
  document.getElementById("mathResult").innerHTML = Math.random();
}
