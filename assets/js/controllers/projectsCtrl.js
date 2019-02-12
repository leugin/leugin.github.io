
var dep = ['$scope','data'];
var app =angular.module('app');
var controller = function($scope,data){
    angular.extend($scope,data);

};
app.controller('projectsCtrl',dep.concat([controller]));
app.controller('projectCtrl',['$scope','data',function($scope,data){
    $scope.model ={bases:[]};
    angular.extend($scope,data);
}]);
app.controller('galleryCtrl',['$scope','data',function($scope,data){
    $scope.model = {};
    $scope.select = false;
}]);