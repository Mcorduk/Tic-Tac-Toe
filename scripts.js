const ticTacToe = (() => {

  let currentPlayer = player1; //Test Player
  
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
            Game.addMark(i, j);
          });
        }
        cache[id].innerHTML = board[i][j];
      }
    }
  } 
    return {
    renderBoard,
    cache,
    };
  })();
  
  const Game = (() => {
    function addMark(i, j) {
      if (board[i][j] === null) {
        board[i][j] = currentPlayer.symbol;
        cache[`${i}-${j}`].innerHTML = currentPlayer.symbol;
        toggleCurrentPlayer();
        checkForWin();
      }
    }
    function toggleCurrentPlayer() {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
    function checkForWin() {
      // Check rows, columns, and diagonals for a win
    }
    return {
      addMark,
    };
  })();

  const Player = () => {
    const createPlayer = (name, symbol) => {
      //Player Factory
      return {
        name,
        symbol,
      }
    };
    
    const player1 = createPlayer("player1", "X");
    const player2 = createPlayer("player2", "O");
  };

  return {
    GameBoard,
  };
})();


