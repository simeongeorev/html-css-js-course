// endpoint
const BASE_URL = 'http://localhost:3030/jsonstore/games/'

const loadGamesBtn = document.getElementById('load-games');
const addGamesBtn = document.getElementById('add-game');
const editGameBtn = document.getElementById('edit-game');

const gamesListEl = document.getElementById('games-list');
const gameTemplate = document.getElementsByClassName('board-game')[0];

const gameNameEl = document.getElementById('g-name')
const gameTypeEl = document.getElementById('type')
const gamePlayersEl = document.getElementById('players')

async function solve() {

    loadGamesBtn.addEventListener('click', async (event) => {
        await visualizeGames()
        editGameBtn.disabled = true;
    })

    addGamesBtn.addEventListener('click', async () => {
        if (!gameNameEl.value || !gameTypeEl.value || !gamePlayersEl.value) {
            return
        }

        const gameToPost = {
            name: gameNameEl.value,
            type: gameTypeEl.value,
            players: gamePlayersEl.value
        }

        await postGame(gameToPost);
        clearFields();
        await visualizeGames();
    })

    // add event listener to the edit game button
    let currentId = null;
    editGameBtn.addEventListener('click', async () => {

        const gameToPut = {
            name: gameNameEl.value,
            type: gameTypeEl.value,
            players: gamePlayersEl.value,
            _id: currentId
        }

        // send put request
        await fetch(`${BASE_URL}${currentId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gameToPut)
        })

        await visualizeGames();
        editGameBtn.disabled = true;
        addGamesBtn.disabled = false;

        clearFields();
    })

    async function getAllGames() {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        const data = Object.values(result);
        return data;
    }

    function createGames(gameObj) {

        const newGame = gameTemplate.cloneNode(true);

        const gameName = gameObj.name;
        const gameType = gameObj.type;
        const gamePlayers = gameObj.players;
        const gameId = gameObj._id;

        const newGameName = newGame.querySelectorAll('.content p')[0]
        const newGameType = newGame.querySelectorAll('.content p')[1]
        const newGamePlayers = newGame.querySelectorAll('.content p')[2]

        newGameName.textContent = gameName
        newGameType.textContent = gameType
        newGamePlayers.textContent = gamePlayers
        newGame.id = gameId

        const changeBtn = newGame.querySelector('.change-btn');
        changeBtn.addEventListener('click', async (event) => {
            gameNameEl.value = gameName
            gameTypeEl.value = gameType
            gamePlayersEl.value = gamePlayers

            currentId = gameId

            editGameBtn.disabled = false;
            addGamesBtn.disabled = true;
        })

        const deleteBtn = newGame.querySelector('.delete-btn')
        deleteBtn.addEventListener('click', async () => {
            await fetch(`${BASE_URL}${gameId}`, {
                method: 'DELETE'
            })

            await visualizeGames();
        })

        gamesListEl.appendChild(newGame)
    }

    async function postGame(gameObj) {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(gameObj)
        })
    }

    async function visualizeGames() {
        gamesListEl.innerHTML = '';

        (await getAllGames()).forEach(x => {
            createGames(x);
        });
    }

    function clearFields() {
        gameNameEl.value = ''
        gameTypeEl.value = ''
        gamePlayersEl.value = ''
    }
}

solve();