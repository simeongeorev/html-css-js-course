const BASE_URL = 'http://localhost:3030/jsonstore/orders/'

function solve() {
    const loadAllOrdersBtn = document.getElementById('load-orders');
    const ordersListDiv = document.getElementById('list');
    const nameEl = document.getElementById('name');
    const quantityEl = document.getElementById('quantity');
    const dateEl = document.getElementById('date');
    const orderBtn = document.getElementById('order-btn');
    const editOrderBtn = document.getElementById('edit-order');

    let orderId;

    // LOAD ALL ORDERS
    loadAllOrdersBtn.addEventListener('click', async () => {
        await visualizeOrders();
    });

    // CREATE NEW ORDER
    orderBtn.addEventListener('click', async (event) => {
        event.preventDefault();

        // check if empty
        if (!nameEl.value.trim() || !quantityEl.value.trim() || !dateEl.value.trim()) {
            return;
        };

        // create object
        const orderObj = getOrderObj();

        // post the object
        await postOrder(orderObj);

        // clear the input fields
        clearInputFields()

        // visualize all the orders again
        await visualizeOrders();
    });

    // EDIT ORDER
    editOrderBtn.addEventListener('click', async (event) => {

        event.preventDefault();
        // create the order object to send
        const orderObj = getOrderObj();

        // send the PUT request
        await putEditOrder(orderObj, orderId);

        // send the GET request to update the orders
        await visualizeOrders();

        // enable and disable buttons
        editOrderBtn.disabled = true;
        orderBtn.disabled = false;
    });

    async function getAllOrders() {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        const data = Object.values(result);
        return data;
    };

    async function postOrder(ordObj) {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(ordObj)
        });
    };

    async function putEditOrder(ordObj, id) {
        await fetch(`${BASE_URL}${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ordObj)
        })
    }

    async function visualizeOrders() {
        ordersListDiv.innerHTML = '';

        const allOrders = await getAllOrders();

        allOrders.forEach(async order => {
            ordersListDiv.appendChild(await createOrderEl(order));
        })

        editOrderBtn.disabled = true;
    };

    async function createOrderEl(orderObj) {
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container');

        const newNameEl = document.createElement('h2');
        newNameEl.textContent = orderObj.name;

        const newQuantityEl = document.createElement('h3');
        newQuantityEl.textContent = orderObj.quantity;

        const newDateEl = document.createElement('h3');
        newDateEl.textContent = orderObj.date;

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';

        changeBtn.addEventListener('click', () => {
            // populate the input fields
            nameEl.value = newNameEl.textContent;
            quantityEl.value = newQuantityEl.textContent;
            dateEl.value = newDateEl.textContent;

            // remove the order from the list
            containerDiv.remove();

            // activate the 'Edit order' button
            editOrderBtn.disabled = false;

            // deactivate the 'Order' button
            orderBtn.disabled = true;

            // change the order id
            orderId = orderObj._id;
        });

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done-btn');
        doneBtn.textContent = 'Done';

        doneBtn.addEventListener('click', async () => {
            // send a DELETE request
            await fetch(`${BASE_URL}${orderObj._id}`, { method: 'DELETE' });

            // display all the items
            await visualizeOrders();
        });

        containerDiv.appendChild(newNameEl);
        containerDiv.appendChild(newQuantityEl);
        containerDiv.appendChild(newDateEl);
        containerDiv.appendChild(changeBtn);
        containerDiv.appendChild(doneBtn);

        return containerDiv;
    };

    function clearInputFields() {
        nameEl.value = '';
        quantityEl.value = '';
        dateEl.value = '';
    }

    function getOrderObj() {
        return {
            name: nameEl.value,
            quantity: quantityEl.value,
            date: dateEl.value
        };
    };
};

solve();