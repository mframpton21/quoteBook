var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService, $cookieStore){
	$scope.test = "Connection good";


	$scope.getData = function() {
    $scope.quotes = $cookieStore.get('quotes');
  };

  $scope.addData = function(obj) {
    $cookieStore.remove('quotes');
    $cookieStore.put('quotes', obj);
    $scope.getData();

  };

  $scope.removeData = function(string) {
    $cookieStore.remove('quotes');
    $scope.getData();
  };

  //console.log(dataService.getData());
  $cookieStore.put('quotes', dataService.getData());
  $scope.getData();
  console.log($scope.quotes);

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