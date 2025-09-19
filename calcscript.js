// Simple Counter 
let count = 0;
function countUp() {
  count++;
  document.getElementById("countResult").textContent = count;
}
function countDown() {
  count--;
  document.getElementById("countResult").textContent = count;
}

// Counter with Step
let countBy = 0;
function countUpBy() {
  const step = parseInt(document.getElementById("stepValue").value);
  countBy += step;
  document.getElementById("countByResult").textContent = countBy;
}
function countDownBy() {
  const step = parseInt(document.getElementById("stepValue").value);
  countBy -= step;
  document.getElementById("countByResult").textContent = countBy;
}

// Arithmetic Operations 
function add() {
  const op1 = parseFloat(document.getElementById("op1").value);
  const op2 = parseFloat(document.getElementById("op2").value);
  document.getElementById("arithmeticResult").textContent = op1 + op2;
}
function subtract() {
  const op1 = parseFloat(document.getElementById("op1").value);
  const op2 = parseFloat(document.getElementById("op2").value);
  document.getElementById("arithmeticResult").textContent = op1 - op2;
}
function multiply() {
  const op1 = parseFloat(document.getElementById("op1").value);
  const op2 = parseFloat(document.getElementById("op2").value);
  document.getElementById("arithmeticResult").textContent = op1 * op2;
}
function divide() {
  const op1 = parseFloat(document.getElementById("op1").value);
  const op2 = parseFloat(document.getElementById("op2").value);
  document.getElementById("arithmeticResult").textContent = op2 !== 0 ? op1 / op2 : "Error";
}

// Math Functions 
function showPi() {
  document.getElementById("mathResult").textContent = Math.PI.toFixed(5);
}
function showSine() {
  const num = parseFloat(document.getElementById("mathInput").value);
  document.getElementById("mathResult").textContent = Math.sin(num).toFixed(5);
}
function showSquareRoot() {
  const num = parseFloat(document.getElementById("mathInput").value);
  document.getElementById("mathResult").textContent = num >= 0 ? Math.sqrt(num).toFixed(5) : "Error";
}
function showRandom() {
  document.getElementById("mathResult").textContent = Math.random().toFixed(5);
}

// Shapes 
function circleArea() {
  const radius = parseFloat(document.getElementById("circleRadius").value);
  const area = Math.PI * radius * radius;
  document.getElementById("circleResult").textContent = area.toFixed(2);
}
function sphereVolume() {
  const radius = parseFloat(document.getElementById("sphereRadius").value);
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("sphereResult").textContent = volume.toFixed(2);
}
function triangleArea() {
  const base = parseFloat(document.getElementById("triangleBase").value);
  const height = parseFloat(document.getElementById("triangleHeight").value);
  const area = 0.5 * base * height;
  document.getElementById("triangleResult").textContent = area.toFixed(2);
}
function pyramidVolume() {
  const base = parseFloat(document.getElementById("pyramidBase").value);
  const height = parseFloat(document.getElementById("pyramidHeight").value);
  const volume = (1 / 3) * base * base * height;
  document.getElementById("pyramidResult").textContent = volume.toFixed(2);
}
