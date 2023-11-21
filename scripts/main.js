var map = L.map('map').setView([51.50008, -0.09], 13);

var marker = L.marker([51.50008, -0.09]).addTo(map);        // Start.
var marker = L.marker([51.499745, -0.090199]).addTo(map);   // End.

// Tile layers.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http:www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// L.Control.textbox = L.Control.extend({
//   onAdd: function(map) {
    
//   var text = L.DomUtil.create('div');
//   text.id = "info_text";
//   text.innerHTML = "<strong>Add Route</strong>"
//   return text;
//   },

//   onRemove: function(map) {
//     // Nothing to do here
//   }
// });
// L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
// L.control.textbox({ position: 'bottomleft' }).addTo(map);


// Create a polyline from an array of LatLng points.
var latlngs = [
  [51.50008, -0.09],
  [51.49998, -0.0905],
  [51.499895, -0.09096],
  [51.499875, -0.09099],
  [51.49985, -0.09108],
  [51.49961, -0.09091],
  [51.499565, -0.090865],
  [51.4996, -0.09075],
  [51.499745, -0.090199],
];

// Adds route to map (use re-draw when updating values in real time).
var polyline = L.polyline(latlngs, {color: 'blue', fillOpacity:0.2}).addTo(map);

// Zoom the map to the polyline.
map.fitBounds(polyline.getBounds());


// Map pop-ups.
var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);


// Controls.
NewRouteButton = L.Control.extend({
  options: {
    position: 'topright',
  },
  onAdd: function(map) {
    // var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    // var button = L.DomUtil.create('a', 'leaflet-control-button', container);

    // L.DomEvent.disableClickPropagation(button);
    // L.DomEvent.on(button, 'click', function(){
    //   var marker = L.marker([51.6, -0.1]).addTo(map);
    // });

    // container.title = "NewRoute";
    // return container;

    var controlDiv = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    controlDiv.style.width = '100px';
    controlDiv.style.height = '30px';

    L.DomEvent
      .addListener(controlDiv, 'click', L.DomEvent.stopPropagation)
      .addListener(controlDiv, 'click', L.DomEvent.preventDefault)
      .addListener(controlDiv, 'click', function() {
        map.setView([51.50008, -0.09], 16);
      });
    
    var controlUI = L.DomUtil.create('a', 'leaflet-control-command-interior', controlDiv);
    controlUI.title = 'New Route';
    controlUI.innerHTML = "<span>New Route</span>";
    controlUI.href = '#';
    controlUI.style.width = '100px';
    controlUI.style.height = '30px';

    return controlDiv;
  },
  onRemove: function(map){
    // Nothing to do.
  }
});


SaveRouteButton = L.Control.extend({
  options: {
    position: 'topright',
  },
  onAdd: function(map) {
    // var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    // var button = L.DomUtil.create('a', 'leaflet-control-button', container);

    // L.DomEvent.disableClickPropagation(button);
    // L.DomEvent.on(button, 'click', function(){
    //   var marker = L.marker([51.6, -0.1]).addTo(map);
    // });

    // container.title = "NewRoute";
    // return container;

    var controlDiv = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    controlDiv.style.width = '100px';
    controlDiv.style.height = '30px';

    L.DomEvent
      .addListener(controlDiv, 'click', L.DomEvent.stopPropagation)
      .addListener(controlDiv, 'click', L.DomEvent.preventDefault)
      .addListener(controlDiv, 'click', function() {
        map.setView([51.50008, -0.09], 16);
      });
    
    var controlUI = L.DomUtil.create('a', 'leaflet-control-command-interior', controlDiv);
    controlUI.title = 'Save Route';
    controlUI.innerHTML = "<span>Save Route</span>";
    controlUI.href = '#';
    controlUI.style.width = '100px';
    controlUI.style.height = '30px';

    return controlDiv;
  },
  onRemove: function(map){
    // Nothing to do.
  }
});

var newRouteButton = new NewRouteButton();
map.addControl(newRouteButton);
//newRouteButton.addTo(map);

var saveRouteButton = new SaveRouteButton();
map.addControl(saveRouteButton);
//saveRouteButton.addTo(map);


// Scale.
L.control.scale().addTo(map);