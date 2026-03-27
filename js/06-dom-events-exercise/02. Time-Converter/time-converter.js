document.addEventListener('DOMContentLoaded', solve);

// function solve() {
//     const daysBtn = document.getElementById('daysBtn');
//     const hoursBtn = document.getElementById('hoursBtn');
//     const minutesBtn = document.getElementById('minutesBtn');
//     const secondsBtn = document.getElementById('secondsBtn');

//     let timesObj = {
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0
//     }

//     const allBtns = [daysBtn, hoursBtn, minutesBtn, secondsBtn];

//     allBtns.forEach(btn => {
//         btn.addEventListener('click', event => {
//             event.preventDefault()

//             const fieldInput = btn.parentElement.querySelector('input[type=number]')
//             let fieldInputValue = fieldInput.value
//             console.log(fieldInput);
//             const fieldInputPlaceholder = fieldInput.getAttribute('placeholder').toLowerCase()
//             console.log(fieldInputPlaceholder);

//             if (fieldInputPlaceholder === 'days' && fieldInputValue) {
//                 console.log('we have days');

//             }


//         })
//     })

//     function calculateTime(timeAsObj) {

//     }
// }

function solve() {
    const allForms = document.querySelectorAll('form')

    allForms.forEach(form => {
        form.addEventListener('submit', event => submitForm(event))
    })

    function submitForm(e) {
        e.preventDefault();

        const inputValue = e.target.querySelector('input[type=number]').value
        const inputType = e.target.id
        console.log(inputValue);
        console.log(inputType);

        const results = calculateTime(inputValue, inputType)
        
        for (const type in results) {
            const inputField = document.getElementById(`${type}-input`)
            inputField.value = results[type].toFixed(2)
        }
    }

    function calculateTime(value, type) {
        let seconds = 0

        switch (type) {
            case 'days':
                seconds = value * 24 * 60 * 60
                break;
            case 'hours':
                seconds = value * 60 * 60
                break;
            case 'minutes':
                seconds = value * 60
                break;
            case 'seconds':
                seconds = value
                break;
            default:
                throw new Error('Invalid type!')
        }

        return {
            days: seconds / (24 * 60 * 60),
            hours: seconds / (60 * 60),
            minutes: seconds / 60,
            seconds: seconds
        }
    }
}