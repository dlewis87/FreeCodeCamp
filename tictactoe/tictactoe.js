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
  var squares = Object.keys(board);
  var topRow, middleRow, bottomRow ,leftColumn, middleColumn, rightColumn, leftDiag, rightDiag;
  updateRows();
  
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
  
  var freeSquares = squares;
  
  computerTurn();
  
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
  
  //Return row and number of marks
  function checkBoard(mark){
    checkHorizontal(mark);
    //checkVertical(val);
    //checkDiagonal(val);
  }
  
  //Return row and number of marks
  function checkHorizontal(val){
    
  }
  /*
  function checkVertical(val){
    leftColumn(val);
    middleColumn(val);
    rightColumn(val);
  }
  
  function checkDiagonal(val){
    topLeft(val);
    topRight(val);    
  }
  */
  

})
