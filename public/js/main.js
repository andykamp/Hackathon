var map;
//Initializing the map
function setMap() {

      console.log('Loading map');

       map = L.map('map').setView([63.43049, 10.39506], 12.5);
      //Set view takes two parameters;
            //1. The coordinates for the center of the map
            //2. The zoom level. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out


      //Adding the base map. Base map decides how the background map looks like
      var basemapUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
      L.tileLayer(basemapUrl).addTo(map);

      //Adding geoJSON layer to the map:

      $('.change').click(function() {
        L.geoJSON(classrooms).addTo(map);
        map.panTo(new L.LatLng(63.43049, 10.39506));
      });
      $('.changeUtesteder').click(function() {
        L.geoJSON(utesteder).addTo(map);
        map.panTo(new L.LatLng(63.43049, 10.39506));
      });
      $('.changeToalett').click(function() {
        L.geoJSON(toalett).addTo(map);
        map.panTo(new L.LatLng(63.43049, 10.39506));
      });
      $('.BI').click(function() {
            var circle = L.circle([63.44106, 10.40282], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 200
    }).addTo(map);
    circle.bindPopup("STAY THE FUCK AWAY");
      });








}

window.onload = setMap;
