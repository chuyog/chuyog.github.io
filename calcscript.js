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

// Arithmetic Operators
function add() {
  const op1 = parseFloat(document.getElementById("op1").value) || 0;
  const op2 = parseFloat(document.getElementById("op2").value) || 0;
  document.getElementById("arithmeticResult").innerHTML = op1 + op2;
}

function subtract() {
  const op1 = parseFloat(document.getElementById("op1").value) || 0;
  const op2 = parseFloat(document.getElementById("op2").value) || 0;
  document.getElementById("arithmeticRes
