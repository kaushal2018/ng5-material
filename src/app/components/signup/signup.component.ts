import { Component, OnInit } from '@angular/core';
import { UserData } from '../../shared/data/user.data';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends UserData implements OnInit {
  complexForm: FormGroup;
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

  constructor(fb: FormBuilder) {
    super();
    this.complexForm = fb.group({
      userid: 1003,
      username: 'kaushal3',
      email: 'test@intelegencia.com',
      phone: {
          landline: '2225772928',
          mobile: '9873656549',
      }
    });
  }
  /*addUser(formData) {
    console.log(formData);
  }*/
  addUser(form: any): void {
    console.log('Form Data: ');
    console.log(form);
  }
  ngOnInit() {
  }

}
