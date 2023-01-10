const ticTacToe = (() => {
  let board = [
    //Init game
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  let cache = {};
  //cache DOM elements
  function renderBoard() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let id = `${i}-${j}`;
        if (!cache[id]) {
          cache[id] = document.getElementById(id);
        }
        cache[id].innerHTML = board[i][j];
      }
    }
  }

  function addMark(i, j) {
    //Player adds respective symbol
    if (board[i][j] === null) {
      board[i][j] = currentPlayer.symbol;
      cache[`${i}-${j}`].innerHTML = currentPlayer.symbol;
    }
  }
  return {
    renderBoard,
    addMark,
    cache
  };
})();


const createPlayer = (name, symbol) => {
  return {
    name,
    symbol,
  }
};

const player1 = createPlayer("player1", "X");
const player2 = createPlayer("player2", "O");

let currentPlayer = player1;

const createCell = (i, j, value) => {
return {
  i: i,
  j: j,
  value: value,
  handleClick: function() {
    if (this.value === "O") {
      this.value = currentPlayer.symbol;
      this.element.innerHTML = currentPlayer.symbol;
      if(currentPlayer === player1)
          currentPlayer = player2;
      else
          currentPlayer = player1;
    }
  }
};
};

  // gameLogic: game = (() => {

  //   function checkWinner(){
      
  //     function checkColumns(player) {
  //       for (let i = 0; i < board.length; i++) {
  //           let column = board.map(row => row[i]);
  //           if (column.every(cell => cell === player)) {
  //               return true;
  //           }
  //       }
  //       return false;
  //       }

  //   }})();


// markCell: function markCell(row, col, value){
//   if(board[row][col] !== null){
//     console.log(`This cell is already marked, please select another cell!`);
//     return;
//   }
//   board[col][row] = value;
// }

// function checkColumns(player) {
//   for (let i = 0; i < board.length; i++) {
//       let column = board.map(row => row[i]);
//       if (column.every(cell => cell === player)) {
//           return true;
//       }
//   }
//   return false;
// }

// checkwin = (player) => {
//   for(let i = 0; i < board.length; i++){
//     if (board[i].every(cell => cell === player)) {
//       return true;
//     }
//   }
// }
