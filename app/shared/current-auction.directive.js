import io from 'socket.io-client';

const template = `<div class="card current-auction">
                    <div class="card-header">
                      Current Auction
                    </div>
                    <div class="card-body">
                      <h5 class="text-center no-current-auction" ng-hide='current'>No Current Auction</h5>
                      <div class="auction-dv" ng-show='current'>
                        <div class="text-center padding-top" >

                          <div>
                            <label>Seller Name:</label>
                            <span><b>{{current.Player.username }}</b></span>
                          </div>
                        </div>
                        <div class="card-block">
                          <div class="row justify-content-center">
                            <div class="col-md-3 text-center">
                              <p class="{{current.Item.image}}"></p>
                              <p class="no-margin">{{current.Item.name}}</p>
                            </div>
                            <div class="col-md-6">
                              <div class="text-center">
                                <div class="quantity-block">
                                  <p class="no-margin">Quantity</p>
                                  <p class="no-margin"><b>{{current.quantity}}</b></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="text-center padding-top">
                            <label>Price:</label>
                            <span><b>{{current.price | number}} <i class="fa fa-bitcoin"></i></b></span>
                          </div>
                        </div>
                        <div>
                          <div class="text-center ">
                            <label>Time Left:</label>
                            <span><b>{{current.timeLeft}}</b></span>
                          </div>
                        </div>
                        <div>
                          <div class="text-center">
                            <label>Winning bid:</label>
                            <span><b>190</b></span>
                          </div>
                        </div>
                        <div class="text-center form-group">
                          <input type="number" class="input-bid form-control" />
                        </div>
                        <div class="text-center form-group">
                          <button class="btn btn-sm btn-default">Place bid</button>
                        </div>
                      </div>
                    </div>
                  </div>`;
class CurrentAuctionController {
  constructor($scope, AuthService) {
    this.$ctrl = $scope;
    this.Player = AuthService.Get();
  }
}
CurrentAuctionController.$inject = ['$scope', 'AuthService'];

function linkFn($scope, $element, $attr, $ctrl) {

    const $apply = (fn) => {
      $scope.$apply(fn);
    }
    let socket = io(`http://localhost:8091/auction?username=${$ctrl.Player.username}`);

    socket.on('current-auction', (auction) => {
      $apply(() => {
        $scope.current = JSON.parse(auction);
      });
    })
    socket.on('auction-tick', (tick) => {
      $apply(() => {
        $scope.current.timeLeft = tick;
      })
    })
    socket.on('auction-start', (auction) => {
      console.log(auction);
    })
  }


export default function currentAuctionDirective() {
  return {
    restrict: 'E',
    scope: true,
    template,
    controller: CurrentAuctionController,
    link: linkFn
  };
}
