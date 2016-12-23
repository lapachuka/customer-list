/**
 * Created by lapachuka on 10/1/16.
 */
import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';


const firebaseConfig = {
    apiKey: "AIzaSyAo-1wpnt28s1gV84hY5NnupfTSBoenW3c",
    authDomain: "church-member.firebaseapp.com",
    databaseURL: "https://church-member.firebaseio.com",
    storageBucket: "church-member.appspot.com"
};

const firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);