import NewStage from './newStage/NewStage'
import MsgToast from './msgToast/MsgToast'

export default {
  name: 'app',
  components: {
    NewStage,
    MsgToast
  },
  data () {
    return {
    }
  },
  created: function () {
    // Loading google maps js API. Emitting event.
    // Add location here
    $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyC8zPnBx0QlrQ5V4tMteCzgfN_vXfFBagc&libraries=places', function () {
      window.eventBus.$emit('google-maps-loaded')
      // Handle errors
    })
  }
}