(function () {

    var echadZeman = angular.module('echad-zeman');
    echadZeman.factory('userDao', [ function() {
        return {
            create: function (newUser, cb) {
            },
            readByEmail: function (emailAddress, cb) {
            }

        };
    }])
}());
