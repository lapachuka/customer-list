/**
 * Created by lapachuka on 10/1/16.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule}   from '@angular/forms';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './services/auth-service';
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [
    {path: '', component: LoginComponent}
];


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})

export class AuthModule {}

export { AuthGuard };
export { AuthService };