function solve() {
   let rows = document.querySelectorAll(".container tbody tr")
   const searchField = document.getElementById("searchField")

   // Deselect old enries
   rows.forEach(row => row.classList.remove("select"))

   for (const row of rows) {
      if(searchField.value && row.textContent.toLowerCase().includes(searchField.value.toLowerCase())) {
         row.classList.add("select")
      }
   }

   searchField.value = ""
}