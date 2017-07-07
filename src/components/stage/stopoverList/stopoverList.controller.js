import LocationSearchBox from '../../reusable/locationSearchBox/LocationSearchBox'
import StopoverModal from '../stopoverModal/StopoverModal'
let vm

export default {
  name: 'stopover-list',
  data () {
  	vm = this
    return {
      stageName: 'Etapa 1',
    	addDisabled: true,
    	previewLocation: null,
    	stageLocations: []
    }
  },
  created: function () {
    // Get locations window.eventBus.$on('google-maps-loaded', vm.loadLocations)
  },
  methods: {
  	loadLocation: function(placeId){
      let geocoder = new google.maps.Geocoder;
      geocoder.geocode({'placeId': placeId}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            // map.setZoom(11);
            // map.setCenter(results[0].geometry.location);
            console.log(results[0]);
            vm.stageLocations.push(results[0]);
            vm.updateLocations();
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    },
    enableAdd: function (location) { 
  		vm.addDisabled = false
  		vm.previewLocation = location[0] 
  		window.eventBus.$emit('center-and-show', vm.previewLocation.geometry.location)
  	},
  	disableAdd: function () { 
  		vm.addDisabled = true
  		window.eventBus.$emit('remove-preview-marker')
  	},
  	addLocation: function (location) {
  		vm.stageLocations.push(location)
      window.eventBus.$emit('remove-preview-marker')
  		window.eventBus.$emit('clear-location-search-box')
  		vm.updateLocations()
  	},
  	removeLocation: function (index) {
  		vm.stageLocations.splice(index, 1)
  		vm.updateLocations()
  	},
    editStopOver: function (index) { 
      window.eventBus.$emit('editStopOver', vm.stageLocations[index])
    },
  	showLocation: function (index) {
  		window.eventBus.$emit('center-and-show', vm.stageLocations[index].geometry.location)
  	},
  	reorder ({oldIndex, newIndex}) {
    	const movedItem = vm.stageLocations.splice(oldIndex, 1)[0]
      	vm.stageLocations.splice(newIndex, 0, movedItem)
      	vm.updateLocations()
    },
    updateLocations: function () {
  		window.eventBus.$emit('update-location-markers', vm.stageLocations)
    },
    hideRouteList: function () {
      vm.$emit('hide-route-list')
    }
  },
  components: {
  	LocationSearchBox,
    StopoverModal
  }
}