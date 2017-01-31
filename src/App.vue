<template>
  <div id="app">
    <new-stage></new-stage>
  </div>
</template>

<script>
  let $ = require('jquery')
  import NewStage from './components/newStage/NewStage'

  export default {
    name: 'app',
    components: {
      NewStage
    },
    data () {
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
    }
  }
</script>

<style lang='scss' src='./app.scss'></style>
<style src='./assets/styles/bootstrap.css'></style>
