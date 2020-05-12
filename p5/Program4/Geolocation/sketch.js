var locationData;
var chicagoLat = 41.881832;
var ChicagoLong = -87.623177;
var newYorkLong = -73.935242;
var newYorklat = 40.730610;

function preload() {
  locationData = getCurrentPosition();
}

function setup() {
  createCanvas(500, 500);


}

function draw() {
  fill(0);
  textSize(12);

  text("Your Location Latitude:  " + locationData.latitude, 40, 40);
  text("Your Location Longitude:  " + locationData.longitude, 40, 60);


  //Chicago distance
  text("Your Distance from Chcicago:  " + locationData.latitude, 40, 60);


  //new york distance 
  text("Your distance from New York:  " + locationData.latitude, 40, 80);


}




function getDistanceMiles(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d / 1.609;
}