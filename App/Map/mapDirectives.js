(function () {

    var module = angular.module("mapDirectives", []);


    module.directive("mapDirective", function () {
        return {
            templateUrl: "Map/map.html",
            controller: "mapController",
            controllerAs: "mapCtrl"
        }
    });







})();