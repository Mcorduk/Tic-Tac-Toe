const ticTacToe = (() => {

  const GameBoard = (() => {
    //Board Module
  let board = [
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
          cache[id].addEventListener("click", function() {
            Game.addMark(i, j, GameBoard.cache);
          });
        }
        cache[id].innerHTML = board[i][j];
      }
    }
  } 
    return {
    renderBoard,
    cache,
    board
    };
  })();
  
  const Game = ((board) => {

    let gameOver = {state: false};
    function addMark(i, j, cache) {
      if (!gameOver.state) {
      if (board[i][j] === null) {
        board[i][j] = Player.currentPlayer.symbol;
        cache[`${i}-${j}`].innerHTML = Player.currentPlayer.symbol;
        toggleCurrentPlayer();
        checkForWin();
      }
    }else {
      alert("Game Over, Please refresh the page to play again");
    } }
    function toggleCurrentPlayer() {
      Player.currentPlayer = Player.currentPlayer === Player.player1 ? Player.player2 : Player.player1;
    }
    function checkForWin() {
      // Check rows for a win
      for (let i = 0; i < board.length; i++) {
        if (board[i][0] === Player.currentPlayer.symbol && board[i][1] === Player.currentPlayer.symbol && board[i][2] === Player.currentPlayer.symbol) {
          alert(`${Player.currentPlayer.name} wins!`);
          return gameOver.state = true;
        }
      }
      
      // Check columns for a win
      for (let i = 0; i < board.length; i++) {
        if (board[0][i] === Player.currentPlayer.symbol && board[1][i] 
          === Player.currentPlayer.symbol && board[2][i] === Player.currentPlayer.symbol) {
          alert(`${Player.currentPlayer.name} wins!`);
          return gameOver.state = true;
        }
      }
      
      // Check diagonals for a win
      if (board[0][0] === Player.currentPlayer.symbol && board[1][1] 
        === Player.currentPlayer.symbol && board[2][2] === Player.currentPlayer.symbol) {
        alert(`${Player.currentPlayer.name} wins!`);
        return gameOver.state = true;
      }
      if (board[0][2] === Player.currentPlayer.symbol && board[1][1] 
        === Player.currentPlayer.symbol && board[2][0] === Player.currentPlayer.symbol) {
        alert(`${Player.currentPlayer.name} wins!`);
        return gameOver.state = true;
      }
      let filledCells = 0;
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] !== null) {
            filledCells++;
          }
        }
      }
      
      if (filledCells === 9) {
        alert("It's a tie!");
      }
        
    }
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", function(){
      gameOver.state = false;
      Player.createPlayer("player1","X");
      Player.createPlayer("player2","O");
      GameBoard.renderBoard();
      Game.addMark(GameBoard.cache);
    });
    return {
      addMark,
    };
  })(GameBoard.board);

  const Player = {
    player1: {},
    player2: {},
    currentPlayer: {},
    createPlayer(name, symbol) {
    return {name: name, symbol: symbol};
  }
};

  return {
    GameBoard,
    Player
    
  };
})();