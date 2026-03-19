function solve() {
   const towns = document.querySelectorAll("#towns li") //get all elements
   let searchText = document.getElementById("searchText").value
   let result = document.getElementById("result")
   let resultCount = 0

   for (const townEl of towns) {
      if (townEl.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         townEl.style.textDecoration = "underline"
         townEl.style.fontWeight = "bold"
         resultCount ++
      }
   }

   result.textContent = `${resultCount} matches found`

}