$(document).ready(function() {
  var buttons = ['red', 'green', 'blue', 'yellow'];
  var level, compSequence, userSequence, currentTurn, strict;
  var redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  var sounds = [redSound, greenSound, blueSound, yellowSound];

  reset();

  function game() {
    $("#level").text("Level : " + level);
    console.log(compSequence);
    if (level <= 20) {
      if (currentTurn === 'computer') {
        disableButtons();
        runSequence();
      } else if (currentTurn === 'user') {
        if (userSequence.length < 1) activateButtons();
        console.log(userSequence + " " + compSequence)
        if (userSequence.length === compSequence.length) {
          disableButtons();
          if (testSequence()) {
            level++;
            newButton();
          } else {
            $("#message").text("Wrong!");
            if (strict) reset();
          }
          currentTurn = 'computer';
          userSequence = [];
          game();

        }

      }
    } else {
      $("#message").text("You Win!");
      currentTurn = '';
      setTimeout(function() {
        reset();
      }, 3000);
    }
  }

  buttons.map(function(button) {
    $('#' + button).click(function() {
      sounds[buttons.indexOf(button)].play();
      userSequence.push(button);
      game();
    });
  });

  function activateButtons() {
    buttons.map(function(button) {
      $('#' + button).attr("disabled", false);
    });
  }

  function disableButtons() {
    buttons.map(function(button) {
      $('#' + button).attr("disabled", true);
    });
  }

  function runSequence() {

    var i = 0;
    var sequence = setInterval(function() {

      var colour = buttons[compSequence[i]];

      buttonAnimate(colour);
      sounds[compSequence[i]].play();
      i++;
      if (i >= compSequence.length) {
        $("#message").text("");
        clearInterval(sequence);
        currentTurn = 'user';
        game();
      }
    }, 1600);
  }

  function buttonAnimate(colour) {
    $('#' + colour).addClass(colour + 'Active');
    setTimeout(function() {
      $('#' + colour).removeClass(colour + 'Active');
    }, 800)

  }

  function testSequence() {
    for (var i = compSequence.length; i--;) {
      if (buttons[compSequence[i]] !== userSequence[i]) {
        return false;
      }
    }
    return true;
  }

  function newButton() {
    var button = Math.floor(Math.random() * (buttons.length));
    compSequence.push(button);
  }

  function reset() {
    level = 1;
    compSequence = [];
    userSequence = [];
    currentTurn = 'computer';
    strict = false;
    $('#strict').removeClass('strict');   
    disableButtons();
    newButton();
    game();
  }

  $('#reset').click(function() {
    reset();
  });

  $('#strict').click(function() {
    if (strict) {
      strict = false;
      $(this).removeClass('strict');
    } else {
      strict = true;      
      $(this).addClass('strict');
    }
  });

});
