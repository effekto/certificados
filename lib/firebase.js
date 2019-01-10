import * as firebase from 'firebase'

class Firebase {
    static init(){
        firebase.initializeApp({
            apiKey: "AIzaSyAiUQVQdrxgEtF6hOT1Ljdy3jXaqi1PReI",
            authDomain: "certificados-6cf19.firebaseapp.com",
            databaseURL: "https://certificados-6cf19.firebaseio.com",
            storageBucket: "certificados-6cf19.appspot.com",
        });
    }
}

module.exports = Firebase