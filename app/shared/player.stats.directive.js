const template = `<div class="card">

                  <div class="card-header">
                    Player Stats
                    <a href="#" class="logoff-btn pull-right" title="Logoff">
                    <i class="fa fa-power-off"></i>
                  </a>
                  </div>
                  <div class="card-body" style="padding:10px" ng-show='player'>
                    <div class="card-row">
                      <label class="title">Name:</label>
                      <span>{{:: player.username }}</span>
                    </div>
                    <div class="card-row">
                      <label class="title">Coins:</label>
                      <span>{{:: player.coins | number }} <i class="fa fa-bitcoin"></i> </span>
                    </div>
                  </div>
                </div>`;
class playerStatsController {
  constructor($scope, AuthService) {
    this.$scope = $scope;
    this.AuthService = AuthService;
  }
}
playerStatsController.$inject = ['$scope', 'AuthService'];

function playerStatsLink($scope, $element, $attr, $ctrl) {

  const logOff = $element.find('.fa-power-off');
  logOff.on('click', (event) => {
    $ctrl.AuthService.LogOff();
    event.preventDefault();
  });
}


export default function playerStartsDirective() {
  return {
    restrict: 'E',
    scope: {
      player: '=',
    },
    template,
    controller: playerStatsController,
    link: playerStatsLink,
  };
}
