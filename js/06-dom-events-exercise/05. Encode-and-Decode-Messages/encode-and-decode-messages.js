document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const encodeBtn = document.querySelector('#encode button')
    const decodeBtn = document.querySelector('#decode button')
    const decodeTextEl = document.querySelector('#decode textarea')

    // encoding
    encodeBtn.addEventListener('click', event => {
        event.preventDefault();
        const encodeTextEl = document.querySelector('#encode textarea')
        let textToEncode = encodeTextEl.value
        
        let encodedText = Array.from(textToEncode)
                            .map(x => String.fromCharCode(x.charCodeAt(0)+1))
                            .join('');

        encodeTextEl.value = ''

        decodeTextEl.value = encodedText;
    })

    decodeBtn.addEventListener('click', event => {
        event.preventDefault();
        let textToDecode = decodeTextEl.value

        let decodedText = Array.from(textToDecode)
                            .map(x => String.fromCharCode(x.charCodeAt(0)-1))
                            .join('');
        
        decodeTextEl.value = decodedText
    })
    
}