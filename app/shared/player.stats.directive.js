class playerStatsController {
  constructor($scope) {
    this.$scope = $scope;
  }
}

function playerStatsLink($scope, $element) {
  const logOff = $element.find('.fa-power-off');
  logOff.on('click', (event) => {
    alert('user clicked');
    event.preventDefault();
  });
}

var template = `<div class="card">
                  <div class="card-header">
                    Player Stats
                    <a href="#" class="logoff-btn pull-right" title="Logoff">
                    <i class="fa fa-power-off"></i>
                  </a>
                  </div>
                  <div class="card-body" style="padding:10px">
                    <div class="card-row">
                      <label class="title">Name:</label>
                      <span>The Player Name</span>
                    </div>
                    <div class="card-row">
                      <label class="title">Coins:</label>
                      <span>2345 <i class="fa fa-bitcoin"></i> </span>
                    </div>
                  </div>
                </div>`;

export default function playerStartsDirective (){
  return {
    restrict: 'E',
    scope: {
      player: '='
    },
    template: template,
    controller: playerStatsController,
    link: playerStatsLink
  };
}
