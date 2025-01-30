<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geometry Calculator</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        .input-group { margin: 10px; }
        .result { font-weight: bold; margin-top: 10px; }
    </style>
</head>
<body>
    <h1>Geometry Calculator</h1>
    <label for="shape">Choose a shape:</label>
    <select id="shape" onchange="updateInputs()">
        <option value="rectangle">Rectangle</option>
        <option value="circle">Circle</option>
        <option value="triangle">Triangle</option>
        <option value="cuboid">Cuboid</option>
        <option value="sphere">Sphere</option>
        <option value="pyramid">Pyramid</option>
        <option value="parallelogram">Parallelogram</option>
        <option value="prism">Prism</option>
        <option value="trapezoid">Trapezoid</option>
        <option value="cylinder">Cylinder</option>
    </select>
    
    <div id="inputs"></div>
    <button onclick="calculate()">Calculate</button>
    
    <div id="results" class="result"></div>
    
    <script>
        function updateInputs() {
            let shape = document.getElementById("shape").value;
            let inputDiv = document.getElementById("inputs");
            inputDiv.innerHTML = "";
            let inputFields = "";
            
            switch (shape) {
                case "rectangle":
                case "cuboid":
                case "pyramid":
                    inputFields = `<div class='input-group'>
                        <label>Length (l):</label> <input type='number' id='length'>
                        <label>Width (w):</label> <input type='number' id='width'>
                        ${shape === "cuboid" || shape === "pyramid" ? "<label>Height (h):</label> <input type='number' id='height'>" : ""}
                    </div>`;
                    break;
                case "circle":
                case "sphere":
                    inputFields = `<div class='input-group'>
                        <label>Radius (r):</label> <input type='number' id='radius'>
                    </div>`;
                    break;
                case "triangle":
                    inputFields = `<div class='input-group'>
                        <label>Side a:</label> <input type='number' id='a'>
                        <label>Side b:</label> <input type='number' id='b'>
                        <label>Side c:</label> <input type='number' id='c'>
                        <label>Base (b):</label> <input type='number' id='base'>
                        <label>Height (h):</label> <input type='number' id='height'>
                    </div>`;
                    break;
                case "cylinder":
                    inputFields = `<div class='input-group'>
                        <label>Radius (r):</label> <input type='number' id='radius'>
                        <label>Height (h):</label> <input type='number' id='height'>
                    </div>`;
                    break;
            }
            inputDiv.innerHTML = inputFields;
        }
        
        function calculate() {
            let shape = document.getElementById("shape").value;
            let resultDiv = document.getElementById("results");
            let result = "";
            
            try {
                switch (shape) {
                    case "rectangle":
                        let l = parseFloat(document.getElementById("length").value) || 0;
                        let w = parseFloat(document.getElementById("width").value) || 0;
                        let perimeter = 2 * (l + w);
                        let area = l * w;
                        result = `Perimeter: ${perimeter}, Area: ${area}`;
                        break;
                    case "circle":
                        let r = parseFloat(document.getElementById("radius").value) || 0;
                        perimeter = 2 * Math.PI * r;
                        area = Math.PI * r * r;
                        result = `Perimeter: ${perimeter.toFixed(2)}, Area: ${area.toFixed(2)}`;
                        break;
                    case "triangle":
                        let a = parseFloat(document.getElementById("a").value) || 0;
                        let b = parseFloat(document.getElementById("b").value) || 0;
                        let c = parseFloat(document.getElementById("c").value) || 0;
                        let base = parseFloat(document.getElementById("base").value) || 0;
                        let h = parseFloat(document.getElementById("height").value) || 0;
                        perimeter = a + b + c;
                        area = 0.5 * base * h;
                        result = `Perimeter: ${perimeter}, Area: ${area}`;
                        break;
                    case "cuboid":
                        l = parseFloat(document.getElementById("length").value) || 0;
                        w = parseFloat(document.getElementById("width").value) || 0;
                        h = parseFloat(document.getElementById("height").value) || 0;
                        let volume = l * w * h;
                        result = `Volume: ${volume}`;
                        break;
                    case "sphere":
                        r = parseFloat(document.getElementById("radius").value) || 0;
                        volume = (4/3) * Math.PI * Math.pow(r, 3);
                        result = `Volume: ${volume.toFixed(2)}`;
                        break;
                    case "pyramid":
                        l = parseFloat(document.getElementById("length").value) || 0;
                        w = parseFloat(document.getElementById("width").value) || 0;
                        h = parseFloat(document.getElementById("height").value) || 0;
                        volume = (1/3) * l * w * h;
                        result = `Volume: ${volume.toFixed(2)}`;
                        break;
                }
            } catch (error) {
                result = "Error in calculation. Please check inputs.";
            }
            resultDiv.innerHTML = result;
        }
    </script>
</body>
</html>
