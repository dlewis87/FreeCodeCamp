$(document).ready(function() {
  var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "ogamingsc2","brunofin","comster404"];

  var html = "";
  
  var online = "";
  var offline = "";
  
  users.map(function(user) {
    getApi(user);
  });
  
  
  
  
  
  function getApi(user) {

  $.getJSON('https://api.twitch.tv/kraken/streams/' + user + '?callback=?', function(data) {
    console.log(data);
    //var link = data._links.channel;
    //console.log(link);
    var link = "http://www.twitch.tv/" + user;
    var channelStatus = "";
    var game = "";
    var status = "";
    var img = "";
    
    if(data.status){
      channelStatus = "offline";
      status = "Account Closed";  
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/2000px-Question_Mark.svg.png";
    }
    else if (data.stream) {
      channelStatus = "online";
      status = data.stream.channel.status;
      game = data.stream.channel.game + " : ";
      img = data.stream.channel.logo;
    } else {
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/2000px-Question_Mark.svg.png";
      channelStatus = "offline";
      status = "Offline";
    }
    
    var details = "<tr id='" + channelStatus + "'><td><img src='" + img + "' class='img-circle'></td><td><a href='" + link + "' target='_blank' >" + user + "</a></td><td>" + game + status + "</td>";
    
    
    if(channelStatus === 'offline') offline += details;
    else if(channelStatus === 'online') online += details;
    
    var table = '<table class="table">' + online + offline + '</table>';  
    $('#table').html(table);
    
   
  });

}

});
