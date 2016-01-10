(function () {

    var module = angular.module("mapManipulating", []);

    module.controller("mapController", ["mapService", function (mapService) {

        var ctrl = this;
        ctrl.mapService = mapService;
        

        ctrl.domLoaded = function () {
            google.maps.event.addDomListener(window, "load", ctrl.mapService.initialize());          
        }();

       





    }]);






})();