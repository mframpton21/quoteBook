var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService, $cookieStore){
	$scope.test = "Connection good";


	$scope.getData = function() {
    $scope.quotes = $cookieStore.get('quotes');

  }$scope.addData = function(obj) {
    $scope.quotes = $cookieStore.put('quotes', obj);
  }

  $scope.removeData = function(string) {
    $scope.quotes = $cookieStore.remove('quotes');
  }

  //$scope.getData();
  $scope.quotes = $cookieStore.put('quotes', dataService.getData());

});


// angular.module('cookieStoreExample', ['ngCookies'])
// .controller('ExampleController', ['$cookieStore', function($cookieStore) {
//   // Put cookie
//   $cookieStore.put('myFavorite','oatmeal');
//   // Get cookie
//   var favoriteCookie = $cookieStore.get('myFavorite');
//   // Removing a cookie
//   $cookieStore.remove('myFavorite');
// }]);