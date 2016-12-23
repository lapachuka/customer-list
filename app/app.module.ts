/**
 * Created by lapachuka on 9/18/16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {FormsModule}   from '@angular/forms';
import {MemberModule} from "./members/member.module";
import {RouterModule} from '@angular/router';
import {FirebaseModule} from './firebase/index';
import {AuthModule} from './auth/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([], {useHash: false}),
        MemberModule,
        FirebaseModule,
        AuthModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}