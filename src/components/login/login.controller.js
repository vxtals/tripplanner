let vm

export default {
  name: 'login',
  data () {
    vm = this;
    return {
      userName: undefined,
      userPassword: undefined
    }
  },
  methods: {
    loginUser: function () {
      window.location.href = '/#/triplist';
    },
    navigateSignUp: function () {
      window.location.href = '/#/signup';
    }
  }
}