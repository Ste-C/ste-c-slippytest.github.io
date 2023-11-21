var map = L.map('map').setView([51.50008, -0.09], 13);

var marker = L.marker([51.50008, -0.09]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http:www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// create a red polyline from an array of LatLng points
var latlngs = [
  [51.50008, -0.09],
  [51.49998, -0.0905],
  [51.499895, -0.09096],
  [51.499875, -0.09099],
  [51.49985, -0.09108],
  [51.49961, -0.09091],
  [51.499565, -0.090865],
  [51.49975, -0.090199],
];

var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);

// zoom the map to the polyline
map.fitBounds(polyline.getBounds());