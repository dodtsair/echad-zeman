(function () {

    var echadZeman = angular.module('echad-zeman');
    echadZeman.factory('userService', ['validator', 'scrypt', 'userDao', function(validator, scrypt, userDao) {
        var userService = {
            createUser: function(emailAddress, password, repeatPassword, cb) {
                userDao.readByEmail(emailAddress, function(err, response) {
                    if(!response) {
                        userDao.create({email: emailAddress, password: password}, cb);
                    }

                });
            }
        };
        return userService;
    }])
}());
