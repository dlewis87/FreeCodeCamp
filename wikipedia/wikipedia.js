$(document).ready(function() {
  $('#searchBox').keyup(function() {
    doSearch($(this).val());
    $('.search').animate({
      'margin-top': '0px'
    }, 1000)

  });
});

function doSearch(search) {

  var url = "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + search + "&callback=?";

  //console.log(url);
  $.ajax({
    url: url,
    dataType: "jsonp",
    type: 'POST',
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data) {
      console.log(data.query.search);
      var content = "<table class='table table-striped'>";
      var results = data.query.search;
      for (var pageId in results) {
        //console.log(data.query.search[pageId]);
        content += "<tr><td><a href='https://en.wikipedia.org/wiki/" + results[pageId].title + "' target='_blank'>" + results[pageId].title + "</a></td><td>" + results[pageId].snippet + "</td></tr>";
      }
      content += "</table>";
      $('#results').fadeOut(function(){
        $(this).html(content).fadeIn(1000);
      });

    },
    error: function(errorMessage) {}
  });

}
