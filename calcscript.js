// ===== Simple Increment / Decrement =====
let counter = 0;
const counterDisplay = document.getElementById("countResult");

function countUp() {
  counter++;
  counterDisplay.textContent = counter;
}

function countDown() {
  counter--;
  counterDisplay.textContent = counter;
}

// ===== Counter with Step =====
let stepCounter = 0;
const stepDisplay = document.getElementById("stepResult");

function countUpBy() {
  const step = parseFloat(document.getElementById("stepValue").value);
  if (!isNaN(step)) {
    stepCounter += step;
    stepDisplay.textContent = stepCounter;
  } else {
    alert("Please enter a valid number for step!");
  }
}

function countDownBy() {
  const step = parseFloat(document.getElementById("stepValue").value);
  if (!isNaN(step)) {
    stepCounter -= step;
    stepDisplay.textContent = stepCounter;
  } else {
    alert("Please enter a valid number for step!");
  }
}

// ===== Arithmetic Operations =====
const arithmeticDisplay = document.getElementById("arithmeticResult");

function getOperands() {
  const first = parseFloat(document.getElementById("op1").value);
  const second = parseFloat(document.getElementById("op2").value);
  if (isNaN(first) || isNaN(second)) {
    alert("Please enter valid numbers for both operands!");
    return null;
  }
  return [first, second];
}

function add() {
  const nums = getOperands();
  if (nums) arithmeticDisplay.textContent = nums[0] + nums[1];
}

function subtract() {
  const nums = getOperands();
  if (nums) arithmeticDisplay.textContent = nums[0] - nums[1];
}

function multiply() {
  const nums = getOperands();
  if (nums) arithmeticDisplay.textContent = nums[0] * nums[1];
}

function divide() {
  const nums = getOperands();
  if (nums) {
    if (nums[1] === 0) {
      arithmeticDisplay.textContent = "Cannot divide by 0!";
    } else {
      arithmeticDisplay.textContent = (nums[0] / nums[1]).toFixed(2);
    }
  }
}

// ===== Math Functions =====
const mathDisplay = document.getElementById("mathResult");

function showPi() {
  mathDisplay.textContent = Math.PI.toFixed(4);
}

function showSine() {
  const value = parseFloat(document.getElementById("mathInput").value);
  if (!isNaN(value)) {
    mathDisplay.textContent = Math.sin(value).toFixed(4);
  } else {
    alert("Please enter a valid number!");
  }
}

function showSquareRoot() {
  const value = parseFloat(document.getElementById("mathInput").value);
  if (!isNaN(value)) {
    if (value < 0) {
      mathDisplay.textContent = "No square root for negative!";
    } else {
      mathDisplay.textContent = Math.sqrt(value).toFixed(4);
    }
  } else {
    alert("Please enter a valid number!");
  }
}

function showRandom() {
  mathDisplay.textContent = Math.random().toFixed(4);
}
