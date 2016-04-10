$(document).ready(function() {

  var time, pomodoro, timeLength, pomLength, progressTotal;
  reset();
 

  $('#reset').click(function() {
    reset();
    setTimer(timeLength * 60);    
  });

  function reset() {
    timeLength = getTimerLength();     
    pomLength = getPomLength();  
    time = timeLength * 60;
    pomodoro = pomLength * 60;
    progressTotal = (Number(timeLength) + Number(pomLength)) * 60;
    setProgress();
  }

  function getTimerLength() {
    return $('#timerLength').text();
  }

  function getPomLength() {
    return $('#pomLength').text();
  }

  function setTimer(time) {
    $('#timer').text(formatTime(time));
  }

  function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  

  $('#plus').click(function() {  
    timeLength = Number(timeLength) + 1;
    setTimeLength(timeLength);
  });
  
  
  $('#minus').click(function() {
    if (timeLength > 1) timeLength = Number(timeLength) - 1;
    setTimeLength(timeLength);
  });
  
  
  function setTimeLength(time) {            
    $('#timerLength').text(time);
    reset();
  }
  
  
  $('#pomplus').click(function() {
    pomLength = Number(pomLength) + 1;
    setPomLength(pomLength);
  });

  $('#pomminus').click(function() {
    if (pomLength > 1) pomLength = Number(pomLength) - 1;
    setPomLength(pomLength);
  });

  function setPomLength(time) {
    $('#pomLength').text(time);
    reset();
  }  
  
  $('#start').click(function() {
    runTimer();    
    $(this).attr("disabled", true);
  });
  
  
  
  function runTimer(){    
    setTimer(time);
   

    var timer = setInterval(function(){ 
      setProgress();
      if(time > 0) {
        time -= 1; 
        setTimer(time);   
      } 
      else if(time === 0 && pomodoro > 0) {
        pomodoro -= 1;
        setTimer(pomodoro);
      } 
      else if(time === 0 && pomodoro === 0){
        reset();
      }         
    }, 1000);  
    
    
    $('#stop').click(function() {
      clearInterval(timer);
      $('#start').attr("disabled", false);
    });
  }
  
  function setProgress(){
    
    var elapsedTime = (Number(timeLength) * 60) - Number(time);
    var elapsedPom = (Number(pomLength) * 60) - Number(pomodoro);
    var elapsedTotal = elapsedTime + elapsedPom;
    
    var timePercent = (((Number(timeLength) * 60) - Number(elapsedTime)) / progressTotal) * 100;
    var pomPercent = (((Number(pomLength) * 60) - Number(elapsedPom)) / progressTotal) * 100;
    
    
    var elapsedPercent = (100 - timePercent - pomPercent);
    $('.progress-bar-danger').css('width', elapsedPercent + '%');
    $('.progress-bar-success').css('width', timePercent + '%');
    $('.progress-bar-warning').css('width', pomPercent + '%');
    
    
  }
  
  
  


});
