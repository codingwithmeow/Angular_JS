(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Meow";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function() {
    return "Meow likes to eat healthy snacks at night!";
  }

  $scope.feedKitty = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
