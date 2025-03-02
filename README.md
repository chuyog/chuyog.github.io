<html lang="en">
<head>
    <title>Minimalist  Mastermind</title>
    <style>
        body {
            font-family: Times New Roman, sans-serif;
            background-color: #87CEEB;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        #gameArea {
            background-color: gray;
            padding: 300px;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        input {
            width: 30px;
            text-align: center;
        }
        button {
            margin-top: 30px;
        }
        #feedback {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Minimalist Mastermind</h1>
    <div id="gameArea">
        <p>Enter 4 digits (1-6):</p>
        <input type="text" maxlength="1" id="slot1">
        <input type="text" maxlength="1" id="slot2">
        <input type="text" maxlength="1" id="slot3">
        <input type="text" maxlength="1" id="slot4">
        <button onclick="checkGuess()">Submit Guess</button>
        <div id="feedback"></div>
    </div>

    <script>
        class RuleError extends Error {
            constructor(message) {
                super(message);
                this.name = "Rule Error";
            }
        }

        const secretCode = generateSecretCode();

        function generateSecretCode() {
            const code = [];
            for (let i = 0; i < 4; i++) {
                code.push(Math.floor(Math.random() * 6) + 1);
            }
            console.log("Secret Code (for testing):", code);
            return code;
        }

        function checkInput(value) {
            try {
                const slot = parseInt(value, 10);
                if (isNaN(slot)) {
                    throw new RuleError("Slots must contain numbers only.");
                }
                if (slot < 1 || slot > 6) {
                    throw new RuleError("Only those numbers which is inbetween 1 and 6 are accepted.");
                }
                return true;
            } catch (error) {
                alert(error.message);
                return false;
            }
        }

        function checkGuess() {
            const slots = [
                document.getElementById("slot1").value,
                document.getElementById("slot2").value,
                document.getElementById("slot3").value,
                document.getElementById("slot4").value
            ];

            for (const slot of slots) {
                if (!checkInput(slot)) {
                    document.getElementById("feedback").innerText = "Invalid input detected.";
                    return;
                }
            }

            const guess = slots.map(Number);
            const feedback = getFeedback(guess);
            document.getElementById("feedback").innerText = feedback;

            if (feedback === "4 black - It is correct!") {
                alert("Congratulations! You have made it!");
                resetGame();
            }
        }

        function getFeedback(guess) {
            let black = 0;
            let white = 0;

            const codeCopy = [...secretCode];
            const guessCopy = [...guess];

            // Check for black pegs (correct position and number)
            for (let i = 0; i < 4; i++) {
                if (guessCopy[i] === codeCopy[i]) {
                    black++;
                    guessCopy[i] = codeCopy[i] = null; // Clear matched positions
                }
            }

            // Check for white pegs (correct number, wrong position)
            for (let i = 0; i < 4; i++) {
                if (guessCopy[i] !== null && codeCopy.includes(guessCopy[i])) {
                    white++;
                    codeCopy[codeCopy.indexOf(guessCopy[i])] = null; // Clear matched number
                }
            }

            return `${black} black, ${white} white`;
        }

        function resetGame() {
            document.getElementById("slot1").value = "";
            document.getElementById("slot2").value = "";
            document.getElementById("slot3").value = "";
            document.getElementById("slot4").value = "";
            document.getElementById("feedback").innerText = "";
        }
    </script>
</body>
</html>
