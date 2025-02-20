
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Match</title>
    <style>
        .tile {
            font-size: xx-large;
            width: 100px;
            height: 100px;
            line-height: 100px;
            background-color: white;
            text-align: center;
            cursor: pointer;
        }
        td {
            width: 55px;
            height: 55px;
        }
        #gameBoard {
            margin: 20px auto;
            display: block;
            text-align: center;
        }
        .game-info {
            text-align: center;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>Welcome to Memory Match</h1>
    <div class="game-info">
        <p><button onclick="resetBoard()">Reset Game</button></p>
        <p>Matches: <span id="matchCount">0</span></p>
        <p><span id="gameStatus"></span></p>
    </div>
    <div id="gameBoard"></div>
    
    <script>
        let map = [];
        let tile1 = null, tile2 = null;
        let matchCount = 0;
        let totalMatches = 0;

        const loadMap = (rows = 6, cols = 6) => {
            let maxVal = (rows * cols) / 2;
            totalMatches = maxVal;  // Total number of matches
            let numbers = [];
            for (let i = 1; i <= maxVal; i++) {
                numbers.push(i, i);
            }
            numbers = shuffle(numbers);
            
            map = [];
            for (let i = 0; i < rows; i++) {
                map.push(numbers.slice(i * cols, (i + 1) * cols));
            }
        };

        const shuffle = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        const makeBoard = (rows = 4, cols = 4) => {
            let output = '<table>';
            for (let row = 0; row < rows; row++) {
                output += '<tr>';
                for (let col = 0; col < cols; col++) {
                    output += `<td><button class="tile" id="${row}_${col}" onclick="process(${row}, ${col})"></button></td>`;
                }
                output += '</tr>';
            }
            document.getElementById('gameBoard').innerHTML = output + '</table>';
        };

        function resetBoard() {
            loadMap();
            makeBoard();
            matchCount = 0;
            document.getElementById('matchCount').textContent = matchCount;
            document.getElementById('gameStatus').textContent = '';
        }

        function process(row, col) {
            let clicked_tile = document.getElementById(`${row}_${col}`);
            if (!clicked_tile.innerHTML) {
                if (!tile1) {
                    tile1 = clicked_tile;
                    clicked_tile.innerHTML = map[row][col];
                } else if (!tile2) {
                    tile2 = clicked_tile;
                    clicked_tile.innerHTML = map[row][col];
                    setTimeout(checkMatch, 1000);
                }
            }
        }

        const checkMatch = () => {
            if (tile1.innerHTML === tile2.innerHTML) {
                tile1.hidden = true;
                tile2.hidden = true;
                matchCount++;
                document.getElementById('matchCount').textContent = matchCount;
                if (matchCount === totalMatches) {
                    document.getElementById('gameStatus').textContent = 'You Win! All pairs matched!';
                }
            } else {
                tile1.innerHTML = '';
                tile2.innerHTML = '';
            }
            tile1 = tile2 = null;
        };

        resetBoard();
    </script>
</body>
</html>
