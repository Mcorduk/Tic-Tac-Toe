const gameBoard = (() => {
  const board = [
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"]
  ];

  function renderBoard() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let id = `${i}-${j}`;
        let cell = document.getElementById(id);
        cell.innerHTML = board[i][j];
        cell.addEventListener("click", function() {
          cell.innerHTML = "X";
          board[i][j] = "X";
        });
      }
    }
    return;
  }

  return {
    renderBoard
  };
})();


  const createPlayer = (name, symbol) => {
    return {
      name,
      symbol,
    }
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
