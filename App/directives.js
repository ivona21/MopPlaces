(function () {

    var module = angular.module("directives", []);

    module.directive("contentDirective", function () {
        
        return {
            templateUrl: "content.html",
            controller: "controller",
            controllerAs: "ctrl"
        }

    });

    module.directive("cardDirective", function () {
        return {
            templateUrl: "card.html",
            controller: "controller",
            controllerAs: "ctrl"
        }
    });




})();