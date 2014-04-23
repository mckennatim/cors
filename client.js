
var app = angular.module('app', ['ngRoute']);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
]);

function Ctrl1Ctrl($scope, $http){
  $scope.getout = '';
  $scope.postout = '';
  $scope.dog='Butler the mutt';
  $scope.get = function(){
    var url='http://10.0.1.24:3030/';
    var promise=$http.get(url+'animals').then(function(data) {
      console.log(data.data[0])
      $scope.getout= data.data;
      return data;
    });
    return promise;    
  }
  $scope.post = function(){
    var url='http://10.0.1.24:3030/';
    var promise=$http.post(url+'animals/', {duck:'daffy'}).then(function(data) {
      console.log(data.data);
      return data;
    });
    return promise;    
  }
}
