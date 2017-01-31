let vm, input, searchBox

export default {
  name: 'location-search-box',
  data () {
    vm = this
    return {
      searchString: null,
      stringSet: false
    }
  },
  props: ['locations'],
  created: function () {
    window.eventBus.$on('maps_loaded', vm.initLocationSearch)
  },
  methods: {
    initLocationSearch: function () {
      input = document.getElementById('loc-input')
      searchBox = new google.maps.places.SearchBox(input)
      searchBox.addListener('places_changed', vm.setPlace)
    },
    setPlace: function () {
      vm.stringSet = true
      vm.$emit('location-set', searchBox.getPlaces())
    },
    toggleAlert: function () {
      vm.showRight = !vm.showRight
    }
  },
  watch: {
    searchString: function (val) {
      if(vm.stringSet) vm.$emit('location-unset', val)
    }
  },
  components: {
    
  }
}