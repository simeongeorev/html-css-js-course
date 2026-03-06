function solve(arr){
    let arrAsc = [...arr].sort((a, b) => a - b)
    let arrDesc = [...arr].sort((a, b) => b - a)
    let newArr = []
    
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arrAsc[i])
        if (newArr.length >= arr.length) {
            break
        }
        newArr.push(arrDesc[i])
        if (newArr.length >= arr.length) {
            break
        }
    }

    return newArr
}

console.log(solve([1, 65, 3, 52, 48, 63, 100, 31, -3, 18, 56]))