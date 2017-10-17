const template = `<div class="card inventory">
                    <div class="card-header">
                      Inventory
                    </div>
                    <div class="card-body">
                      <div class="card-block" ng-repeat="item in player.Inventories track by item.id">
                        <div class="row align-items-center">
                          <div class="col-md-4 text-center">
                            <p class="{{:: item.Item.image}}"></p>
                            <p style="margin:0">{{:: item.Item.name }}</p>
                          </div>
                          <div class="col-md-4 text-center quantity">
                            <p>Quantity</p>
                            <p><b>{{:: item.quantity }}</b></p>
                          </div>
                          <div class="col-md-4 text-center">
                            <p class="img-mega-phone"></p>
                            <button type="button" class="btn btn-default btn-sm" ng-click="$ctrl.placeAuction(item)">Action</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;

const modalTemplate = `<div class="">
                        <div class="form-group">
                          <p>Item</p>
                          <span class="{{:: item.Item.image}}" style="margin:10px"></span>
                          <input type="text" class="form-control" readonly ng-model="item.Item.name">
                        </div>
                        <div class="form-group">
                          <p>Available</p>
                          <input type="text" class="form-control" readonly ng-model="item.quantity">
                        </div>
                        <div class="form-group">
                          <label>Quantity</label>
                          <input type="number" class="form-control" ng-model="item.amount">
                        </div>
                        <div class="form-group">
                          <label>Price</label>
                          <input type="number" class="form-control" ng-model="item.price">
                        </div>
                      </div>`;

class InventoryController {
  constructor($scope, $modal, $auction) {
    this.$scope = $scope;
    this.$modal = $modal;
    this.$auction = $auction;
  }

  async saveAuction(item) {
    let auction = {
      Item: item.Item,
      Player: this.$scope.player,
      quantity: item.amount,
      price: item.price
    };
    let response = await this.$auction.save(auction);
    console.log(response);
  }
  placeAuction(item) {
    const modalOptions = {
      title: 'Auction Item',
      body: modalTemplate,
      controller: ['$scope', ($scope) => {
        $scope.item = item;
        $scope.close = () => {
          this.$modal.close();
        }
        $scope.showItem = () => {
          this.saveAuction($scope.item);
        }
      }],
      buttons: [{
          type: 'primary',
          text: 'Place Auction!',
          onclick: 'showItem()'
        },
        {
          type: 'default',
          text: 'Cancel',
          onclick: 'close()'
        }
      ]
    };

    this.$modal.open(modalOptions);
  }
}
InventoryController.$inject = ['$scope', '$modal', '$auction'];

export default function inventoryDirective() {
  return {
    restrict: 'E',
    scope: {
      player: '=',
    },
    template,
    controller: InventoryController,
    controllerAs: '$ctrl'
  };
}
