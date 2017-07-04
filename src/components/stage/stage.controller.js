import StopoverList from './stopoverList/StopoverList'
import TripMap from '../reusable/tripMap/TripMap'
let vm

export default {
  name: 'stage',
  components: {
    StopoverList,
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