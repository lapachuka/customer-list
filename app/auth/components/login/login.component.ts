/**
 * Created by lapachuka on 9/21/16.
 */
import {Component} from '@angular/core';
import {Login} from './login.model'
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'app/auth/components/login/login.html',
    styleUrls: ['app/auth/components/login/style.css']
})

export class LoginComponent{
    login: Login = {
        password: '',
        email: ''
    };

    constructor(private auth: AuthService, private router: Router) {
    }

    onSubmit(){
            this.auth.signIn(this.login.email, this.login.password)
                .then(() => this.postSignIn());
    }

    private postSignIn(): void {
        this.router.navigate(['/members']);
    }

}