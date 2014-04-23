
var app = angular.module('app', ['ngRoute']);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
]);

function Ctrl1Ctrl($scope, $http){
  $scope.getout = '';
  $scope.postout = '';
  $scope.putout = '';
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
    var promise=$http.post(url+'animals/', {type:'duck',name:'daffy'}).then(function(data) {
      console.log(data.data);
      $scope.postout= data.data;
      return data;
    });
    return promise;    
  }  
  $scope.put = function(){
    var url='http://10.0.1.24:3030/';
    var type = 'cat';
    var newname = {name:'snowball'};
    var promise=$http.put(url+'animals/'+type, newname).then(function(data) {
      console.log(data.data);
      $scope.putout= data.data;
      return data;
    });
    return promise;    
  }
}
