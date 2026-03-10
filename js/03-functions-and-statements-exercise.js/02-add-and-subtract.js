function addAndSubtract(int1, int2, int3) {
    function sum() {
        return int1 + int2
    } 

    function subtract() {
        return sum() - int3
    }

    console.log(subtract())
}

addAndSubtract(23,
6,
10
)