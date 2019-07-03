var app = angular.module("firstApp",[]);



var controllers={};

controllers.FirstController=function($scope){
    $scope.someObject= {};
    $scope.someObject.info="Some info that is sync with the view";

};

controllers.SimpleController=function ($scope) {
    $scope.customers = [
        {name: 'John Smith', city: 'Phoenix'},
        {name: 'New name', city: 'Atlanta   '}
    ];
};

app.controller(controllers);


/*
app.controller("FirstController",function($scope){
    $scope.someObject= {};
    $scope.someObject.info="Some info that is sync with the view";

});


app.controller("SimpleController",SimpleController);

function SimpleController($scope) {
    $scope.customers = [
        {name: 'John Smith', city: 'Phoenix'}
    ];
}*/
