var options = {
  enableHighAccuracy:true,
  maximumAge:300000
}
var currentGPS = {

}


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      let location = {
        "lat":position.coords.latitude,
        "lng":position.coords.longitude
      }
      let geolocation = document.getElementById("geolocation");

      geolocation.innerHTML="<h3>Location is: [  "+location.lat+", "+location.lng+"  ]</h3>";
    },
    function() {
      alert("There was an error!");
    },
    options
  );

} else {
  alert("GeoLocation Not Supported with your device");
}
