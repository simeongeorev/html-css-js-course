function nxnMatrix(n) {
    for (let row = 0; row < n; row++) {
        console.log(Array(n).fill(n).join(" "));
        
    }
}

nxnMatrix(7)