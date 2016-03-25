$(document).ready(function() {
  var user = "";
  var computer = "";
  var currentTurn = '';
  var winner = false;
  var board = {};
  var squares = {};
  var freeSquares = [];

  var lines = {
    'topRow': ['top-left', 'top-center', 'top-right'],
    'middleRow': ['middle-left', 'middle-center', 'middle-right'],
    'bottomRow': ['bottom-left', 'bottom-center', 'bottom-right'],
    'leftColumn': ['top-left', 'middle-left', 'bottom-left'],
    'middleColumn': ['top-center', 'middle-center', 'bottom-center'],
    'rightColumn': ['top-right', 'middle-right', 'bottom-right'],
    'leftDiag': ['top-left', 'middle-center', 'bottom-right'],
    'rightDiag': ['top-right', 'middle-center', 'bottom-left']
  }

  reset();

  function reset() {
    user = "";
    computer = "";
    currentTurn = '';
    winner = false;
    board = {
      'top-left': '',
      'top-center': '',
      'top-right': '',
      'middle-left': '',
      'middle-center': '',
      'middle-right': '',
      'bottom-left': '',
      'bottom-center': '',
      'bottom-right': ''
    };
    squares = Object.keys(board);
    freeSquares = squares;
    squares.map(function(position) {
      $("#" + position).text("");
      $('#' + position).css("background-color", "black");
    });
    $('#grid').css("background-color", "black");
    $('#selectPlayer').modal();
  }


  $('#playerX').click(function() {
    user = "X";
    computer = "O";
    computerTurn();
  });

  $('#playerO').click(function() {
    user = "O";
    computer = "X";
    computerTurn();
  });

  $('#reset').click(function() {
    reset();
  })

  //Set click function that activates user turn
  squares.map(function(position) {
    $("#" + position).click(function() {
      if (!winner) {
        //If board position clicked is empty
        
        if (board[position] === '') {
          currentTurn = user;
          storeTurn(position);
          //Find position in free squares array
          var index = freeSquares.indexOf(position);
          removeFreeSquare(index);
          checkWinner();
          if (!winner) {
            computerTurn();
          }
          //If no winner and no free squares then games is a draw
          if (!winner && freeSquares[0] === undefined) {
            $('#message').text("Game is a draw");
            $('#grid').css("background-color", "yellow");
          }
        }
      }
    console.log(winner);  
    });
  });

  //Store selected turn in object and display in html
  function storeTurn(position) {
    board[position] = currentTurn;
    $("#" + position).text(currentTurn);
  }

  //Remove position from free squares
  function removeFreeSquare(index) {
    freeSquares.splice(index, 1);
  }

  //Take computer turn
  function computerTurn() {
    currentTurn = computer;
    var move = '';
    //Find winning move
    var winningMove = winOrBlock(computer)
      //Find blocking move
    var blockingMove = winOrBlock(user);
    //If winning move if exists
    //else if blocking move
    // else random move
    if (winningMove !== '') {
      var index = freeSquares.indexOf(winningMove);
      move = winningMove;
    } else if (blockingMove !== '') {
      var index = freeSquares.indexOf(blockingMove);
      move = blockingMove;
    } else {
      var index = Math.floor(Math.random() * (freeSquares.length));
      move = freeSquares[index]
    }
    storeTurn(move);
    removeFreeSquare(index);
    checkWinner();
  }

  //Check if current selected player has winning move
  function winOrBlock(checkPlayer) {
    var move = '';
    for (var key in lines) {
      var winningMove = numInLine(lines[key], checkPlayer);
      if (winningMove !== '') move = winningMove;
    }
    return move;
  }

  //Check row to see if there is 2 of current player and free space
  function numInLine(testLine, player) {
    var isEmpty = 0;
    var isPlayer = 0;
    var emptyPos = '';
    for (var key in testLine) {
      var testPosition = board[testLine[key]];
      if (testPosition === player) isPlayer++
        else if (testPosition === '') {
          emptyPos = testLine[key];
          isEmpty++;
        }
    }
    if (isEmpty === 1 && isPlayer === 2) {
      return emptyPos;
    } else return '';
  }

  //Check all lines for winner
  function checkWinner() {
    var isWinner = checkLine();
    if (isWinner !== '') {
      showWinner(isWinner);
    }
  }

  //Check if all of line is the same
  function checkLine() {
    var winningLine = '';
    for (var key in lines) {
      if (lines[key].every(check)) winningLine = key
    }
    return winningLine;
  }

  function check(element) {
    return board[element] === currentTurn;
  }

  //If winner, show winning line and display message
  function showWinner(line) {
    for (var i in lines[line]) {
      $('#' + lines[line][i]).css("background-color", "yellow");
      winner = true;
      $('#message').text("The winner is " + currentTurn);
    }
  }

})
