let vm

export default {
  name: 'signup',
  data () {
    vm = this;
    return {
      userName: undefined,
      userEmail: undefined,
      userPassword: undefined,
      repeatPassword: undefined
    }
  },
  methods: {
    signUpUser: function () {
      window.location.href = '/#/triplist';
    },
    navigateLogin: function () {
      window.location.href = '/#/login'
    }
  }
}