const template = `<div class="card current-auction">
                    <div class="card-header">
                      Current Auction
                    </div>
                    <div class="card-body">
                      <h5 class="text-center no-current-auction">No Current Auction</h5>
                      <div class="auction-dv" ng-hide='true'>
                        <div class="text-center padding-top">
                          <div>
                            <label>Seller Name:</label>
                            <span><b>Dispt0</b></span>
                          </div>
                        </div>
                        <div class="card-block">
                          <div class="row justify-content-center">
                            <div class="col-md-3 text-center">
                              <p class="img-carrot"></p>
                              <p class="no-margin">Carrot</p>
                            </div>
                            <div class="col-md-6">
                              <div class="text-center">
                                <div class="quantity-block">
                                  <p class="no-margin">Quantity</p>
                                  <p class="no-margin"><b>30</b></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="text-center padding-top">
                            <label>Time Left:</label>
                            <span><b>90</b></span>
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
  constructor($scope) {
    this.$scope = $scope;
  }
}

export default function currentAuctionDirective() {
  return {
    restrict: 'E',
    template,
    controller: CurrentAuctionController,
  };
}
