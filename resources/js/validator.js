(function () {

    // Validator is available globally, but rather then services and controllers referencing it
    // globally making it difficult to test we'll wrap it up as an angular service.  Then inject
    // it into the controllers and services.  That will allow tests to inject their own mock
    // instances
    var user = angular.module('echad-zeman');
    user.factory('validator', [function() {
        return validator;
    }])
}());
