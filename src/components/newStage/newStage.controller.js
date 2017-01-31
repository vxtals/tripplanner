import RouteList from '../routeList/RouteList'
import TripMap from '../tripMap/TripMap'

export default {
  name: 'new-stage',
  components: {
    RouteList,
    TripMap
  },
  data () {
    return {
      removeMsg: 'This is a dummy component, remove it.'
    }
  },
  methods: {
    updateLoc: function (newVal) {
      vm.loc1 = newVal
      window.eventBus.$emit('showOnMap', vm.loc1)
    }
  }
}