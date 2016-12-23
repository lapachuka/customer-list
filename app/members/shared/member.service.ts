/**
 * Created by lapachuka on 9/21/16.
 */
import {Injectable} from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class MemberService {
    items:FirebaseListObservable<any[]>;
    storageRef:any;


    constructor(public af:AngularFire) {
        var cfirebaseConfig = {
            apiKey: "AIzaSyAo-1wpnt28s1gV84hY5NnupfTSBoenW3c",
            authDomain: "church-member.firebaseapp.com",
            databaseURL: "https://church-member.firebaseio.com",
            storageBucket: "church-member.appspot.com"
        };

        this.items = af.database.list('/members');

        firebase.initializeApp(cfirebaseConfig);
        this.storageRef = firebase.storage().ref();
    }

    getMembers() {
        return this.af.database.list('members');
    }

    setMember(member) {
        this.items.push(member);
    }

    updateMember(member) {
        console.log(member);
        this.items.update(member.$key, {
                'firstName': member.firstName,
                'lastName': member.lastName,
                'birthday': member.birthday,
                'phone': member.phone,
                'avatar': member.image
            }
        );
    }

    delete(member) {
        this.items = this.af.database.list('/members');
        this.items.remove(member);
    }

    imgUpload(file) {
        var imagesRef = this.storageRef.child('avatar/' + file.name);

        return imagesRef.put(file);
    }
}