function arrShift(arr = [], nRotations) {
    for (let i = 0; i < nRotations; i++) {
        let holder = arr.shift()
        arr.push(holder)   
    }
    console.log(arr.join(" "));
    
}

arrShift([51, 47, 32, 61, 21], 2)
arrShift([32, 21, 61, 1], 4)
arrShift([2, 4, 15, 31], 5)