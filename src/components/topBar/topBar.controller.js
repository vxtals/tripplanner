let vm

export default {
  name: 'top-bar',
  data () {
    vm = this
    return {
      
    }
  },
  directives: {
    autofold: (el) => {
      let links = el.getElementsByTagName('a')
      for (var i = 0; i < links.length; i++){
        links[i].addEventListener('click', ()=>{
          el.classList.toggle('is-visible')
          document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.toggle('is-visible')
        })
      }
    }
  }
}

// PRIVATE METHODS