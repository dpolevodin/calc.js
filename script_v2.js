const calc = {
    methods: {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    },
    currentOperation: undefined,
    currentValue: null,
    result: null,
    insertTextContinue: true,
    curentValueIsNegative: false,
    calcResult: function(n) {
        if (this.result != null) {
            this.currentOperation = n
            this.currentValue = +document.getElementById('inputArea').value;
            this.result = this.methods[this.currentOperation](+this.currentValue, +this.result)
            this.insertTextContinue = false
            return document.getElementById('inputArea').value = this.result
        }
        this.currentOperation = n
        this.currentValue = document.getElementById('inputArea').value
        this.result = this.methods[this.currentOperation](+this.currentValue, +this.result)
        document.getElementById('inputArea').value = null

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
    },

}