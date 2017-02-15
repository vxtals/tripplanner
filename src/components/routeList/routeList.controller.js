import LocationSearchBox from '../locationSearchBox/LocationSearchBox'
import StopOverModal from '../stopOverModal/StopOverModal'
let vm

export default {
  name: 'route-list',
  data () {
  	vm = this
    return {
    	addDisabled: true,
    	previewLocation: null,
    	stageLocations: []
    }
  },
  methods: {
  	enableAdd: function (location) { 
  		vm.addDisabled = false
  		vm.previewLocation = location[0] 
  		window.eventBus.$emit('showOnMap', vm.previewLocation.geometry.location)
  	},
  	disableAdd: function () { 
  		vm.addDisabled = true
  		window.eventBus.$emit('hideOnMap')
  	},
  	addLocation: function (location) {
  		vm.stageLocations.push(location)
  		window.eventBus.$emit('hideOnMap')
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
  		window.eventBus.$emit('showOnMap', vm.stageLocations[index].geometry.location)
  	},
  	reorder ({oldIndex, newIndex}) {
    	const movedItem = vm.stageLocations.splice(oldIndex, 1)[0]
      	vm.stageLocations.splice(newIndex, 0, movedItem)
      	vm.updateLocations()
    },
    updateLocations: function () {
  		window.eventBus.$emit('updateLocations', vm.stageLocations)
    }
  },
  components: {
  	LocationSearchBox,
    StopOverModal
  }
}