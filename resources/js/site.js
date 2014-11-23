(function () {

    var echadZeman = angular.module('echad-zeman', ['ngRoute']);

    echadZeman.controller('body', function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    });

    echadZeman.controller('LoginController', function ($scope, $routeParams) {
        $scope.name = "LoginController";
        $scope.params = $routeParams;
    });

    echadZeman.controller('InfoController', function ($scope, $routeParams) {
        $scope.name = "InfoController";
        $scope.params = $routeParams;
    });

    echadZeman.controller('RegisterController', function ($scope, $routeParams, userService) {
        registerController = this;
        this.email = "";
        this.password = "";
        this.repeatPassword = "";

        this.registerUser = function() {
            if($scope.registerForm.$valid) {
                userService.createUser(registerController.email, registerController.password, registerController.repeatPassword);
                registerController.reset();
            }
            return true;
        };
        this.reset = function() {
            registerController.email = "";
            registerController.password = "";
            registerController.repeatPassword = "";
            $scope.registerForm.$setUntouched(true);
            $scope.registerForm.$setPristine(true);
        };
    });

    echadZeman.config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('!');
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
                redirectTo: "/login"
            });
    });
})();