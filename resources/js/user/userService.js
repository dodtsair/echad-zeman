(function () {

    var echadZeman = angular.module('echad-zeman');
    echadZeman.factory('userService', ['validator', 'scrypt', 'userDao', function(validator, scrypt, userDao) {
        var userService = {
            createUser: function(emailAddress, password, repeatPassword, cb) {
                var loggingCb = function(err, response) {
                    console.log(err);
                    console.log(response);
                    cb(err, response);
                }
                userDao.create({email: emailAddress, password: password}, loggingCb);
                console.log(validator);
                console.log(scrypt);
            }
        };
        return userService;
    }])
}());
