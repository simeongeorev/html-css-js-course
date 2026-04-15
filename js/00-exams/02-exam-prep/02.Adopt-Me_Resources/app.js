window.addEventListener("load", solve);

function solve() {
  const typeEl = document.getElementById('type')
  const ageEl = document.getElementById('age')
  const genderEl = document.getElementById('gender')

  const adoptBtn = document.getElementById('adopt-btn')

  const adoptionInfoUlEl = document.getElementById('adoption-info')
  const adoptedListUlEl = document.getElementById('adopted-list')

  adoptBtn.addEventListener('click', event => {
    event.preventDefault();

    const currType = typeEl.value
    const currAge = ageEl.value
    const currGender = genderEl.value

    if (!currType || !currAge || !currGender) {
      return
    }

    const liEl = document.createElement('li')
    const articleEl = document.createElement('article')

    const petP = document.createElement('p')
    const genderP = document.createElement('p')
    const ageP = document.createElement('p')

    const buttonsDivEl = document.createElement('div')
    buttonsDivEl.classList.add('buttons')

    const editBtnEl = document.createElement('button')
    editBtnEl.classList.add('edit-btn')
    editBtnEl.textContent = 'Edit'

    const doneBtnEl = document.createElement('button')
    doneBtnEl.classList.add('done-btn')
    doneBtnEl.textContent = 'Done'

    petP.textContent = `Pet:${typeEl.value}`
    genderP.textContent = `Gender:${genderEl.value}`
    ageP.textContent = `Age:${ageEl.value}`

    articleEl.appendChild(petP)
    articleEl.appendChild(genderP)
    articleEl.appendChild(ageP)

    buttonsDivEl.appendChild(editBtnEl)
    buttonsDivEl.appendChild(doneBtnEl)

    liEl.appendChild(articleEl)
    liEl.appendChild(buttonsDivEl)

    adoptionInfoUlEl.appendChild(liEl)

    typeEl.value = ''
    genderEl.value = ''
    ageEl.value = ''

    editBtnEl.addEventListener('click', () => {
      typeEl.value = currType
      ageEl.value = currAge
      genderEl.value = currGender

      liEl.remove();
    })

    doneBtnEl.addEventListener('click', () => {
      adoptedListUlEl.appendChild(liEl)

      buttonsDivEl.remove()

      const clearBtnEl = document.createElement('button')
      clearBtnEl.classList.add('clear-btn')
      clearBtnEl.textContent = 'Clear'

      liEl.appendChild(clearBtnEl)

      clearBtnEl.addEventListener('click', () => {
        liEl.remove();
      })
    })

  })
};