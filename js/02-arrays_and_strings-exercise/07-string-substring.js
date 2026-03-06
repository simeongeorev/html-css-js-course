function solve(word, sentence) {
    // if (sentence.toLowerCase().includes(word.toLowerCase())){
    //     console.log(word);
        
    // } else {
    //     console.log(`${word} not found!`);
        
    // }

    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(sentence)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('javascript','JavaScript is the best programming language')
solve('python',
'JavaScript is the best programming language'
)