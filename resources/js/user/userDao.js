(function () {

    var echadZeman = angular.module('echad-zeman');
    echadZeman.factory('userDao', ['PouchDB', function(PouchDB) {
        var db = new PouchDB("user");
        var version = "application/vnd.echad-zeman.user.v1+json"

        var userEmailIndex = {
            _id: '_design/email_index',
            views: {
                'email_index': {
                    map: function (doc) { emit(doc.email, doc); }.toString()
                }
            }
        };
        db.put(userEmailIndex).then(function () {
            db.query('email_index', {stale: 'update_after'});
        });
        return {
            create: function (newUser, cb) {
                newUser.version = version;
                newUser.timestamp = Date.now();
                db.post(newUser, {}, cb);
            },
            readByEmail: function (emailAddress, cb) {
                function map(doc) {
                    emit(doc.email, doc);
                }
                db.query('email_index', { key: emailAddress, limit: 1}, function (error, response) {
                    if (error) {
                        cb(error);
                    }
                    else if (response.rows.length < 1) {
                        cb("No row found")
                    }
                    else if (response.rows.length > 1) {
                        cb("Ohh noes, more then one row found.")
                    }
                    else {
                        cb(null, response.rows[0].value)

                    }
                });
            }

        };
    }])
}());
