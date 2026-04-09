const GET_LIST_URL = 'http://localhost:3030/jsonstore/advanced/articles/list';
const GET_DETAILS_URL = 'http://localhost:3030/jsonstore/advanced/articles/details';
const mainEl = document.getElementById('main');
const accordionTemplate = document.querySelector('.accordion');

async function solution() {
    // 1. Fetch the initial list
    const response = await fetch(GET_LIST_URL);
    const data = await response.json();
    const articles = Object.values(data);

    mainEl.innerHTML = '';

    // 2. Create elements and append them
    for (const article of articles) {
        const element = createAccordionEls(article);
        mainEl.appendChild(element);
    }
}

function createAccordionEls(acc) {
    const newAccordion = accordionTemplate.cloneNode(true);

    const accordionTitleEl = newAccordion.querySelector('.head span');
    const accordionButtonEl = newAccordion.querySelector('.head button');
    const extraDiv = newAccordion.querySelector('.extra');
    const accordionExtraPEl = newAccordion.querySelector('.extra p');

    accordionTitleEl.textContent = acc.title;
    accordionButtonEl.id = acc._id;
    // Ensure the extra content is hidden initially
    extraDiv.style.display = 'none'; 

    // 3. Handle the "More/Less" logic
    accordionButtonEl.addEventListener('click', async (event) => {
        if (event.target.textContent === 'More') {
            // Fetch details only when requested
            const res = await fetch(`${GET_DETAILS_URL}/${acc._id}`);
            const detailData = await res.json();
            
            accordionExtraPEl.textContent = detailData.content;
            extraDiv.style.display = 'block';
            event.target.textContent = 'Less';
        } else {
            extraDiv.style.display = 'none';
            event.target.textContent = 'More';
        }
    });

    return newAccordion;
}

solution();