(function () {

    var echadZeman = angular.module('echad-zeman');
    echadZeman.factory('userDao', ['PouchDB', function(PouchDB) {
        var db = new PouchDB("user");
        var userDao = {
            create: function(newUser, cb) {
                db.post(newUser, {}, cb);
            }
        };
        return userDao;
    }])
}());
