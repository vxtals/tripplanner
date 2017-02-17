import RouteList from '../routeList/RouteList'
import TripMap from '../tripMap/TripMap'
let vm

export default {
  name: 'new-stage',
  components: {
    RouteList,
    TripMap
  },
  data () {
    vm = this
    return {
      showList: true
    }
  },
  methods: {
    switchRouteList: function () {
      vm.showList = !vm.showList
      if(window.innerWidth > 900){
        window.eventBus.$emit('reload-map')
      }
    }
  }
}