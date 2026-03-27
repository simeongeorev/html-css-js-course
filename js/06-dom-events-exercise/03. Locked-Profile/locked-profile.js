document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const allBtns = document.querySelectorAll('button')
    console.log(allBtns); // del

    allBtns.forEach((btn, i) => {
        btn.addEventListener('click', event => {
            event.preventDefault();

            let isLocked = event.currentTarget.parentElement.querySelector(`#user${i + 1}Lock`).checked;
            console.log(isLocked) // del

            if (isLocked) {
                return
            }

            let hiddenFieldsEl = document.getElementById(`user${i + 1}HiddenFields`)
            console.log(hiddenFieldsEl); // del 

            if (btn.textContent === 'Show more') {
                hiddenFieldsEl.style.display = 'block'
                btn.textContent = 'Show less'
            } else if (btn.textContent === 'Show less') {
                hiddenFieldsEl.style.display = 'none'
                btn.textContent = 'Show more'
            }

        })
    })
}