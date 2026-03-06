function solve(fruit, weightGr, pricePerKg){
    let weightKg = weightGr / 1000
    let moneyNeeded = weightKg * pricePerKg
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)
}

solve('apple', 1563, 2.35)