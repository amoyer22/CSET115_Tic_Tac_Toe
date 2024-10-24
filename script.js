const playerX = 'x'
const playerO = 'o'
let currentPlayer = playerX;
const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winnerMessageTextElement = document.getElementById('winnerMessageText');
const restart = document.getElementById('restart');
const winnerMessage = document.getElementById('winnerMessage')

const winCombos = [
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
    currentPlayer = playerX;
        cells.forEach(cell => {
        cell.classList.remove(playerX)
        cell.classList.remove(playerO)
        cell.removeEventListener('click', MouseClick)
        cell.addEventListener('click', MouseClick, {once: true })
    })
    winnerMessage.classList.remove('show')
}

 function MouseClick(e) {
    const cell = e.target
    const currentClass = currentPlayer
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        gameOver(false);
    } else if (isDraw()) {
        gameOver(true);
    } else {
        swapTurns();
    }

 }

 function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
    cell.innerText = currentClass.toUpperCase();
 }

function swapTurns() {
    currentPlayer = currentPlayer === playerX ? playerO : playerX;
    UpdaterTurnTracker()
}


function gameOver(draw) {
    if(draw) {
        winnerMessageTextElement.innerText = "Draw!"
    }
    else {
        const winner = currentPlayer === playerX ? 'Player 1' : 'Player 2';
        winnerMessageTextElement.innerText = `${winner} wins!`;
    }
    winnerMessage.classList.add('show')
}
//check if it is a draw 
function isDraw() {
    return Array.from(cells).every(cell => {
        return cell.classList.contains(playerX) || cell.classList.contains(playerO);
    });
}

function checkWin(currentClass) {
    for (let i = 0; i < winCombos.length; i++) {
        const combo = winCombos[i];
        let win = true;
        for (let j = 0; j < combo.length; j++) {
            const index = combo[j];
            const cell = cells[index];
            if (!cell.classList.contains(currentClass)) {
                win = false;
                break;
            }
        }
        if (win) {
            return true;
        }
    }
    return false;

}
function UpdateTurnTracker() {
    const turnTracker = document.querySelector('.turnTracker h2');
    turnTracker.textContent = currentPlayer === playerX ? "Player 1 (X):" : "Player 2 (O):";
}