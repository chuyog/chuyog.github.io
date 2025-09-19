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

// counter with Step
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

// Pi calc
function showPi() {
  document.getElementById("piResult").textContent = Math.PI.toFixed(5);
}

// shapes and all

// Circle Area
function circleArea() {
  const radius = parseFloat(document.getElementById("circleRadius").value);
  const area = Math.PI * radius * radius;
  document.getElementById("circleResult").textContent = area.toFixed(2);
}

// Sphere Volume
function sphereVolume() {
  const radius = parseFloat(document.getElementById("sphereRadius").value);
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("sphereResult").textContent = volume.toFixed(2);
}

// Triangle Area
function triangleArea() {
  const base = parseFloat(document.getElementById("triangleBase").value);
  const height = parseFloat(document.getElementById("triangleHeight").value);
  const area = 0.5 * base * height;
  document.getElementById("triangleResult").textContent = area.toFixed(2);
}

// Pyramid Volume
function pyramidVolume() {
  const baseLength = parseFloat(document.getElementById("pyramidBase").value);
  const baseWidth = parseFloat(document.getElementById("pyramidWidth").value);
  const height = parseFloat(document.getElementById("pyramidHeight").value);
  const volume = (1 / 3) * baseLength * baseWidth * height;
  document.getElementById("pyramidResult").textContent = volume.toFixed(2);
}
