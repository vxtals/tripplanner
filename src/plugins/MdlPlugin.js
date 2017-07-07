require('material-design-lite')

let MdlPlugin = {
  install: function (Vue) {
    Vue.mixin({
      mounted: function () {
        window.componentHandler.upgradeAllRegistered()
      }
    }
  )
  }
}

export default MdlPlugin
