function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/messenger'
    const sendBtn = document.getElementById('submit')
    const refreshBtn = document.getElementById('refresh')
    const textAreaEl = document.getElementById('messages')

    sendBtn.addEventListener('click', async(event) => {
        const authorEl = document.querySelector('input[name=author]')
        const contentEl = document.querySelector('input[name=content]')

        const messageToSend = { 
            author: authorEl.value,
            content: contentEl.value 
        } 
        
        await fetch(URL, {
            method: 'POST',
            header: {'content-type': 'application/json'},
            body: JSON.stringify(messageToSend)
        })

        authorEl.value = ''
        contentEl.value = ''
    })

    refreshBtn.addEventListener('click', async(event) => {
        const response = await fetch(URL)
        const result = await response.json()
        const messages = Object.values(result).map(x => `${x.author}: ${x.content}`).join('\n')
        textAreaEl.textContent = messages
    })
}

attachEvents();