/**
 * Created by lapachuka on 9/21/16.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {Member} from './shared/member.model';
import {MemberService} from './shared/member.service';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {AuthService} from '../auth/services/auth-service';
import {Router} from '@angular/router';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';




@Component({
    selector: 'members',
    templateUrl: 'app/members/member.html',
    providers: [MemberService, AuthService],
    styleUrls: ['app/members/style.css']
})

export class MemberComponent implements OnInit {
    name:string;
    data1:any;
    cropperSettings:CropperSettings;
    members:FirebaseListObservable<any[]>;
    member:Member = {
        id: 0,
        firstName: '',
        lastName: '',
        image: '',
        avatar: '',
        dateOfBirth: '',
        phone: ''
    };
    firstName:string;
    lastName:string;
    mode:string;
    files:Object[];
    fileAvatar:null;

    @ViewChild('cropper', undefined) cropper:ImageCropperComponent;

    constructor(private memberService:MemberService, private auth:AuthService, private router:Router) {
        this.name = 'Angular2';
        this.cropperSettings = new CropperSettings();
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

    cropped(bounds:Bounds) {
        console.log(bounds);
    }

    fileChangeListener($event) {
        var image:any = new Image();
        var file:File = $event.target.files[0];
        var myReader:FileReader = new FileReader();
        var that = this;

        myReader.onloadend = function (loadEvent:any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);

        };

        myReader.readAsDataURL(file);
    }

    ngOnInit() {
        this.members = this.memberService.getMembers();
        console.log(this.members);
    }

    openModal(modal) {
        this.mode = 'new';
        modal.open();
    }

    openEditModal(modal, member) {
        modal.open();
        this.mode = 'edit';
        this.member = member;
        this.member.image = '';
        this.fileAvatar = null;
    }

    delete(member) {
        this.memberService.delete(member);
    }

    update(myModal) {
        this.memberService.updateMember(this.member);
        myModal.close();
    }

    add(myModal) {
        this.memberService.setMember(this.member);
        myModal.close();
    }

    onChange(event) {
        this.files = event.srcElement.files;
        event.value = null;
    }

    onLogOut() {
        this.router.navigate(['/']);
        this.auth.signOut();
    }
}