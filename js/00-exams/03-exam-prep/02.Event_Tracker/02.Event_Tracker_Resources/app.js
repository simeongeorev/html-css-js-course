window.addEventListener("load", solve);

function solve() {
    const eventNameEl = document.getElementById('event');
    const eventNoteEl = document.getElementById('note');
    const eventDateEl = document.getElementById('date');
    const saveBtn = document.getElementById('save');
    const upcomingUl = document.getElementById('upcoming-list');
    const eventsUl = document.getElementById('events-list');
    const deleteBtn = document.getElementsByClassName('delete')[0];


    saveBtn.addEventListener('click', event => {
        const eventName = eventNameEl.value;
        const eventNote = eventNoteEl.value;
        const eventDate = eventDateEl.value;

        if (!eventName || !eventNote || !eventDate) {
            return
        }

        const newLi = document.createElement('li');
        newLi.classList.add('event-item');

        const newDiv = document.createElement('div');
        newDiv.classList.add('event-container');

        const articleEl = document.createElement('article');

        const nameP = document.createElement('p');
        nameP.textContent = `Name: ${eventName}`;

        const noteP = document.createElement('p');
        noteP.textContent = `Note: ${eventNote}`;

        const dateP = document.createElement('p');
        dateP.textContent = `Date: ${eventDate}`;

        articleEl.appendChild(nameP);
        articleEl.appendChild(noteP);
        articleEl.appendChild(dateP);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'edit');
        editBtn.textContent = 'Edit'

        editBtn.addEventListener('click', () => {
            eventNameEl.value = eventName;
            eventNoteEl.value = eventNote;
            eventDateEl.value = eventDate;

            newLi.remove();
        });

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('btn', 'done');
        doneBtn.textContent = 'Done'

        doneBtn.addEventListener('click', () => {
            buttonsDiv.remove();
            newDiv.remove();
            newLi.appendChild(articleEl);
            eventsUl.appendChild(newLi);
        });

        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(doneBtn);

        newDiv.appendChild(articleEl);
        newDiv.appendChild(buttonsDiv);

        newLi.appendChild(newDiv);

        upcomingUl.append(newLi);

        eventNameEl.value = '';
        eventNoteEl.value = '';
        eventDateEl.value = '';
    });

    deleteBtn.addEventListener('click', () => {
        eventsUl.innerHTML = '';
    })
};

