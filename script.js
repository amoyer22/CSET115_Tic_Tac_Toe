const playerX = 'x'
const playerO = 'o'
let currentPlayer = playerX;
const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const WinnerMessageTextElement = document.getElementById('winnerMessageText');
const restart = document.getElementById('restart');
const WinnerMessage = document.getElementById('winnerMessage')

const WinCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

startGame()

restart.addEventListener('click', startGame)

function startGame() {
    isPlayer_O_Turn = false
    cellElements.forEach(cell => {
        cell.classList.remove(playerX)
        cell.classList.remove(playerO)
        cell.removeEventListener('click', MouseClick)
        cell.addEventListeener('click', MouseClick, {once: true })
    })
    winningMessage.classList.remove('show')
}

function gameOver(draw) {
    if(draw) {
        WinnerMessageTextElement.innerText = "Draw!"
    }
    else {
        WinnerMessageTextElement.innerText = ` Player ${winner} wins!`
    }
}