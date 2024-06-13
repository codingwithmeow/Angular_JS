(function () {

    angular.module('myFirstApp', [] )

    .controller('MyFirstController', function ($scope) {
        $scope.name = "Meow";
        $scope.sayHello = function () {
            return "Hello Coursera";
        }
    });
    
}) ();