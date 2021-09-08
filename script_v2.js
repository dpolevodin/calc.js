const calc = {
    whiteViewIsActive: false,
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
            this.currentValue = document.getElementById('inputArea').value
            const lastResult = this.methods[this.currentOperation](parseFloat(this.result), parseFloat(this.currentValue)) 
            this.currentOperation = n
            this.result = lastResult
            this.currentValue = document.getElementById('inputArea').value
            this.insertTextContinue = false
            return document.getElementById('inputArea').value = lastResult
        }
        this.currentOperation = n
        this.currentValue = document.getElementById('inputArea').value
        this.result = this.currentValue
        return document.getElementById('inputArea').value = null
    },
    percentCalc: function() {
        const inputPercentValue = parseFloat(document.getElementById('inputArea').value)
        const result = this.methods[this.currentOperation](parseFloat(this.currentValue), parseFloat(this.currentValue * (inputPercentValue * 0.01)))
        return document.getElementById('inputArea').value = result
    },
    squareRootCalc: function() {
        return document.getElementById('inputArea').value = parseFloat(document.getElementById('inputArea').value) ** 0.5
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
    changeTheme: function() {
        const bgColor = ['background-color: white', 'background-color: black']
        const btnThemeChange = document.getElementById('theme-btn')
        const calcBody = (document.getElementsByClassName('calc'))
        const buttons = document.getElementsByClassName('calc__button')
        const btnStylesBlack = buttons.style
        const btnStylesWhite = "background-color: white; color: black; box-shadow: 3px 3px 2px black;"

        const btnResetStyleBlack = buttons[0].style
        const btnResetStyleWhite = "background-color: firebrick; box-shadow: 3px 3px 2px black;"

        if (!this.whiteViewIsActive) {
            document.body.style = bgColor[0]
            btnThemeChange.style = `${bgColor[0]}; color: black`
            for (item of buttons) {
                item.style = btnStylesWhite
            }
            buttons[0].style = btnResetStyleWhite
            calcBody[0].style = "background-color: #211f1f;" 
            this.whiteViewIsActive = true
        } else {
            document.body.style = bgColor[1]
            btnThemeChange.style = `${bgColor[1]}; color: white`
            for (item of buttons) {
                item.style = btnStylesBlack
            }
            buttons[0].style = btnResetStyleBlack
            calcBody[0].style = "background-color: gray;" 
            this.whiteViewIsActive = false
        }
    }
}

resultBtn.onclick = function() {
    const currentValue = parseFloat(document.getElementById('inputArea').value);
    const result = calc.result
    calc.insertTextContinue = false
    calc.currentValue = null
    calc.result = null
    return document.getElementById('inputArea').value = calc.methods[calc.currentOperation](parseFloat(result), parseFloat(currentValue))
    }