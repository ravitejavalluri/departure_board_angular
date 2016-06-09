(function () {
    
    var busDeparturesDirective = function () {
        return {
            restrict: 'EA',
            templateUrl: 'templates/directives/bus-departures.html',
        };
    };
    
    angular.module('DeparturesApp').directive('busDepartures', busDeparturesDirective); // bus departures directive
    
}());

