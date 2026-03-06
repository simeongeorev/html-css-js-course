function solve(words = "", sentence = ""){
    wordsArr = words.split(', ')
    sentenceArr = sentence.split(' ')

    for (let j = 0; j < wordsArr.length; j++) {

        for (let i = 0; i < sentenceArr.length; i++) {

            if (wordsArr[j].length == sentenceArr[i].length
                && sentenceArr[i].replaceAll('*', '').length === 0){

                    sentenceArr[i] = wordsArr[j]
                }
        }
    }

    console.log(sentenceArr.join(" "));
    
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)