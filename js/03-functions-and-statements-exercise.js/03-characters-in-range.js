function getCharsBetweenAsciiCodes(char1, char2){

    let asciiChar1 = char1.charCodeAt(0) 
    let asciiChar2 = char2.charCodeAt(0)
    
    if (asciiChar1 <= asciiChar2) {
        console.log(getCharsByAscii(asciiChar1, asciiChar2).join(" "))
    } 
    else if (asciiChar1 > asciiChar2) {
        console.log(getCharsByAscii(asciiChar2, asciiChar1).join(" "))
    }
    
    function getCharsByAscii(startI, endI) {
        let chars = []
        for (let i = startI + 1; i < endI; i++){
            chars.push(String.fromCharCode(i))
        }
        return chars
    }
}

getCharsBetweenAsciiCodes('a', 'd')
getCharsBetweenAsciiCodes('#',':')
getCharsBetweenAsciiCodes('C','#')