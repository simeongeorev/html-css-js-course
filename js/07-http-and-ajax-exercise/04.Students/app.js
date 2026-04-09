const URL = 'http://localhost:3030/jsonstore/collections/students'

const formEl = document.getElementById('form')
const tableBodyEl = document.querySelector('tbody')

const firstNameEl = document.querySelector('input[name=firstName]')
const lastNameEl = document.querySelector('input[name=lastName]')
const facultyNumberEl = document.querySelector('input[name=facultyNumber]')
const gradeEl = document.querySelector('input[name=grade]')

displayStudents();

formEl.addEventListener('submit', async (event) => {
    event.preventDefault();
    await createStudent();
    await displayStudents();
})

async function getStudents() {
    const repsonse = await fetch(URL);
    const result = await repsonse.json();
    const studentsInfo = Object.values(result)
    return studentsInfo; 
}

async function displayStudents() {
    tableBodyEl.innerHTML = ''

    for (const student of await getStudents()) {
        const tableRow = document.createElement('tr')

        const firstNameCell = document.createElement('td')
        const lastNameCell = document.createElement('td')
        const facultyNumberCell = document.createElement('td')
        const gradeCell = document.createElement('td')

        firstNameCell.textContent = student.firstName
        lastNameCell.textContent = student.lastName
        facultyNumberCell.textContent = student.facultyNumber
        gradeCell.textContent = student.grade

        tableRow.appendChild(firstNameCell)
        tableRow.appendChild(lastNameCell)
        tableRow.appendChild(facultyNumberCell)
        tableRow.appendChild(gradeCell)

        tableBodyEl.append(tableRow)
    }
}

async function createStudent() {

    if (!firstNameEl.value || !lastNameEl.value || !facultyNumberEl.value || !gradeEl.value) {
        return
    }

    const student = {
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        facultyNumber: facultyNumberEl.value,
        grade: gradeEl.value
    };

    await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        header: { 'content-type': 'application/json' },
        body: JSON.stringify(student)
    });

    firstNameEl.value = ''
    lastNameEl.value = ''
    facultyNumberEl.value = ''
    gradeEl.value = ''
}