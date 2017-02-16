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
    showMsg: function (msg, timeout) {
      var data = {
        message: msg
      }
      if (!!timeout) data.timeout = timeout
      vm.snackbar.MaterialSnackbar.showSnackbar(data)
    }
  }
}