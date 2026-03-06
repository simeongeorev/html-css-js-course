function solve(namesRaw = []){
    namesRaw.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    for (let index = 0; index < namesRaw.length; index++) {
        console.log(`${index+1}.${namesRaw[index]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"])