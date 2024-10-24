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
        cells.forEach(cell => {
        cell.classList.remove(playerX)
        cell.classList.remove(playerO)
        cell.removeEventListener('click', MouseClick)
        cell.addEventListeener('click', MouseClick, {once: true })
    })
    winningMessage.classList.remove('show')
}

MouseClick(e) {
    const cell = e.target
    const currentClass = currentPlayer
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        gameOver(false);
    } else if (isDraw()) {
        gameOver(true);
    } else {
        swapTurn();
    }
}

function placeMark(cell, currentClass) {
    if (currentClass === playerX) {
        cell.classList.add(playerX)
    }
    else {
        cell.classList.add(playerX)
    }
}

function swapTurn() {
    if(currentPlayer === playerX) {
        currentPlayer = playerO
    }
    else {
        currentPlayer = playerX
    }
}

function gameOver(draw) {
    if(draw) {
        WinnerMessageTextElement.innerText = "Draw!"
    }
    else {
        WinnerMessageTextElement.innerText = ` Player ${winner} wins!`
    }
}