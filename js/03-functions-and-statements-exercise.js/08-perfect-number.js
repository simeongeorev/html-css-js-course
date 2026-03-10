function perfectNumber(number) {
    if (number <= 1) {
        console.log("It's not so perfect.");
        return
    }

    let divisors = []
    const originalNumber = number

    for (let i = 1; i <= Math.ceil(number / 2); i++) {
        if (number % i === 0){
            divisors.push(i)
        }
    }

    if (divisors.reduce((a, b) => a + b, 0) === originalNumber) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)