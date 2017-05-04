import TripMap from '../tripMap/TripMap'
let vm

export default {
  name: 'trip-summary',
  components: {
    TripMap
  },
  data () {
    vm = this
    return {
      showStages: true,
      tripName: 'Route 66',
      startDate: undefined,
      finishDate: undefined,
      participants: [{name: 'Fulano', user: true}, {name: 'Mengano', user: false}],
      countries: ['United States'],
      stages: [
        {name: 'Stage 1', id: 0 },
        {name: 'Stage 2', id: 1 },
        {name: 'Stage 3', id: 2 },
        {name: 'Stage 4', id: 3 },
        {name: 'Stage 5', id: 4 }
      ]
    }
  },
  methods: {
    openUser: (userName) => console.log(userName),
    reorder ({oldIndex, newIndex}) {
      const movedItem = vm.stages.splice(oldIndex, 1)[0]
        vm.stages.splice(newIndex, 0, movedItem)
    },
    navigateStage: () => 
      window.location.href = '/#/newstage'
  }
}