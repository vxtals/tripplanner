let vm, map, infowindow, searchBox, dirService, dirDisplay, previewMarker, mapLoaded = false
let staticMarkers = []
let locations = []
export default {
  name: 'trip-map',
  data () {
    return {
    }
  },
  created: function () {
    window.eventBus.$on('center-and-show', centerAndShow)
    window.eventBus.$on('remove-preview-marker', removePreviewMarker)
    window.eventBus.$on('update-location-markers', updateLocationMarkers)
    window.eventBus.$on('reload-map', reloadMap)
    registerResizeEvent()
  },
  mounted: function () {
    if (window.google != undefined) {
      initMap()
    }else{
      window.eventBus.$on('google-maps-loaded', initMap)
    }
  }
}

//PRIVATE FUNCTIONS
function initMap (){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.955917, lng: -87.64741600000002},
    zoom: 6
  });
  dirService = new google.maps.DirectionsService
  dirDisplay = new google.maps.DirectionsRenderer({
    map: map
  })
  google.maps.event.addListener(map, 'click', function(event) {
   console.log(event);
  });
}

function createPreviewMarker (location) {
  if (!!previewMarker) previewMarker.setMap(null)
    previewMarker = new google.maps.Marker({
      map: map,
      position: location
    });
}

function reloadMap () {
  setTimeout(function() {
    google.maps.event.trigger(map,'resize')
  }, 1001);
}

function registerResizeEvent () {    
  var resize
  $(window).resize(function(){
    clearTimeout(resize)
    resize = setTimeout(function() {
      reloadMap()
    }, 100);
  })
}

function centerAndShow (location) {
  map.setCenter(location)
  createPreviewMarker(location)
}

function removePreviewMarker () {
  if (!!previewMarker) previewMarker.setMap(null)
}

function updateLocationMarkers (stageLocations) {
  if (!!stageLocations) {
    locations = stageLocations
    clearMarkers()
    locations.forEach(function (location) {
      addMarker(location.geometry.location);
    });
    if (stageLocations.length > 1) calculateDirections(locations)
  }
}

function clearMarkers () {
  staticMarkers.forEach(function (marker) {
    marker.setMap(null)
  })
  staticMarkers = []
}

function addMarker (location) {
  let newMarker = new google.maps.Marker({
    map: map,
    position: location,
    label: staticMarkers.length.toString(),
    color: 'blue'
  });
  staticMarkers.push(newMarker)
}

function calculateDirections (locations) {
    let waypoints = []
    for(var i = 1; i < locations.length -1; i++){
      waypoints[i - 1] = {
        location: locations[i].geometry.location,
        stopover: true
      }
    }
    
    let dirRequest = {
      avoidFerries: true,
      avoidHighways: false,
      avoidTolls:  false,
      destination: locations[locations.length - 1].geometry.location,
      drivingOptions: {
        departureTime: new Date(),
        trafficModel: google.maps.TrafficModel.BEST_GUESS
      },
      optimizeWaypoints: false,
      origin: locations[0].geometry.location,
      provideRouteAlternatives: false,
      transitOptions: {},
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      waypoints: waypoints

    }
    dirService.route(dirRequest, function (directionResult, directionsStatus) {
      if (directionsStatus === google.maps.DirectionsStatus.OK) {
        dirDisplay.setDirections(directionResult);
      } else {
        window.alert('Directions request failed due to ' + status);
      }

    })
  }
