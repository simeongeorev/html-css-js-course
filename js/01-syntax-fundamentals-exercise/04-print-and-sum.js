function solve(startN, endN){
    let numsStr = "";
    let sum = 0;
    for(let i = startN; i <= endN; i++){
        numsStr = numsStr.concat(` ${i}`);
        sum += i;
    }
    console.log(numsStr.trim());
    console.log(`Sum: ${sum}`);
}

solve(0,26);