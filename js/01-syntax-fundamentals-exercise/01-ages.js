function solve(n){
    if (0 <= n && n <= 2){
        console.log("baby");
    } else if (n > 2 && n <= 13){
        console.log("child");
    } else if (n > 13 && n <= 19) {
        console.log("teenager");
    } else if (n > 19 && n <= 65) {
        console.log("adult");
    } else if (n >= 65) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}

solve(20) 
solve(1) 
solve(100) 
solve(-1) 