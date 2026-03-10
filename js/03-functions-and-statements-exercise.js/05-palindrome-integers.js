function palindromeIntegers(numbers = []) {
    numbers.forEach(num => {
        console.log(isPalindrome(num));
    });

    function isPalindrome(number = 0) {
        const reversedNum = parseInt(number.toString().split("").reverse().join(""))
        return number === reversedNum
    }
}

palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])