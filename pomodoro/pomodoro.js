$(document).ready(function() {
  
  var time = 1500;
  var initTime = time;
  setTimer(time);
  var pomodoro = 300;
  var initPomo = pomodoro;
  setPomodoro(pomodoro);
  

  $('#start').click(function() {
    runTimer();    
  });
  
  function runTimer(){
    initTime = time;
    initPomo = pomodoro;
    setTimer(time);

    var timer = setInterval(function(){ 
      if(time > 0) {
        time -= 1; 
        setTimer(time);   
      } 
      else if(time === 0 && pomodoro > 0) {
        pomodoro -= 1;
        setPomodoro(pomodoro);
      } 
      else if(time === 0 && pomodoro === 0){
        reset();
      }         
    }, 1000);
    
    var pomoTimer = setInterval(function(){ 
          
    }, 1000);
    
    $('#stop').click(function() {
      clearInterval(timer);
      clearInterval(pomoTimer);
    });
  }
  
  $('#reset').click(function(){
    reset();
  });

  function reset(){    
    time = initTime;
    pomodoro = initPomo;
    setTimer(time);
    setPomodoro(pomodoro);
  }
  

  $('#plus').click(function() {
    time += 60;
    setTimer(time);
  });

  $('#minus').click(function() {
    if (time > 60) time -= 60;
    setTimer(time);
  });
  
  $('#pomplus').click(function() {
    pomodoro += 60;
    setPomodoro(pomodoro);
  });

  $('#pomminus').click(function() {
    if (pomodoro > 60) pomodoro -= 60;
    setPomodoro(pomodoro);
  });

  function setTimer(time) {
    $('#timer').text(formatTime(time));
  }
  
  function setPomodoro(time) {
    $('#break').text(formatTime(time));
  }
  
  function formatTime(time){
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

});
