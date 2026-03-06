function solve(n){
    let flag = false;

    const isDivisibleByFour = n % 4 === 0;
    const isDivisibleByHundred = n % 100 === 0;
    const isDivisibleByFourHundred = n % 400 === 0;

    if (isDivisibleByFour && !isDivisibleByHundred){
        flag = true;
    }

    if (isDivisibleByFourHundred){
        flag = true;
    }

    if (flag){
        console.log("yes");
    } else {
        console.log("no");
    }
}

solve(1984)
solve(2003)
solve(4)