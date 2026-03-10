function oddAndEvenSum(number) {
    
    let numAsArr = String(number).split("").map(Number)
    let evenNums = []
    let oddNums = []

    numAsArr.forEach(n => {
        if (n % 2 === 0) {
            evenNums.push(n) // even
        } else {
            oddNums.push(n) // odd
        }
    });

    let evenSum = evenNums.reduce((a, b) => a + b, 0)
    let oddSum = oddNums.reduce((a, b) => a + b, 0)

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)

