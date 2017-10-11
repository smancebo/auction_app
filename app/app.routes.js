appRoutes.$inject = ['$urlRouterProvider','$stateProvider'];
export default function appRoutes($urlRouterProvider, $stateProvider) {
  $stateProvider.state('app',{
    url:'/app',
    abstract: true,
    component: 'app'
  });
  $urlRouterProvider.otherwise('/login');
}
