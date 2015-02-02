var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
	$scope.test = "Connection good";

	$scope.getData = function() {
    	$scope.quotes = dataService.getData();
  	}

  	$scope.getData();

});
