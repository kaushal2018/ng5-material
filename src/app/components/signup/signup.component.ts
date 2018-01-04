import { Component, OnInit } from '@angular/core';
import { UserData } from '../../shared/data/user.data';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends UserData implements OnInit {
  error: any;
  useridFormControl = new FormControl('', [
    Validators.required
  ]);
  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  mobileFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{10}')
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor() { super(); }
  addUser(formData) {
    console.log(formData);
  }
  ngOnInit() {
  }

}
