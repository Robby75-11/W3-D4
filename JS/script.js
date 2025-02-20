const board = document.getElementById("board");
const numbers = Array.from({ length: 90 }, (_, i) => i + 1);
const drawnNumbers = new Set();

function createBoard() {
  for (let i = 1; i <= 90; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = i;
    cell.id = "num-" + i;
    board.appendChild(cell);
  }
}

function drawNumber() {
  if (drawnNumbers.size === 90) {
    document.getElementById("drawBtn").disabled = true;
    return;
  }

  let randomIndex;
  let number;
  do {
    randomIndex = Math.floor(Math.random() * 90);
    number = numbers[randomIndex];
  } while (drawnNumbers.has(number));

  drawnNumbers.add(number);
  document.getElementById("num-" + number).classList.add("selected");
  document.getElementById(
    "lastNumber"
  ).textContent = `Ultimo Numero: ${number}`;

  if (drawnNumbers.size === 90) {
    document.getElementById("drawBtn").disabled = true;
  }
}

createBoard();
