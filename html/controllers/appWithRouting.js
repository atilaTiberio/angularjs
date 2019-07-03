/*
to use this ngRoute angular-route.js should be added in the scripts section

 */
var app = angular
    .module('demoApp', ['ngRoute'])
    .factory('simpleFactory',function(){

        var factory={};
        var customers=[
            {name: 'John Smith', city: 'Phoenix'},
            {name: 'New name', city: 'Atlanta   '},
            {name: 'Juan Wick', city: 'EdoMex'}

        ];

        /*
            This could be an $http call
         */
        factory.getCustomers= function(){
            return customers;
        };

        factory.postCustomer= function(customer){
          /*
            this will add a new customer into our db
           */
        };
        return factory;

    });

var controllers={};


controllers.SimpleController=function($scope,simpleFactory){
    /*
        Controller gets customer data from a factory
     */

    $scope.customers=simpleFactory.getCustomers()


    $scope.addCustomer = function(){
        console.log($scope.newCustomer);
        $scope.customers.push({name:$scope.newCustomer.name,city:$scope.newCustomer.city});
    }

}


app.controller(controllers);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/partial1', {
            controller: controllers.SimpleController,
            templateUrl: 'view1.html'
        })
        .when('/partial2', {
            controller: controllers.SimpleController,
            templateUrl: 'view2.html'
        })
        .otherwise({redirectTo: '/'});


});

/*
    New and a custom directive, named with camel case format and invoked with dash; h3-new-directive
    next: to check how to send parameters
 */
app.directive("h3NewDirective",function(){
    return {
        restrict: "M",
        replace: true,
        templateUrl: 'directive_file.html'
    };

});


/*
    for a specific link
 */
app.directive('domDirective', function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {

            console.log(attrs);
            element.on('click', function () {
                element.html('You clicked me!');
            });
            element.on('mouseenter', function () {
                element.css('background-color', 'red');
            });
            element.on('mouseleave', function () {
                element.css('background-color', 'gray');
            });
        }
    };
});







