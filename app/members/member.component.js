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
 * Created by lapachuka on 9/21/16.
 */
var core_1 = require('@angular/core');
var member_service_1 = require('./shared/member.service');
var auth_service_1 = require('../auth/services/auth-service');
var router_1 = require('@angular/router');
var ng2_img_cropper_1 = require('ng2-img-cropper');
var MemberComponent = (function () {
    function MemberComponent(memberService, auth, router) {
        this.memberService = memberService;
        this.auth = auth;
        this.router = router;
        this.member = {
            id: 0,
            firstName: '',
            lastName: '',
            image: '',
            avatar: '',
            dateOfBirth: '',
            phone: ''
        };
        this.name = 'Angular2';
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 500;
        this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.minWidth = 100;
        this.cropperSettings.minHeight = 100;
        this.cropperSettings.rounded = false;
        this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
        this.data1 = {};
    }
    MemberComponent.prototype.cropped = function (bounds) {
        console.log(bounds);
    };
    MemberComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    MemberComponent.prototype.ngOnInit = function () {
        this.members = this.memberService.getMembers();
        console.log(this.members);
    };
    MemberComponent.prototype.openModal = function (modal) {
        this.mode = 'new';
        modal.open();
    };
    MemberComponent.prototype.openEditModal = function (modal, member) {
        modal.open();
        this.mode = 'edit';
        this.member = member;
        this.member.image = '';
        this.fileAvatar = null;
    };
    MemberComponent.prototype.delete = function (member) {
        this.memberService.delete(member);
    };
    MemberComponent.prototype.update = function (myModal) {
        this.memberService.updateMember(this.member);
        myModal.close();
    };
    MemberComponent.prototype.add = function (myModal) {
        this.memberService.setMember(this.member);
        myModal.close();
    };
    MemberComponent.prototype.onChange = function (event) {
        this.files = event.srcElement.files;
        event.value = null;
    };
    MemberComponent.prototype.onLogOut = function () {
        this.router.navigate(['/']);
        this.auth.signOut();
    };
    __decorate([
        core_1.ViewChild('cropper', undefined), 
        __metadata('design:type', ng2_img_cropper_1.ImageCropperComponent)
    ], MemberComponent.prototype, "cropper", void 0);
    MemberComponent = __decorate([
        core_1.Component({
            selector: 'members',
            templateUrl: 'app/members/member.html',
            providers: [member_service_1.MemberService, auth_service_1.AuthService],
            styleUrls: ['app/members/style.css']
        }), 
        __metadata('design:paramtypes', [member_service_1.MemberService, auth_service_1.AuthService, router_1.Router])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=member.component.js.map