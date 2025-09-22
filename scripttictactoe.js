let currentPlayer = "X";
let gameOver = false;

function changeMark(cellId) {
    if (gameOver) return;

    const cell = document.getElementById(cellId);
    if (cell.textContent !== "") return;

    cell.textContent = currentPlayer;

    if (checkWinner()) {
        document.getElementById("game-status").textContent = `Player ${currentPlayer} Wins! 🎉`;
        gameOver = true;
        return;
    }

    if (isDraw()) {
        document.getElementById("game-status").textContent = "It's a Draw! 🤝";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("game-status").textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
    const winningCombos = [
        ["a1", "b1", "c1"],
        ["a2", "b2", "c2"],
        ["a3", "b3", "c3"],
        ["a1", "a2", "a3"],
        ["b1", "b2", "b3"],
        ["c1", "c2", "c3"],
        ["a1", "b2", "c3"],
        ["c1", "b2", "a3"]
    ];

    return winningCombos.some(combo => {
        const [a, b, c] = combo.map(id => document.getElementById(id).textContent);
        return a && a === b && b === c;
    });
}

function isDraw() {
    return [...document.querySelectorAll("button")].slice(0, 9)
        .every(cell => cell.textContent !== "");
}

function resetGame() {
    [...document.querySelectorAll("button")].forEach(cell => cell.textContent = "");
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("game-status").textContent = "Player X's Turn";
}

window.onload = () => {
    document.getElementById("game-status").textContent = "Player X's Turn";
};
