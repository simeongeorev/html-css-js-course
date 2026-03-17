function solve() {
  let text = document.getElementById("text").value.toLowerCase()
  const namingConv = document.getElementById("naming-convention").value

  let textArr = text.split(" ")
  let result = ""
  let formattedTextArr = []

  if (namingConv === "Camel Case") {
    formattedTextArr.push(textArr[0])

    for (let i = 1; i < textArr.length; i++) {
      let word = textArr[i].split("")
      word[0] = word[0].toUpperCase()
      word = word.join("")
      formattedTextArr.push(word)
    }

    result = formattedTextArr.join("")

  } else if (namingConv === "Pascal Case") {

    for (let i = 0; i < textArr.length; i++) {
      let word = textArr[i].split("")
      word[0] = word[0].toUpperCase()
      word = word.join("")
      formattedTextArr.push(word)
    }

    result = formattedTextArr.join("")

  } else {
    // Error
    result = "Error!"
  }

  document.getElementById("result").textContent = result
}