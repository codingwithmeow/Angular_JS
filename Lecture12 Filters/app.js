(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope ,$filter) {
  $scope.name = "Kitty";
  $scope.stateOfBeing = "hungry";
  $scope.foodCost = .45;

  $scope.sayMessage = function () {
    var msg = "Kitty is HUNGRY!";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.feedCat = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
