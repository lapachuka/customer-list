/**
 * Created by lapachuka on 9/18/16.
 */
import {NgModule}  from '@angular/core';
import {CommonModule}       from '@angular/common';
import {MemberComponent}      from './member.component';
import {ModalModule} from "ng2-modal";
import {FormsModule}   from '@angular/forms';
import {AuthGuard} from "../auth/_guards/auth.guard";

import { Routes, RouterModule } from '@angular/router';
import {AuthService} from "../auth/services/auth-service";
import {ImageCropperComponent}  from 'ng2-img-cropper';


const routes: Routes = [
    {path: 'members', component: MemberComponent, canActivate: [AuthGuard]}
];


@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        MemberComponent
    ],
    declarations: [
        MemberComponent,
        ImageCropperComponent
    ],
    bootstrap: [
        MemberComponent
    ],
    providers: [
        AuthService
    ]
})
export class MemberModule {
}