(function () {

    var echadZeman = angular.module('echad-zeman');
    echadZeman.factory('userService', ['userDao', function(userDao) {
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
