function printEveryNthElement(arr = [], step){
    let counter = 0
    let newArr = []

    while(counter < arr.length) {
        newArr.push(arr[counter])
        counter += step
    }

    return newArr
}

printEveryNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)