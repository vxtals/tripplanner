// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
// import VueMdl from 'vue-mdl'
import Sortable from 'sortablejs'

window._ = require('lodash')
window.$ = require('jquery')

require('material-design-lite')

/* eslint-disable no-new */
Vue.directive('sortable', {
  inserted: function (el, binding) {
    new Sortable(el, binding.value || {})
  }
})

// Vue.use(VueMdl)

/* eslint-disable no-new */
// New vue instance to be used as event bus
// It must be before Vue app instantation
window.eventBus = new Vue()

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
