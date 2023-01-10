let TicTacToe = (function(){
  let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  function markCell(row, col, value){
    if(board[row][col] !== null){
      //Error on already marked cells
      console.log(`This cell is already marked, 
      please select another cell!`)
      return;
    }
    board[col][row] = value;
    //Mark Cells
  }

  function checkColumns(player) {
    for (let i = 0; i < board.length; i++) {
        let column = board.map(row => row[i]);
        if (column.every(cell => cell === player)) {
            return true;
        }
    }
    return false;
  }

  checkwin = (player) => {
    for(let i = 0; i < board.length; i++){
      if (board[i].every(cell => cell === player)) {
        return true;
      }
    }
  }

  return {  
    mark: markCell,
    checkCol: checkColumns
  }
})();

const playerFactory = (name) => {
  return {name};
}

