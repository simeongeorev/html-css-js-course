function solve(n, op1, op2, op3, op4, op5){
    let operations = [op1, op2, op3, op4, op5];
    let result = n;

    operations.forEach(op => {
        if (op === "chop") {
            n = n / 2
        }
        else if (op === "dice"){
            n = parseInt(Math.sqrt(n))
        }
        else if (op === "spice"){
            n += 1
        }
        else if (op === "bake"){ 
            n *= 3
        }
        else if (op === "fillet"){
            n *= 0.8
        }
        console.log(n)
    });
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')