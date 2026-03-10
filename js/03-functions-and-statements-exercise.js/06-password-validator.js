function passwordValidator(word) {
    let message = ""
    if (!lengthIsValid(word)) {
        message = "Password must be between 6 and 10 characters";
    }
    if (!hasValidChars(word)) {
        message += "\nPassword must consist only of letters and digits";
    }
    if (!hasAtleastTwoDigits(word)) {
        message += "\nPassword must have at least 2 digits";
    }
    if (!message) {
        message = "Password is valid"
    }
    
    console.log(message.trim());

    function lengthIsValid(word) {
        return (word.length >= 6 && word.length <= 10)
    }

    function hasValidChars(word) {
        return /^[a-zA-Z0-9]+$/.test(word)
    }

    function hasAtleastTwoDigits(word) {
        return /\d.*\d/.test(word)
    }
}

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')