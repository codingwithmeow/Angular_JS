(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', lovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'lovesFilter'];

function MsgController($scope, lovesFilter) {
  $scope.name = "Kitty";
  $scope.stateOfBeing = "hungry";
  $scope.foodCost = .45;

  $scope.sayMessage = function () {
    var msg = "Kitty likes to eat healthy snacks at night!";
    
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Kitty likes to eat healthy snacks at night!";
    msg = lovesFilter(msg);
    return msg;
  };

  $scope.feedCat = function () {
    $scope.stateOfBeing = "fed";
  };
}

function lovesFilter() {
  return function ( input ) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
}

function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  }
}

})();
