<template>
  <div id="app">
    <div class='row'>
      <div class='col-lg-3 center'>
        <route-list></route-list>
      </div>
      <div class='col-lg-9'> 
        <tripmap></tripmap>
      </div>
    </div>
  </div>
</template>

<script>
  let $, vm
  $ = require('jquery')
  import Tripmap from './components/tripmap/Tripmap'
  import RouteList from './components/routeList/RouteList'

  export default {
    name: 'app',
    components: {
      Tripmap,
      RouteList
    },
    data () {
      vm = this
      return {
      }
    },
    created: function () {
      // Loading google maps js API. Emitting event.
      // Add location here
      $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyC8zPnBx0QlrQ5V4tMteCzgfN_vXfFBagc&libraries=places', function () {
        window.eventBus.$emit('maps_loaded')
        // Handle errors
      })
    },
    methods: {
      updateLoc: function (newVal) {
        vm.loc1 = newVal
        window.eventBus.$emit('showOnMap', vm.loc1)
      }
    }
  }
</script>

<style lang='scss' src='./app.scss'></style>
<style src='./assets/styles/bootstrap.css'></style>
