function solve(arr = []) {
    
    for (let i = 0; i < arr.length; i++) {
        let details = arr[i].split(" | ")
        arr[i] = {
            "town": details[0],
            "latitude": Number(details[1]).toFixed(2),
            "longitude":Number( details[2]).toFixed(2)
        }
        console.log(arr[i])
    }    
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)