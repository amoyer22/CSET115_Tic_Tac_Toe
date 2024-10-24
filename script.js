const PlayerX = 'x'
const playerO = 'o'
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function gameOver(draw) {
    if(draw) {
        WinnerMessageTextElement.innerText = "Draw!"
    }
    else {
        WinnerMessageTextElement.innerText = ` Player ${winner} wins!`
    }
}