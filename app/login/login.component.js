const template = require('./login.html');

class loginController {
  constructor($state, $login, AuthService) {
    this.$state = $state;
    this.loginService = $login;
    this.AuthService = AuthService;
    this.userName = '';
  }

  async login() {
    const auth = await this.loginService.login(this.userName);
    this.AuthService.Set(auth.data.player);
    this.$state.go('app.auction', { user: auth.data.player });
  }
}
loginController.$inject = ['$state', '$login', 'AuthService'];

// function userController() {
//   this.userName = '';
//   this.login = () => {
//     console.log(this.userName);
//   };
// }

module.exports = {
  template,
  controller: loginController,
};
