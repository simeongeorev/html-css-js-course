function solve(sentence){
    sentenceArr = sentence.split(" ")
    
    sentenceArr.forEach(word => {
        if (word.startsWith("#") && /^[a-zA-Z]+$/.test(word.slice(1)))
            console.log(word.slice(1));
            
    });
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')