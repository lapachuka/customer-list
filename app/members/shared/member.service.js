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
var angularfire2_1 = require('angularfire2');
var MemberService = (function () {
    function MemberService(af) {
        this.af = af;
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
    MemberService.prototype.getMembers = function () {
        return this.af.database.list('members');
    };
    MemberService.prototype.setMember = function (member) {
        this.items.push(member);
    };
    MemberService.prototype.updateMember = function (member) {
        console.log(member);
        this.items.update(member.$key, {
            'firstName': member.firstName,
            'lastName': member.lastName,
            'birthday': member.birthday,
            'phone': member.phone,
            'avatar': member.image
        });
    };
    MemberService.prototype.delete = function (member) {
        this.items = this.af.database.list('/members');
        this.items.remove(member);
    };
    MemberService.prototype.imgUpload = function (file) {
        var imagesRef = this.storageRef.child('avatar/' + file.name);
        return imagesRef.put(file);
    };
    MemberService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], MemberService);
    return MemberService;
}());
exports.MemberService = MemberService;
//# sourceMappingURL=member.service.js.map