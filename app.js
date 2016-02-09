(function(){
  	var app = angular.module('tutorialLists', []);

	app.controller('TutorialController',['$http',function($http){
	 
	  var tutorials = this;
	  $http.get('http://tylerlutz.github.io/AngularJSAssignment5Part1/json/tutorials.json').success(function(data){
	       tutorials.jsonList = data;
	   });
	}]);
 })();