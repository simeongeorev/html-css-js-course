function loadingBar(n) {
    n = n / 10
    arrBar = []
    for (let i = 1; i < 11; i++) {
        if (i <= n) {
            arrBar.push("%")
        } else {
            arrBar.push(".")
        }
    }

    if (arrBar.every(char => char === "%")) {
        console.log("100% Complete!");
        console.log(printLoadingBar())
    } else{
        console.log(`${n*10}% ${printLoadingBar()}`);
        console.log("Still loading...");
    }

    function printLoadingBar() {
        return `[${arrBar.join("")}]`
    }
}

loadingBar(30)
loadingBar(50)
loadingBar(100)
loadingBar(0)