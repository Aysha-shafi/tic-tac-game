🚀 Features

- Two players (X and O) alternate turns.

- Automatically detects when a player has won.

- Displays the winner in an <h2> element.

- Board state stored in a JavaScript array.

📂 Project Structure
.
├── index.html     # Game board UI
├── style.css      # Styling for the board
├── script.js      # Game logic
└── README.md      # Documentation

🧩 Game Logic
1. Player Handling
let currentPlayer = "X";
currentPlayer = (currentPlayer == "X" ? "O" : "X");


Toggles between X and O after each move.

2. Tracking Moves
let winner = Array(9).fill(null);
winner[cellIndex] = currentPlayer;


Stores player moves in a winner array representing the 3x3 grid.

3. Winner Check
function checkWinner() {
    if (
        winner[0] != null && winner[0] == winner[1] && winner[1] == winner[2] ||
        winner[3] != null && winner[3] == winner[4] && winner[4] == winner[5] ||
        winner[6] != null && winner[6] == winner[7] && winner[7] == winner[8] ||
        winner[0] != null && winner[0] == winner[3] && winner[3] == winner[6] ||
        winner[1] != null && winner[1] == winner[4] && winner[4] == winner[7] ||
        winner[2] != null && winner[2] == winner[5] && winner[5] == winner[8] ||
        winner[0] != null && winner[0] == winner[4] && winner[4] == winner[8] ||
        winner[2] != null && winner[2] == winner[4] && winner[4] == winner[6]
    ) {
        h2.innerHTML = `${currentPlayer} is winner`;
    }
}


Checks rows, columns, and diagonals for a winner.

🎮 How to Play

1.Open index.html in your browser.

2.Click on the cells to place X or O.

3.The game announces the winner in the <h2> element.

📌 Future Improvements

- Add draw detection when the board is full.

- Add reset button to restart the game.

- Improve UI with animations.