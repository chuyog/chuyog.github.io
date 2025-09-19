// ===== Shapes Section =====

// Circle: area = πr², circumference = 2πr
function calcCircle() {
  const r = parseFloat(document.getElementById("circleRadius").value);
  if (!isNaN(r) && r > 0) {
    const area = Math.PI * r * r;
    const circumference = 2 * Math.PI * r;
    document.getElementById("circleResult").textContent =
      `Area = ${area.toFixed(2)}, Circumference = ${circumference.toFixed(2)}`;
  } else {
    alert("Enter a valid radius!");
  }
}

// Sphere: surface area = 4πr², volume = (4/3)πr³
function calcSphere() {
  const r = parseFloat(document.getElementById("sphereRadius").value);
  if (!isNaN(r) && r > 0) {
    const area = 4 * Math.PI * r * r;
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    document.getElementById("sphereResult").textContent =
      `Surface Area = ${area.toFixed(2)}, Volume = ${volume.toFixed(2)}`;
  } else {
    alert("Enter a valid radius!");
  }
}

// Triangle: area = 0.5 * base * height, perimeter = a + b + c
function calcTriangle() {
  const base = parseFloat(document.getElementById("triangleBase").value);
  const height = parseFloat(document.getElementById("triangleHeight").value);
  const a = parseFloat(document.getElementById("triangleA").value);
  const b = parseFloat(document.getElementById("triangleB").value);
  const c = parseFloat(document.getElementById("triangleC").value);

  if (!isNaN(base) && !isNaN(height) && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
    const area = 0.5 * base * height;
    const perimeter = a + b + c;
    document.getElementById("triangleResult").textContent =
      `Area = ${area.toFixed(2)}, Perimeter = ${perimeter.toFixed(2)}`;
  } else {
    alert("Enter valid numbers for triangle!");
  }
}

// Pyramid (square base): volume = (1/3) * base^2 * height
function calcPyramid() {
  const base = parseFloat(document.getElementById("pyramidBase").value);
  const height = parseFloat(document.getElementById("pyramidHeight").value);

  if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
    const volume = (1 / 3) * base * base * height;
    document.getElementById("pyramidResult").textContent =
      `Volume = ${volume.toFixed(2)}`;
  } else {
    alert("Enter valid base and height!");
  }
}
