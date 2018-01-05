import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/models/user.model';
import { UserData } from '../../shared/data/user.data';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends UserData implements OnInit {
  tempUser: UserModel[];

  constructor() {
    super();
  }
  addUser(formData: any): void {
    this.tempUser = [
      {
        userid: formData.value.userid,
        username: formData.value.username,
        email: formData.value.email,
        phone: {
          landline: formData.value.phone.landline,
          mobile: formData.value.phone.mobile
        }
      }];
      this.myUser.push(this.tempUser[0]);
  }
  ngOnInit() {
  }

}
