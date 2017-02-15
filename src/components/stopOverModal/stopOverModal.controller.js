let vm

export default {
  name: 'stop-over-modal',
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
  vm.showModal()
  },
  created: function () {
  	window.eventBus.$on('editStopOver', vm.showModal)
  },
  methods: {
  	showModal: function () {
      vm.dialog.showModal()
      setTimeout(function () {
        vm.dialog.focus()
      }, 5000)
  	},
    closeModal: () => vm.dialog.close()
  },
  watch: {
  	editable: function (newVal) {
  		console.log('editable has changed to ' + newVal)
  	}
  }
}