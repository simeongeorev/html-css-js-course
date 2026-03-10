function getSmallestInteger(int1, int2, int3) {
    let ints = [int1, int2, int3]
    let smallestInt = ints.sort((a, b) => a - b)[0]
    console.log(smallestInt);
    
}

getSmallestInteger(600,
342,
123
)
