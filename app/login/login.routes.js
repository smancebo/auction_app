
export default function loginRoutes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login',
    });
}
loginRoutes.$inject = ['$stateProvider'];
