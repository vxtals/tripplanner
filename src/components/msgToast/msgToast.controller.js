let vm
export default {
  name: 'msg-toast',
  data () {
    vm = this
    return {
    }
  },
  created:  function () {
    window.eventBus.$on('app-msg', vm.showMsg)
  },
  mounted: function () {
    vm.snackbar = document.querySelector('.mdl-js-snackbar')
  },
  methods: {
    showMsg: function (msg) {
      var data = {
        message: msg
      }
      vm.snackbar.MaterialSnackbar.showSnackbar(data)
    }
  }
}