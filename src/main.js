// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMdl from 'vue-mdl'

import Sortable from 'sortablejs'

/* eslint-disable no-new */
Vue.directive('sortable', {
  inserted: function (el, binding) {
    new Sortable(el, binding.value || {})
  }
})

/* eslint-disable no-new */
window.eventBus = new Vue()

Vue.use(VueMdl)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

