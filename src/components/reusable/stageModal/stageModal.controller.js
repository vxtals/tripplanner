let vm

export default {
  name: 'stage-modal',
  props: {
  	editable: {
  		type: Boolean,
  		default: false
  	}
  },
  data () {
  	vm = this
    return {
    	stageName: null,
    	startDate: {
        date: null
      },
    	finishDate:  {
        date: null
      },
    	comments: null,
      lockedDate: true
    }
  },
  mounted: function () {
  	vm.dialog = document.querySelector('#dialog')
    vm.finishDate = vm.startDate
  },
  created: function () {
  	window.eventBus.$on('editStage', vm.showModal)
  },
  methods: {
  	showModal: function () {
      vm.dialog.showModal()
  	},
    closeModal: () => vm.dialog.close(),
    navigateStage: () => 
      window.location.href = '/#/stage',
    unlockDates: function() {
      vm.lockedDate = false 
      vm.finishDate = {date: null}
    },
    lockDates: function() {
      vm.lockedDate = true 
      vm.finishDate = vm.startDate
    } 

  },
  watch: {
  	editable: function (newVal) {
  		console.log('editable has changed to ' + newVal)
  	}
  }
}