// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import routes from './routes.js'
// import VueMdl from 'vue-mdl'
import Sortable from 'sortablejs'

window._ = require('lodash')
window.$ = require('jquery')

/* eslint-disable no-new */
Vue.directive('sortable', {
  inserted: function (el, binding) {
    new Sortable(el, binding.value || {})
  }
})

Vue.use(VueRouter)

/* eslint-disable no-new */
// New vue instance to be used as event bus
// It must be before Vue app instantation
window.eventBus = new Vue()

const router = new VueRouter({
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
