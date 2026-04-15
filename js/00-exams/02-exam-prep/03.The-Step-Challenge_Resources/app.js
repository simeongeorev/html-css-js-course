const BASE_URL = 'http://localhost:3030/jsonstore/records'

function solve() {
    const loadRecordsBtn = document.getElementById('load-records');
    const listUlEl = document.getElementById('list');
    const recordTemplate = document.getElementsByClassName('record')[0];
    const addRecordBtn = document.getElementById('add-record');
    const editRecordBtn = document.getElementById('edit-record');
    const nameEl = document.getElementById('p-name');
    const stepsEl = document.getElementById('steps');
    const caloriesEl = document.getElementById('calories');

    let recordToEditId;

    // LOAD RECORDS
    loadRecordsBtn.addEventListener('click', async () => {
        await visualizeRecords();
    });

    // ADD NEW RECORD
    addRecordBtn.addEventListener('click', async () => {
        if (!nameEl.value || !stepsEl.value || !caloriesEl.value) {
            return;
        }

        const recordToSend = {
            name: nameEl.value,
            steps: stepsEl.value,
            calories: caloriesEl.value
        }

        await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(recordToSend)
        });

        nameEl.value = '';
        stepsEl.value = '';
        caloriesEl.value = '';

        await visualizeRecords();
    });

    // EDIT RECORD
    editRecordBtn.addEventListener('click', async () => {
        if (!nameEl.value || !stepsEl.value || !caloriesEl.value) {
            return;
        }

        const recordToSend = {
            name: nameEl.value,
            steps: stepsEl.value,
            calories: caloriesEl.value
            // _id: recordToEditId
        }

        await fetch(`${BASE_URL}/${recordToEditId}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(recordToSend)
        });

        nameEl.value = '';
        stepsEl.value = '';
        caloriesEl.value = '';

        await visualizeRecords();
        addRecordBtn.disabled = false;
    });

    // FUNCTIONS
    function createRecords(record) {
        const newRecord = recordTemplate.cloneNode(true);

        const nameP = newRecord.querySelectorAll('.info p')[0]
        const stepsP = newRecord.querySelectorAll('.info p')[1]
        const caloriesP = newRecord.querySelectorAll('.info p')[2]

        nameP.textContent = record.name;
        stepsP.textContent = record.steps;
        caloriesP.textContent = record.calories;

        const changeBtn = newRecord.querySelector('.change-btn');
        changeBtn.addEventListener('click', () => {
            nameEl.value = nameP.textContent
            stepsEl.value = stepsP.textContent
            caloriesEl.value = caloriesP.textContent

            addRecordBtn.disabled = true;
            editRecordBtn.disabled = false;

            recordToEditId = record._id;
        });

        const deleteBtn = newRecord.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', async () => {
            await fetch(`${BASE_URL}/${record._id}`, {
                method: 'DELETE'
            });

            visualizeRecords();
        });

        return newRecord;
    };

    async function getRecords() {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        return Object.values(result);
    };

    async function visualizeRecords() {
        const records = await getRecords();

        listUlEl.innerHTML = ''

        records.forEach(record => {
            const element = createRecords(record);
            listUlEl.appendChild(element);
        });

        editRecordBtn.disabled = true;
    };
};

solve();