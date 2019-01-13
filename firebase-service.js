const firebase = require('firebase-admin');
const serviceAccount = require('../../test-line-api-firebase.json');
var db, ref;

class FirebaseService {
	constructor() {
        firebase.initializeApp({
			credential: firebase.credential.cert(serviceAccount),
			databaseURL: 'https://to-do-dev.firebaseio.com/'
		});

		db = firebase.database();

		ref = db.ref('task');
    }

    getHogwartHouses() {
        return new Promise(function (resolve, reject) {
            try {
                return ref.once('value', function(snapshot) {
                    let _task = snapshot.val();

                    return resolve(JSON.stringify(_task));
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    }   
}
module.exports = new FirebaseService();