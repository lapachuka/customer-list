/**
 * Created by lapachuka on 10/1/16.
 */
import {Injectable} from '@angular/core';
import {FirebaseAuth, FirebaseAuthState} from 'angularfire2';


@Injectable()
export class AuthService {
    private authState:FirebaseAuthState = null;

    constructor(public auth$:FirebaseAuth) {
        auth$.subscribe((state:FirebaseAuthState) => {
            this.authState = state;
        });
    }

    get authenticated():boolean {
        return this.authState !== null;
    }

    get id():string {
        return this.authenticated ? this.authState.uid : '';
    }

    isLogin(){
        return this.auth$.getAuth();
    }

    signIn(email:string, password:string):firebase.Promise<FirebaseAuthState> {
        console.log(email, password);
        console.log(this.auth$.getAuth());
        return this.auth$.login({email: email, password: password})
            .catch(error => {
                alert(error.message || error)
            });
    }

    signOut():void {
        this.auth$.logout();
    }
}