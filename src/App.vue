<template>
  <div id="app">
    <tripmap></tripmap>
  </div>
</template>

<script>
  var $ = require('jquery')
  import Tripmap from './components/tripmap/Tripmap'

  export default {
    name: 'app',
    created: function () {
      // Loading google maps js API. Emitting event.
      $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyC8zPnBx0QlrQ5V4tMteCzgfN_vXfFBagc&libraries=places', function () {
        window.eventBus.$emit('maps_loaded')
        // Handle errors
      })
    },
    components: {
      Tripmap
    }
  }
</script>

<style src='./main.scss'></style>
