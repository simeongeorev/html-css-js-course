document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const formEl = document.querySelector('form')
    const menuEl = document.getElementById('menu')
    
    formEl.addEventListener('submit', event =>{
        event.preventDefault();

        const textEl = formEl.querySelector('#newItemText')
        const valueEl = formEl.querySelector('#newItemValue')

        const textStr = textEl.value.trim()
        const valueStr = valueEl.value.trim()
        
        if(!textStr || !valueStr){
            return
        }

        const newOptionEl = document.createElement('option')
        newOptionEl.textContent = `${textStr} ${valueStr}`

        menuEl.appendChild(newOptionEl)
        
        textEl.value = ''
        valueEl.value = ''
    })
}


// TESTS
document.body.innerHTML = `
<article>
        <h1>Dropdown Menu</h1>
        
        <label for="menu">Menu:</label>
        <select id="menu"></select>
        
        <form>
            <p class="field">
                <label for="newItemText">Text:</label>
                <input type="text" id="newItemText" />
            </p>
            
            <p class="field">
                <label for="newItemValue">Value:</label>
                <input type="text" id="newItemValue" />
            </p>
                
            <input type="submit" value="Add">
        </form>

    </article>
`;
result();

$('#newItemText').val('new node');
$('#newItemValue').val('val1');

$('input[type="submit"]').click();
let item = $('#menu').find('option');

expect(item.length).to.equal(1, "Item wasn't added to the menu");
expect(item.text()).to.equal('new node', "Item text wasn't added correctly");
expect(item.val()).to.equal('val1', "Item value wasn't added correctly");

expect($('#newItemText').val()).to.equal('', "The 'newItemText' field should be cleared after submission");
expect($('#newItemValue').val()).to.equal('', "The 'newItemValue' field should be cleared after submission");
