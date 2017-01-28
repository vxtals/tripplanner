var vm, map, infowindow, searchBox
export default {
  name: 'tripmap',
  data () {
    vm = this
    return {
      msg: 'What??'
    }
  },
  created: function () {
    window.eventBus.$on('maps_loaded', vm.initMap)
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
        zoom: 14
      });
      // infowindow = new google.maps.InfoWindow();

      // var input = document.getElementById('loc1');
      // searchBox = new google.maps.places.SearchBox(input);
      // //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

      // map.addListener('bounds_changed', function() {
      //   searchBox.setBounds(map.getBounds());
      // });

      // var markers = [];
      // searchBox.addListener('places_changed', function() {
      //   var places = searchBox.getPlaces();

      //   if (places.length == 0) {
      //     return;
      //   }

      //   // Clear out the old markers.
      //   markers.forEach(function(marker) {
      //     marker.setMap(null);
      //   });
      //   markers = [];

      //   // For each place, get the icon, name and location.
      //   var bounds = new google.maps.LatLngBounds();
      //   places.forEach(function(place) {
      //     var icon = {
      //       url: place.icon,
      //       size: new google.maps.Size(71, 71),
      //       origin: new google.maps.Point(0, 0),
      //       anchor: new google.maps.Point(17, 34),
      //       scaledSize: new google.maps.Size(25, 25)
      //     };

      //     // Create a marker for each place.
      //     markers.push(new google.maps.Marker({
      //       map: map,
      //       icon: icon,
      //       title: place.name,
      //       position: place.geometry.location
      //     }));

      //     if (place.geometry.viewport) {
      //       // Only geocodes have viewport.
      //       bounds.union(place.geometry.viewport);
      //     } else {
      //       bounds.extend(place.geometry.location);
      //     }
      //   });
      //   map.fitBounds(bounds);
      // });
      //***********************************************************
      // var service = new google.maps.places.PlacesService(map);
      
      // service.nearbySearch({
      //   location: map.getCenter(),
      //   radius: 500,
      //   types: ['store']
      // }, function (results, status) {
      //   if (status === google.maps.places.PlacesServiceStatus.OK) {
      //     for (var i = 0; i < results.length; i++) {
      //       vm.createMarker(results[i]);
      //     }
      //   }
      // });
    },
    createMarker: function (place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }
  }
}
