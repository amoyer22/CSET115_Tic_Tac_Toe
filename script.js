const playerX = 'x'
const playerO = 'o'
let currentPlayer = playerX;
const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const WinnerMessageTextElement = document.getElementById('winnerMessageText');
const restart = document.getElementById('restart');
const WinnerMessage = document.getElementById('winnerMessage')

const WinCombos = [
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
    if (currentClass === playerX) {
        cell.classList.add(playerX)
    }
    else {
        cell.classList.add(playerX)
    }
}

function swapTurns() {
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
//check if it is a draw 
function isDraw() {
    return Array.from(cells).every(cell => {
        return cell.classList.contains(playerX) || cell.classList.contains(playerO);
    });
}

function checkWin(currentClass) {
    for (let i = 0; i < winCombos.length; i++) {
        const combo = winCombos[i]
        let win = true;

        for (let j = 0; j < combo.length; j++) {
            const index = combo[j]
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