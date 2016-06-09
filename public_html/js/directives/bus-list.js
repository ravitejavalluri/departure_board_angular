(function () {
    
    var busListDirective = function () {
        return {
            restrict: 'EA',
            templateUrl: 'templates/directives/bus-list.html',
        };
    };
    
    angular.module('DeparturesApp').directive('busList', busListDirective); // bus list directive    
    
}());

