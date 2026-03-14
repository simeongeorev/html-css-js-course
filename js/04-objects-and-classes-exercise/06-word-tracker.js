function solve(arrOfWords = []) {
    const keywords = arrOfWords.shift().split(" ") //array
    let occurances = {}

    // keywords.forEach(keyword => {

    //     arrOfWords.forEach(word => {

    //         if (keyword === word) {
    //             if (!occurances[keyword]) {
    //                 occurances[keyword] = 0
    //             }
    //             occurances[keyword] += 1
    //         }

    //     });

    // });

    keywords.forEach(keyword => {
        occurances[keyword] = 0
    });

    arrOfWords.forEach(word => {
        if (occurances.hasOwnProperty(word)) {
            occurances[word] += 1
        }
    });

    for (const [k, v] of Object.entries(occurances).sort((a, b) => b[1] - a[1])) {
        console.log(`${k} - ${v}`)
    }
}

solve([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)
solve([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)