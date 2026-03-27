document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let textSectionEl = document.querySelector('input[type="text"]')
   const generateBtnEl = document.querySelector('input[type="submit"]');
   const placeholderEl = document.getElementById('content')

   generateBtnEl.addEventListener('click', (event) => {
      event.preventDefault()

      let sections = textSectionEl.value.split(', ')

      sections.forEach(section => {
         const titleEl = document.createElement('p')
         titleEl.textContent = section
         titleEl.style.display = 'none'

         const divEl = document.createElement('div')
         divEl.appendChild(titleEl)

         placeholderEl.append(divEl)
      })

      const allDivs = Array.from(placeholderEl.children);
      console.log(`children:`, allDivs);

      allDivs.forEach(div => {
         div.addEventListener('click', (event) => {
            const currentTarget = event.currentTarget.querySelector('p')
            console.log(currentTarget);

            currentTarget.style.display = 'block'
         })
      })
   })
}