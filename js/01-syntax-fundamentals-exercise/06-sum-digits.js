function solve(n) {
    let sum = 0
    let nStr = String(n)
    for (let i = 0; i < nStr.length; i++) {
        sum += parseInt(nStr[i])
    }
    console.log(sum)
}

solve(97561)