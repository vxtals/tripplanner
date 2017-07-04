let vm, input, searchBox
let stringSet = false

export default {
  name: 'location-search-box',
  data () {
    vm = this
    return {
      searchString: null
    }
  },
  props: ['locations'],
  created: function () {
    window.eventBus.$on('google-maps-loaded', initLocationSearch)
    window.eventBus.$on('clear-location-search-box', clearLocationSearchBox)
  },
  watch: {
    searchString: function (val) {
      if(stringSet) vm.$emit('location-unset', val)
    }
  }
}

// PRIVATE FUNCTIONS

function initLocationSearch () {
  input = document.getElementById('loc-input')
  searchBox = new google.maps.places.SearchBox(input)
  searchBox.addListener('places_changed', setPlace)
}

function clearLocationSearchBox () {
  vm.searchString = null
}

function setPlace () {
  stringSet = true
  vm.$emit('location-set', searchBox.getPlaces())
}