//  Increment / Decrement 
let count = 0;

function countUp() {
  count++;
  document.getElementById("countResult").innerHTML = count;
}

function countDown() {
  count--;
  document.getElementById("countResult").innerHTML = count;
}

// Compound assignment
let countBy = 0;

function countUpBy() {
  let n = parseFloat(document.getElementById("countByValue").value);
  countBy += n;
  document.getElementById("countByResult").innerHTML = countBy;
}

function countDownBy() {
  let n = parseFloat(document.getElementById("countByValue").value);
  countBy -= n;
  document.getElementById("countByResult").innerHTML = countBy;
}

//Arthemetic operator
function add() {
  let op1 = parseFloat(document.getElementById("op1").value);
  let op2 = parseFloat(document.getElementById("op2").value);
  document.getElementById("arithmeticResult").innerHTML = op1 + op2;
}

function subtract() {
  let op1 = parseFloat(document.getElementById("op1").value);
  let op2 = parseFloat(document.getElementById("op2").value);
  document.getElementById("arithmeticResult").innerHTML = op1 - op2;
}

function multiply() {
  let op1 = parseFloat(document.getElementById("op1").value);
  let op2 = parseFloat(document.getElementById("op2").value);
  document.getElementById("arithmeticResult").innerHTML = op1 * op2;
}

function divide() {
  let op1 = parseFloat(document.getElementById("op1").value);
  let op2 = parseFloat(document.getElementById("op2").value);
  if (op2 !== 0) {
    document.getElementById("arithmeticResult").innerHTML = op1 / op2;
  } else {
    document.getElementById("arithmeticResult").innerHTML = "Error (÷ by 0)";
  }
}

function modulo() {
  let op1 = parseFloat(document.getElementById("op1").value);
  let op2 = parseFloat(document.getElementById("op2").value);
  document.getElementById("arithmeticResult").innerHTML = op1 % op2;
}

// Math object
function pi() {
  document.getElementById("mathResult").innerHTML = Math.PI;
}

function sine() {
  let op = parseFloat(document.getElementById("mathOp").value);
  document.getElementById("mathResult").innerHTML = Math.sin(op);
}

function squareRoot() {
  let op = parseFloat(document.getElementById("mathOp").value);
  document.getElementById("mathResult").innerHTML = Math.sqrt(op);
}

function randomNum() {
  document.getElementById("mathResult").innerHTML = Math.random();
}
