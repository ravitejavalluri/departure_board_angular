angular.module('DeparturesApp').config(function($routeProvider){
    
    $routeProvider.when('/departures' , {
        templateUrl: 'templates/pages/departures/index.html',
        controller: 'DeparturesController',
        controllerAs: 'indexController',
    }).when('/', {
        templateUrl: 'templates/pages/departures/index.html',
        controller: 'DeparturesController',
        controllerAs: 'indexController',
    }).otherwise( { redirectTo: '/' } )
    
});