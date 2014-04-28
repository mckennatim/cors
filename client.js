var url='http://10.0.1.24:3030/';

var app = angular.module('app', []);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
]);


var RestData = function($http){
  this.get= function(){
    var promise = $http.get(url +'animals/').then(function(data) {
      console.log(data.data);
      return data;
    });
    return promise;    
  }
  this.post = function(){
    var promise=$http.post(url+'animals/', {type:'duck',name:'daffy'}).then(function(data) {
      console.log(data.data);
      return data;
    });
    return promise;    
  }
  this.put = function(){
    var type = 'cat';
    var newname = {name:'snowball'};
    var promise=$http.put(url+'animals/'+type, newname).then(function(data) {
      console.log(data.data);
      return data;
    });
    return promise;    
  } 
  this.del = function(){
    var type = 'duck';
    var name = {name:'daffy'};
    var promise=$http.delete(url+'animals/'+type, name).then(function(data) {
      console.log(data.name);
      return data;
    });
    return promise;    
  }    
  this.cow = 'mycaw';
  this.rec = {dog:'mabibi'};
  return  this;  
}
app.factory('AnimalData', RestData);

/* is the same as the  following anonymous version
app.factory('AnimalData', function($http){
  this.get= function(){
    var promise = $http.get(url +'animals/').then(function(data) {
      console.log(data.data);
      return data;
    });
    return promise;    
  }

  this.cow = 'mycaw';
  this.rec = {dog:'mabibi'};
  return  this;
});
*/

app.controller('Ctrl1Ctrl', function($scope, AnimalData){
  $scope.getout = "";
  $scope.postout = '';
  $scope.putout = '';
  $scope.delout = '';
  $scope.dog='Butler the mutt';
  $scope.get = function(){
    AnimalData.get().then(function(d){
      $scope.getout = d.data;    
    });
  }
  $scope.post = function(){
    AnimalData.post().then(function(d){
      $scope.postout = d.data;    
    });
  }
  $scope.put = function(){
    AnimalData.put().then(function(d){
      $scope.putout = d.data;    
    });
  }
  $scope.del = function(){
    AnimalData.del().then(function(d){
      $scope.delout = d.data;    
    });
  }
  $scope.postout ="duck"
});

