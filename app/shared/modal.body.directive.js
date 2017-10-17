export default function modalBodyDirective($compile) {
  return {
    restrict: 'a',
    scope: {
      template: '@',
      controller: '&'
    },
    controller: ['$scope', ($scope) => {
      console.log($scope.controller);
      return new $scope.controller();
    }],
    link: ($scope, $element, $attrs) => {
      $element.append($compile($scope.template)($scope));
    }
  }
}
modalBodyDirective.$inject = ['$compile'];
