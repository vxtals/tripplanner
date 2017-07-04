let vm

export default {
  name: 'stopover-modal',
  props: {
  	editable: {
  		type: Boolean,
  		default: false
  	}
  },
  data () {
  	vm = this
    return {
      stopover: {
      	locationName: 'Alfredo\'s Restaurant, Amarillo, TX',
      	alias: 'Lunch at Alfredo\'s',
      	arrivalTime: null,
      	departureTime: null,
      	stopType: null,
      	comments: null
      }
    }
  },
  mounted: function () {
	vm.dialog = document.querySelector('#dialog')
  },
  created: function () {
  	window.eventBus.$on('editStopOver', vm.showModal)
  },
  methods: {
  	showModal: function () {
      vm.dialog.showModal()
      document.getElementById('stop-alias').blur()
  	},
    closeModal: () => vm.dialog.close(),
    addPhoto: function () {
      console.log('control1')
      window.eventBus.$emit('app-msg', 'Photo service is not available')
    },
    setType: function () {
      console.log('control1')
      window.eventBus.$emit('app-msg', 'Type selection is not available')
    }
  },
  watch: {
  	editable: function (newVal) {
  		console.log('editable has changed to ' + newVal)
  	}
  }
}