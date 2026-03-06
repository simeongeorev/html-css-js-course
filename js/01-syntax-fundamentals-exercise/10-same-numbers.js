function solve(n){
    let nStr = String(n)
    let same = true
    let sum = 0

    for (let i = 0; i < nStr.length; i++) {
        if (nStr[0] !== nStr[i]){
            same = false
        }
        sum += parseInt(nStr[i])
    }

    console.log(same)
    console.log(sum)
}


