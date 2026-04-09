const BASE_URL = 'http://localhost:3030/jsonstore/phonebook'

function attachEvents() {
    const loadBtn = document.getElementById('btnLoad')
    const createBtn = document.getElementById('btnCreate')
    const phonebookEl = document.getElementById('phonebook')

    // load phonebook
    loadBtn.addEventListener('click', async (event) => { loadPhoneBook() });

    // create contact
    createBtn.addEventListener('click', async (event) => {
        const personInputEl = document.getElementById('person');
        const phoneInputEl = document.getElementById('phone');

        if (personInputEl.value == '' || phoneInputEl.value == '') {
            return
        }

        const bodyToSend = {
            person: personInputEl.value.trim(),
            phone: phoneInputEl.value.trim()
        }

        await fetch(BASE_URL, {
            method: 'POST',
            header: { 'content-type': 'application/json' },
            body: JSON.stringify(bodyToSend)
        })

        loadPhoneBook()

        personInputEl.value = ''
        phoneInputEl.value = ''
    })

    // function to load phonebook
    async function loadPhoneBook() {
        const loadResponse = await fetch(BASE_URL);
        const loadResult = await loadResponse.json();
        const phonesObjs = Object.values(loadResult);

        phonebookEl.innerHTML = ''

        for (const phone of phonesObjs) {
            const delBtn = document.createElement('button');
            // delBtn.id = `delete-${phone.person}`
            delBtn.id = `delete`
            delBtn.textContent = 'Delete'

            const phoneEl = document.createElement('li');
            phoneEl.id = 'phonebook';
            phoneEl.textContent = `${phone.person}: ${phone.phone}`;

            delBtn.addEventListener('click', async (event) => {
                phoneEl.remove();
                await fetch(`${BASE_URL}/${phone._id}`,{
                    method: 'DELETE'
                })
            });

            phoneEl.appendChild(delBtn)
            phonebookEl.appendChild(phoneEl);
        }
    }
}

attachEvents();