function setValue(n) {
    const inputArea = document.getElementById('inputArea');
    inputArea.value += n;
}

function resetValue() {
    const inputArea = document.getElementById('inputArea');
    inputArea.value = null;
}

function calcMethods() {
    const inputArea = document.getElementById('inputArea').value;
    const inputArr = inputArea.split('');
    const methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        
    }
    const numValues = [];
    const operators = [];

    for (value of inputArr) {
        console.log(value)
        
        let indexKey = 0
        indexKey += value
        if (isNaN(value)) {
            numValues.push(inputArr.slice(indexKey, inputArr.indexOf(value)));
            numValues.push(inputArr.slice(inputArr.indexOf(value) + 1));
            operators.push(value);
        }
    }
    let result = methods[operators[0]](+numValues[0].join(''), +numValues[1].join(''));
    return document.getElementById('inputArea').value = result;
}


function changeValue(n) {
    const inputArea = document.getElementById('inputArea');
    const currentValue = +inputArea.value;
    if (currentValue > 0) {
        return inputArea.value = '-' + inputArea.value
    }
    else {
        return inputArea.value = currentValue * -1
    }
}
