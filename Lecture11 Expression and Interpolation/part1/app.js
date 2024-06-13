(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Meow";

    $scope.sayMessage = function () {
      return $scope.name + " likes to eat chocolate"
    }
  }

})();
