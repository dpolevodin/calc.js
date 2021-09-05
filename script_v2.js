const calc = {
    methods: {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    },
    currentOperation: null,
    currentValue: null,
    result: null,
    insertTextContinue: true,
    calcResult: function(n) {
        if (this.result != null) {
            this.currentOperation = n
            console.log(this.result)
            console.log(this.currentOperation)
            this.currentValue = parseFloat(document.getElementById('inputArea').value);
            this.result = this.methods[this.currentOperation](parseFloat(this.result), parseFloat(this.currentValue))
            this.insertTextContinue = false
            return document.getElementById('inputArea').value = this.result
        }
        this.currentOperation = n
        this.currentValue = document.getElementById('inputArea').value
        this.result = this.currentValue
        return document.getElementById('inputArea').value = null
    },
    setValue: function(n) {
        if (this.insertTextContinue) {
            return document.getElementById('inputArea').value += n;
        }
        document.getElementById('inputArea').value = null
        this.insertTextContinue = true
        return document.getElementById('inputArea').value += n;
    },
    changeValue: function(n) {
        const currentValue = +document.getElementById('inputArea').value;
        if (currentValue > 0) {
            return document.getElementById('inputArea').value = '-' + inputArea.value
        }
        else {
            return document.getElementById('inputArea').value = currentValue * -1
        }
    },
    resetValue: function() {
        document.getElementById('inputArea').value = null
        this.result = null
        this.secondValue = null
    }
}

resultBtn.onclick = function() {
    console.log(calc.currentValue)
    console.log(calc.currentOperation)
    calc.currentValue = parseFloat(document.getElementById('inputArea').value);
    calc.result = calc.methods[calc.currentOperation](parseFloat(calc.result), parseFloat(calc.currentValue))
    calc.insertTextContinue = false
    return document.getElementById('inputArea').value = calc.result
    }