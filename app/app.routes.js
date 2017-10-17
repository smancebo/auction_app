
function authenticated($state, AuthService) {
  const auth = AuthService.Get();
  if (auth === null) {
    $state.go('login');
  }
  return auth;
}

export default function appRoutes($urlRouterProvider, $stateProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    component: 'app',
    resolve: {
      authenticated,
    },
  });
  $urlRouterProvider.otherwise('/login');
}

authenticated.$inject = ['$state', 'AuthService'];
appRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];
