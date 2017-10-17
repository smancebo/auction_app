const template = require('./aution.component.html');

class auctionController {
  constructor($stateParams, AuthService) {
    this.$stateParams = $stateParams;
    this.AuthService = AuthService;
    this.currentPlayer = AuthService.Get();
  }
}

module.exports = {
  template,
  controller: auctionController,
};
