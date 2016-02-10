(function(){
  	var app = angular.module('tutorialLists', []);

	app.controller('TutorialController',['$http',function($http){
	 
	  var tutorials = this;
	  $http.get('json/tutorials.json').success(function(data){
	       tutorials.jsonList = data;
	   });
	}]);
 })();