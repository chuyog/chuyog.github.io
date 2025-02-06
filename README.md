<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <style>
        body { text-align: center; font-family: Arial, sans-serif; background: #f9f9f9; }
        table { margin: auto; border-collapse: collapse; }
        td { border: 2px solid #333; width: 80px; height: 80px; }
        button { width: 100%; height: 100%; font-size: 32px; background: white; border: none; cursor: pointer; }
        .reset-btn { margin-top: 20px; font-size: 18px; padding: 10px; background: #ff4d4d; color: white; border: none; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Tic-Tac-Toe</h1>
    <h2 id="winner"></h2>
    <table>
        <tr><td><button></button></td><td><button></button></td><td><button></button></td></tr>
        <tr><td><button></button></td><td><button></button></td><td><button></button></td></tr>
        <tr><td><button></button></td><td><button></button></td><td><button></button></td></tr>
    </table>
    <button class="reset-btn" onclick="resetGame()">Reset</button>
    <script>
        let xTurn = true;
        document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => mark(btn)));
        
        function mark(btn) {
            if (!btn.innerText) {
                btn.innerText = xTurn ? "X" : "O";
                btn.style.color = xTurn ? "blue" : "green";
                xTurn = !xTurn;
                checkWin();
            }
        }
        
        function resetGame() {
            document.querySelectorAll("button").forEach(btn => btn.innerText = "");
            document.getElementById("winner").innerText = "";
            xTurn = true;
        }
        
        function checkWin() {
            let buttons = [...document.querySelectorAll("button")].map(btn => btn.innerText);
            let wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
            for (let [a, b, c] of wins) {
                if (buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
                    document.getElementById("winner").innerText = `${buttons[a]} Wins!`;
                    return;
                }
            }
        }
    </script>
</body>
</html>
