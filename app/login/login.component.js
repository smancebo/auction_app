
class loginController {
  constructor($state) {
    this.$state = $state;
    this.userName = '';
  }

  login() {
    this.$state.go('app.auction');
  }

}
loginController.$inject = ['$state'];

// function userController() {
//   this.userName = '';
//   this.login = () => {
//     console.log(this.userName);
//   };
// }

module.exports = {
  template: require('./login.html'),
  controller: loginController
};
