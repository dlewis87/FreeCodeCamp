$(document).ready(function() {
  var player = "X";
  var computer = "O";
  var board = {
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
  //Array of board positions
  var squares = Object.keys(board);
  //Variables for board positions
  var topRow, middleRow, bottomRow ,leftColumn, middleColumn, rightColumn, leftDiag, rightDiag;
  //Set board position variables to reflect current board state
  updateRows();
  //Initialise array of free positions to all positions
  var freeSquares = squares;
  //Take initial computer turn
  //Change to first player turn
  computerTurn();
  
  //Set click function that activates player turn
  squares.map(function(val){
    $("#"+val).click(function(){
      if(board[val] === ''){
        board[val] = player;
        $("#"+val).text(player);        
        var index = freeSquares.indexOf(val);
        freeSquares.splice(index, 1);
        checkBoard(player);
        computerTurn();
        //checkBoard();        
      }      
    });    
  });
  
  
  function updateRows(){
    topRow = [board['top-left'],board['top-center'],board['top-right']];
    middleRow = [board['middle-left'],board['middle-center'],board['middle-right']];
    bottomRow = [board['bottom-left'],board['bottom-center'],board['bottom-right']];
    leftColumn = [board['top-left'],board['middle-left'],board['bottom-left']];
    middleColumn = [board['top-center'],board['middle-center'],board['bottom-center']];
    rightColumn = [board['top-right'],board['middle-right'],board['bottom-right']];
    leftDiag = [board['top-left'],board['middle-center'],board['bottom-right']];
    rightDiag = [board['top-right'],board['middle-center'],board['bottom-left']];
  } 
  
  function computerTurn(){
      //Check for center free
      //Check for winning move
      //Check for blocking move
      //Check for single
      var num = Math.floor(Math.random() * (freeSquares.length));
      board[freeSquares[num]] = computer; 
      $("#" + freeSquares[num]).text(computer);
      freeSquares.splice(num,1);
  }
  
  
  Array.prototype.allValuesSame = function() {
      for(var i = 1; i < this.length; i++)
      {
          if(this[i] !== this[0])
              return false;
      }
      return true;
  }
    
  //Return row and number of marks
  function checkBoard(){
    if(checkHorizontal() !== '') return checkHorizontal();
    if(checkVertical() !== '') return checkVertical();
    if(checkDiagonal() !== '') return checkDiagonal();
  }
  
  
  function checkHorizontal(){
    if(topRow.allValuesSame()) return 'top-row';
    elseif(middleRow.allValuesSame()) return 'middle-row';
    elseif(bottomRow.allValuesSame()) return 'bottom-row';  
    else return '';
  } 
  
  
  function checkVertical(){
    if(leftColumn.allValuesSame()) return 'left-column';
    if(middleColumn.allValuesSame()) return 'middle-column';
    if(rightColumn.allValuesSame()) return 'right-column';
   
  }
  /*
  function checkDiagonal(val){
    topLeft(val);
    topRight(val);    
  }
  */
  

})
