/**
 * Created by lapachuka on 9/28/16.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from "../services/auth-service";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {}

    canActivate(){
        if(!this.auth.authenticated){
            this.router.navigate(['/']);
        }
        return this.auth.authenticated;
    }
}