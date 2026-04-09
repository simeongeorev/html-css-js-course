const URL = 'http://localhost:3030/jsonstore/advanced/profiles'

async function lockedProfile() {
    const mainEl = document.getElementById('main')
    const profileTemplateEl = document.getElementsByClassName('profile')[0]

    const users = await getUsers();

    const userTemplates = users.map(x => createCards(x))

    mainEl.innerHTML = ''

    mainEl.append(...userTemplates)


    function createCards(user) {
        const newTemplate = profileTemplateEl.cloneNode(true);

        newTemplate.style.display = 'inline-block';

        newTemplate.querySelector('input[name=user1Username]').value = user.username;
        newTemplate.querySelector('input[name=user1Email]').value = user.email;
        newTemplate.querySelector('input[name=user1Age]').value = user.age;

        newTemplate.setAttribute('data-id', user._id)

        const userDetailsEl = newTemplate.querySelector('div');
        userDetailsEl.style.display = 'none';

        const showMoreBtn = newTemplate.querySelector('button');
        const lockBtn = newTemplate.querySelector('input[value=lock]')

        showMoreBtn.addEventListener('click', event => {
            if (lockBtn.checked) {
                return
            }

            if (showMoreBtn.textContent === 'Hide it') {
                userDetailsEl.style.display = 'none';
                showMoreBtn.textContent = 'Show more'
            } else {
                userDetailsEl.style.display = 'block';
                showMoreBtn.textContent = 'Hide it'
            }
        })

        return newTemplate;
    }

    async function getUsers() {
        const response = await fetch(URL);
        const result = await response.json();
        const usersData = Object.values(result);
        return usersData;
    }
}