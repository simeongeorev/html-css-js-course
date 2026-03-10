function factorialDivision(num1, num2) {

    const fact1 = getFactorial(num1)
    const fact2 = getFactorial(num2)

    console.log((fact1 / fact2).toFixed(2))

    function getFactorial(n) {
        let nArr = []
        for (let i = n; i > 0; i--) {
            nArr.push(i)
        }       
        return nArr.reduce((a, b) => a * b, 1)
    }
}

factorialDivision(5, 2)
factorialDivision(6, 2)