"use strict";
/**
 * Created by lapachuka on 10/1/16.
 */
var angularfire2_1 = require('angularfire2');
var firebaseConfig = {
    apiKey: "AIzaSyAo-1wpnt28s1gV84hY5NnupfTSBoenW3c",
    authDomain: "church-member.firebaseapp.com",
    databaseURL: "https://church-member.firebaseio.com",
    storageBucket: "church-member.appspot.com"
};
var firebaseAuthConfig = {
    provider: angularfire2_1.AuthProviders.Password,
    method: angularfire2_1.AuthMethods.Password
};
exports.FirebaseModule = angularfire2_1.AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
//# sourceMappingURL=index.js.map