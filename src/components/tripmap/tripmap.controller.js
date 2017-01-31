var vm, map, infowindow, searchBox, dirService, dirDisplay
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
export default {
  name: 'trip-map',
  data () {
    vm = this
    return {
      staticMarkers: [],
      locations: []
    }
  },
  created: function () {
    window.eventBus.$on('maps_loaded', vm.initMap)
    window.eventBus.$on('showOnMap', function (location) {
      map.setCenter(location)
      vm.createPreviewMarker(location)
    })
    window.eventBus.$on('hideOnMap', function (location) {
      if (!!vm.previewMarker) vm.previewMarker.setMap(null)
    })
    window.eventBus.$on('updateLocations', function (stageLocations) {
      if (!!stageLocations) {
        vm.locations = stageLocations
        vm.clearMarkers()
        vm.locations.forEach(function (location) {
          vm.addMarker(location.geometry.location);
        });
        if (stageLocations.length > 1) vm.calculateDirections(vm.locations)
      }
  })

  },
  events: {
    'maps_loaded': function () {
      vm.initMap()
    }
  },
  methods: {
    initMap: function () {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.955917, lng: -87.64741600000002},
        zoom: 6
      });
      dirService = new google.maps.DirectionsService
      dirDisplay = new google.maps.DirectionsRenderer({
        map: map
      })

    },
    createPreviewMarker: function (location) {
      if (!!vm.previewMarker) vm.previewMarker.setMap(null)
        vm.previewMarker = new google.maps.Marker({
          map: map,
          position: location
        });
    },
    clearMarkers: function () {
      vm.staticMarkers.forEach(function (marker) {
        marker.setMap(null)
      })
      vm.staticMarkers = []
    },
    addMarker: function (location) {
      let newMarker = new google.maps.Marker({
        map: map,
        position: location,
        label: vm.staticMarkers.length.toString(),
        color: 'blue'
      });
      vm.staticMarkers.push(newMarker)
    },
    calculateDirections: function (locations) {
      let waypoints = []
      for(var i = 1; i < vm.locations.length -1; i++){
        waypoints[i - 1] = {
          location: vm.locations[i].geometry.location,
          stopover: true
        }
      }
      
      let dirRequest = {
        avoidFerries: true,
        avoidHighways: false,
        avoidTolls:  false,
        destination: vm.locations[vm.locations.length - 1].geometry.location,
        drivingOptions: {
          departureTime: new Date(),
          trafficModel: google.maps.TrafficModel.BEST_GUESS
        },
        optimizeWaypoints: false,
        origin: vm.locations[0].geometry.location,
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
  }
}
