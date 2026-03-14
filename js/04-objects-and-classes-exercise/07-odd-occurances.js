function solve(sentence = []) {
    const words = sentence.split(" ").map(word => word.toLowerCase())
    let occurances = {}

    words.forEach(word => {
        if (!occurances.hasOwnProperty(word)) {
            occurances[word] = 0
        }
        occurances[word] += 1
    });

    const filteredWords = Object.entries(occurances)
    .filter(a => a[1] % 2 !== 0)
    .sort((a, b) => b[1] - a[1])
    .map(a => a[0])

    console.log(filteredWords.join(" "))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
solve('Cake IS food SWEET is Soft CAKE sweet Food food')