mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWVsY2FzYW5vdmEiLCJhIjoiY2xhOGhxMHFwMDFmbzNvcXUzZzR4NzlqbiJ9.hR-e24cPACWJj8mOaWU9SA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position) {
  console.log(position)
  //Position the map here
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-123.6, 49.14])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 12
  });

  const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

const directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: 'metric',
  profile: 'mapbox/cycling'
});


map.addControl(directions, 'top-left');
}

