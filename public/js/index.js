// Get references to page elements
var $searchBarText = $("#searchBar");
var $submitBtn = $("#submit");
var map;
var infoWindow;

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();
  var searchString = $searchBarText.val().trim();
  console.log("searchString=", searchString);
  $searchBarText.val("");
};
function initialize() {
  /*var input = document.getElementById('searchBar');
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    var place = autocomplete.getPlace();
    var name = place.name;
    var latitude = place.geometry.location.lat();
    var longitude = place.geometry.location.lng();
    console.log("New location:", name, latitude, longitude);
  });*/
  var center = new google.maps.LatLng(37.4219999, -122.0862462);
  var mapProp = {
    center: center,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map"), mapProp);
  
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });
  
  //display markers on the map
  displayMarkers(center, map);
}
function displayMarkers(centerLocation, map) {
  var request = {
    location: centerLocation,
    radius: 8047,
    types: ['tourist_attraction']
  };
  
  infoWindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}
function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  google.maps.event.addListener(marker,'click',function(){
    infoWindow.setContent(place.name);
    infoWindow.open(map,this);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
