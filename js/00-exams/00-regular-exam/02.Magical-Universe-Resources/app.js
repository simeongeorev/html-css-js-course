window.addEventListener("load", solve);

function solve() {
    const nameInputEl = document.getElementById('name');
    const locationInputEl = document.getElementById('location');
    const genderInputEl = document.getElementById('gender');
    const createBtn = document.getElementById('create-btn');
    const preparingListUl = document.getElementById('preparing-list');
    const characterListUl = document.getElementById('character-list');

    createBtn.addEventListener('click', event => {
        // check if the inputs are empty
        if (!nameInputEl.value.trim() || !locationInputEl.value.trim() || !genderInputEl.value.trim()) {
            return;
        };

        const newLi = document.createElement('li');
        newLi.classList.add('creating');

        const newArticle = document.createElement('article');

        const nameEl = document.createElement('h4');
        nameEl.textContent = nameInputEl.value;

        const locationEl = document.createElement('p');
        locationEl.textContent = locationInputEl.value;

        const genderEl = document.createElement('p');
        genderEl.textContent = genderInputEl.value;

        newArticle.appendChild(nameEl);
        newArticle.appendChild(locationEl);
        newArticle.appendChild(genderEl);

        const editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'Edit';

        // EDIT BUTTON CLICK
        editBtn.addEventListener('click', () => {
            nameInputEl.value = nameEl.textContent;
            locationInputEl.value = locationEl.textContent;
            genderInputEl.value = genderEl.textContent;

            newLi.remove();

            createBtn.disabled = false;
        });

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('action-btn', 'done');
        doneBtn.textContent = 'Done';

        // DONE BUTTON CLICK
        doneBtn.addEventListener('click', () => {
            characterListUl.appendChild(newLi);

            editBtn.remove();
            doneBtn.remove();

            createBtn.disabled = false;
        });

        newLi.appendChild(newArticle);
        newLi.appendChild(editBtn);
        newLi.appendChild(doneBtn);

        preparingListUl.appendChild(newLi);

        // disabling the Create button
        createBtn.disabled = true;

        // clearing the fields
        nameInputEl.value = ''
        locationInputEl.value = ''
        genderInputEl.value = ''
    });

};
