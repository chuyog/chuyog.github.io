let dataSet = [7.24, 3.67, 4.89, 4.12, 3.73];

const datasetDisplay = document.getElementById('currentDataset');
const meanDisplay = document.getElementById('currentMean');
const inputElement = document.getElementById('valueInput');

function computeAndDisplayMean() {
    let totalSum = 0;
    const count = dataSet.length;

    for (let i = 0; i < count; i++) {
        totalSum += dataSet[i];
    }

    let mean = 0;
    
    if (count > 0) {
        mean = totalSum / count;
    }

    meanDisplay.textContent = `Mean: ${mean.toFixed(2)}`;
}

function updateDisplay() {
    if (datasetDisplay && meanDisplay) {
        datasetDisplay.textContent = dataSet.join(', ');
        computeAndDisplayMean(); 
    }
}

function addValue() {
    const inputValue = inputElement.value.trim();
    const numberValue = parseFloat(inputValue);

    if (isNaN(numberValue) || inputValue === '') {
        alert('Oops! Please enter a valid numerical value to add.');
        return; 
    }

    dataSet.push(numberValue);

    inputElement.value = '';

    updateDisplay();
}

function removeValue() {
    const inputValue = inputElement.value.trim();
    const numberValue = parseFloat(inputValue);

    if (isNaN(numberValue) || inputValue === '') {
        alert('Oops! Please enter a valid numerical value to remove.');
        return; 
    }

    let indexToRemove = -1;

    for (let i = 0; i < dataSet.length; i++) {
        if (dataSet[i] === numberValue) {
            indexToRemove = i;
            break;
        }
    }

    if (indexToRemove === -1) {
        alert(`Sorry, the value "${numberValue}" isn't currently in the list!`);
    } else {
        dataSet.splice(indexToRemove, 1);
        
        inputElement.value = '';

        updateDisplay();
    }
}

window.onload = updateDisplay;