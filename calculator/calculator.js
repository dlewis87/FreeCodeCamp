$(document).ready(function() {
  var buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var operatorNames = ['plus', 'minus', 'divide', 'multiply'];

  //Value previous to operator
  var prevVal = 0;
  //Store value after operator
  var currentVal = 0;
  //Which operator function is current
  var currentFunction = '';
  //Is new calculation
  var newSum = true;
  //Was last button number or operator
  var lastButton = "op";

  //Create number buttons
  buttons.forEach(function(val) {
    MakeNumButton(val);
  });

  //Create operator buttons
  operatorNames.forEach(function(val) {
    MakeOpButton(val)
  });

  //Make number button
  function MakeNumButton(val) {
    $('#' + val).click(function() {
      //If start of new calculation clear screen
      if (newSum) {
        ClearScreen();
      }
      //Add button value to screen
      $('#screen').append(val);
      newSum = false;
      //Set last button to number
      lastButton = "num";
    });
  }

  //Make operator button
  function MakeOpButton(val) {
    $('#' + val).click(function() {
      if (lastButton !== 'op') {
        //If no function is active store values
        if (currentFunction === '') {
          StoreScreen();
          ClearScreen();
        }
        //Do calculation
        else {
          Equals();
        }
        //Set function to value of button
        currentFunction = val;
        //Set last button to op to prevent rerunning function
        lastButton = "op";
      }
    });
  }

  //Equals button 
  $('#equals').click(function() {
    Equals();
    ClearVals();
  });

  //Clear all 
  $('#ac').click(function() {
    ClearScreen();
    ClearVals();
  });

  //Clear last entry
  $('#ce').click(function() {
    ClearScreen();
  });

  //Store value on screen
  function StoreScreen() {
    prevVal = $('#screen').text();
  }

  //Clear screen
  function ClearScreen() {
    $('#screen').text('');
  }

  //Clear all variables
  function ClearVals() {
    currentFunction = '';
    currentVal = 0;
    prevVal = 0;
  }

  //Calculate 
  function Equals() {
    //Store current value of screen
    currentVal = $('#screen').text();
    ClearScreen();
    //Store result of calculation
    var result = Operate();
    //Store result for future calculations
    prevVal = result;
    //Show result on screen
    $('#screen').text(result);
    //Start new calculation
    newSum = true;
  }

  //Do Calculation 
  function Operate() {
    switch (currentFunction) {
      case "plus":
        return Number(prevVal) + Number(currentVal);
        break;
      case "minus":
        return Number(prevVal) - Number(currentVal);
        break;
      case "multiply":
        return Number(prevVal) * Number(currentVal);
        break;
      case "divide":
        return Number(prevVal) / Number(currentVal);
        break;
    }
  }
});
