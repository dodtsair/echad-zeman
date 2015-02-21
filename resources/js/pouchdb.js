(function () {

    // pouchdb is available globally, but rather then services and controllers referencing it
    // globally making it difficult to test we'll wrap it up as an angular service.  Then inject
    // it into the controllers and services.  That will allow tests to inject their own mock
    // instances
    var echadZeman = angular.module('echad-zeman');
    echadZeman.factory('PouchDB', [function() {
        return PouchDB;
    }])
}());
