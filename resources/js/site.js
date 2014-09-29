var echadZeman = angular.module('echad-zeman', ['ngRoute']);

echadZeman.controller('body', function ($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
});

echadZeman.controller('LoginController', function($scope, $routeParams) {
     $scope.name = "LoginController";
     $scope.params = $routeParams;
});

echadZeman.controller('InfoController', function($scope, $routeParams) {
     $scope.name = "InfoController";
     $scope.params = $routeParams;
});

echadZeman.controller('RegisterController', function($scope, $routeParams) {
     $scope.name = "InfoController";
     $scope.params = $routeParams;
});

echadZeman.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'login.html',
			controller: "LoginController"
		})
		.when('/register', {
			templateUrl: 'register.html',
			controller: "RegisterController"
		})
		.when('/info', {
			templateUrl: 'info.html',
			controller: "InfoController"
		})
		.otherwise({
			redirectTo: "/info"
		});
});