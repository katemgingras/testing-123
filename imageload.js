function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.setRequestHeader('x-api-key', '0b643036-3a0a-4880-9dd0-7ca8df00fced');
  xmlhttp.send();
}

ajax_get('https://api.thedogapi.com/v1/images/search?size=full', function(data) {


  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image").innerHTML = html;
});