// (function () {
//     'use strict';
    
//     angular.module('DIApp', [])

//     .controller('DIController', DIController);

//     DIController.$inject = ['$scope', '$filter'];
    
//     function DIController ($scope, $filter) {
//       $scope.name = "Meow";
    
//       $scope.upper = function () {
//         var upCase = $filter('uppercase');
//         $scope.name = upCase($scope.name);
//     };

//     }
    
// })();

// !function(){"use strict";angular.module("DIApp",[]).controller("DIController",(function(n,e,o){n.name="Meow",n.upper=function(){var o=e("uppercase");n.name=o(n.name)}}))}(); gives error

//!function(){"use strict";angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(e,n,o){e.name="Meow",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}])}();

!function(){"use strict";function e(e,n){e.name="Meow",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}(); // or more readable way