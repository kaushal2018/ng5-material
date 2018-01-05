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
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm() {
    this.signUpForm = this.fb.group({
      userid: ['', Validators.required ],
      username: ['', Validators.required ],
      email: ['', [ Validators.required, Validators.email ]],
      phone: this.fb.group({
        landline: ['', Validators.pattern('[0-9]{11}')],
        mobile: ['', [ Validators.required, Validators.pattern('[0-9]{10}') ]],
      })
    });
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
      if (formData.valid) {
        this.myUser.push(this.tempUser[0]);
      }
  }

  ngOnInit() {
  }

}
