
export default function auctionRoutes($stateProvider) {
  $stateProvider.state('app.auction', {
    url: '/auction',
    component: 'auction',
    params: { user: { } },
  });
}
auctionRoutes.$inject = ['$stateProvider'];
