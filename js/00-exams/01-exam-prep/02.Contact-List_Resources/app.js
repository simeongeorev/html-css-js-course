window.addEventListener("load", solve);

function solve() {
  const formEl = document.querySelector('#add-contact form');
  const addBtnEl = document.getElementById('add-btn')
  const checkListUlEl = document.getElementById('check-list')
  const contactListUlEl = document.getElementById('contact-list')

  const nameEl = document.getElementById('name');
  const phoneEl = document.getElementById('phone');
  const categoryEl = document.getElementById('category');

  addBtnEl.addEventListener('click', event => {
    event.preventDefault();

    if (!nameEl.value || !phoneEl.value || !categoryEl.value) {
      return
    }

    createContact(nameEl.value, phoneEl.value, categoryEl.value)

    nameEl.value = '';
    phoneEl.value = '';
    categoryEl.value = '';
  })

  function createContact(name, phone, category) {
    const liEl = document.createElement('li')
    const articleEl = document.createElement('article')

    // creating Ps
    const nameP = document.createElement('p')
    nameP.textContent = `name:${name}`
    const phoneP = document.createElement('p')
    phoneP.textContent = `phone:${phone}`
    const categoryP = document.createElement('p')
    categoryP.textContent = `category:${category}`

    articleEl.appendChild(nameP)
    articleEl.appendChild(phoneP)
    articleEl.appendChild(categoryP)

    const buttonsDiv = document.createElement('div')

    // creating buttons
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.addEventListener('click', () => {
      nameEl.value = name
      phoneEl.value = phone
      categoryEl.value = category

      liEl.remove();
    })

    const saveBtn = document.createElement('button')
    saveBtn.classList.add('save-btn')
    saveBtn.addEventListener('click', () => {
      // add to contacts
      contactListUlEl.appendChild(liEl)

      const delBtn = document.createElement('button')
      delBtn.classList.add('del-btn')

      buttonsDiv.innerHTML = ''
      buttonsDiv.appendChild(delBtn)

      delBtn.addEventListener('click', () => {
        liEl.remove();
      })
    })


    buttonsDiv.classList.add('buttons')
    buttonsDiv.appendChild(editBtn)
    buttonsDiv.appendChild(saveBtn)

    liEl.appendChild(articleEl)
    liEl.appendChild(buttonsDiv)

    checkListUlEl.appendChild(liEl)
  }
}

document.body.innerHTML =`
<h1>Contact List:</h1>
  <main>
  <section id="add-contact">
    <h2>Add Contact</h2>
    <form>
      <input type="text" id="name" placeholder="Name">
      <input type="number" id="phone" placeholder="Phone Number">
      <select name="category" id="category">
        <option value="" selected disabled>Category</option>
        <option value="work">Work</option>
        <option value="family">Family</option>
        <option value="friends">Friends</option>
      </select>
      <input type="button" id="add-btn">
    </form>
  </section>
  <div id="check-contact">
    <section class="contact">
      <h2>Check</h2>
      <ul id="check-list"></ul>
    </section>
    <section class="contact">
      <h2>Contacts</h2>
      <ul id="contact-list"></ul>
    </section>
  </div>
</main>
        <script src="./app.js"></script>
`
result();
const addAction = {
        name: () => document.getElementById("name"),
        phone: () => document.getElementById("phone"),
        category: () => document.getElementById("category"),
        addBtn: () => document.getElementById("add-btn"),
        approveBtns: () => document.querySelectorAll('.del-btn'),
        checkList: () => document.getElementById('check-list'),
        editBtns: () => document.querySelectorAll('.edit-btn'),
        saveBtn: () => document.querySelectorAll('.save-btn'),
        doneTasks: () => document.getElementById('contact-list')
    }

  addAction.name().value = "Ivan"
  addAction.phone().value = "0888888888"
  addAction.category().value = "Work"

  addAction.addBtn().click();
  

  expect((document.querySelectorAll("li>article>p"))[0].textContent).to.equal('name:Ivan', 'Name title is invalid.');
  expect((document.querySelectorAll("li>article>p"))[1].textContent).to.equal('phone:0888888888', 'Phone category is invalid.');
  expect((document.querySelectorAll("li>article>p"))[2].textContent).to.equal('category:work', 'Category content is invalid');

