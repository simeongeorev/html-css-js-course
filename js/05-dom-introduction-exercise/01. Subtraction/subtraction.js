function subtract() {
    const num1 = document.getElementById('firstNumber').value
    const num2 = document.getElementById('secondNumber').value
    const result = num1 - num2
    const resultCntr = document.getElementById("result")
    // resultCntr.append(result)
    resultCntr.textContent = result
}