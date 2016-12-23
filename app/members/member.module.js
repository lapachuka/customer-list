"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lapachuka on 9/18/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var member_component_1 = require('./member.component');
var ng2_modal_1 = require("ng2-modal");
var forms_1 = require('@angular/forms');
var auth_guard_1 = require("../auth/_guards/auth.guard");
var router_1 = require('@angular/router');
var auth_service_1 = require("../auth/services/auth-service");
var ng2_img_cropper_1 = require('ng2-img-cropper');
var routes = [
    { path: 'members', component: member_component_1.MemberComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var MemberModule = (function () {
    function MemberModule() {
    }
    MemberModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng2_modal_1.ModalModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(routes)
            ],
            exports: [
                member_component_1.MemberComponent
            ],
            declarations: [
                member_component_1.MemberComponent,
                ng2_img_cropper_1.ImageCropperComponent
            ],
            bootstrap: [
                member_component_1.MemberComponent
            ],
            providers: [
                auth_service_1.AuthService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberModule);
    return MemberModule;
}());
exports.MemberModule = MemberModule;
//# sourceMappingURL=member.module.js.map