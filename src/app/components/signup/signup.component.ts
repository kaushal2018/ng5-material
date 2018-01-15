import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../providers/auth.service';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../shared/models/user.model';
import { UserData } from '../../shared/data/user.data';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends UserData implements OnInit {
  tempUser: UserModel[];
  signUpForm: FormGroup;
  error: any;
  constructor(public authService: AuthService, private fb: FormBuilder, private db: AngularFireDatabase, private router: Router) {
    super();
    this.createForm();
  }

  createForm() {
    this.signUpForm = this.fb.group({
      userid: ['', Validators.required ],
      password: ['', Validators.required ],
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
        password: formData.value.password,
        username: formData.value.username,
        email: formData.value.email,
        phone: {
          landline: formData.value.phone.landline,
          mobile: formData.value.phone.mobile
        }
      }];
      if (formData.valid) {
        this.myUser.push(this.tempUser[0]);
        this.writeUserData(
          this.tempUser[0].userid,
          this.tempUser[0].password,
          this.tempUser[0].username,
          this.tempUser[0].email,
          this.tempUser[0].phone.landline,
          this.tempUser[0].phone.mobile
        );
      }
  }

  writeUserData(userid, password, name, email, landline, mobile): void {
    this.db.database.ref('users/').push({
      userId: userid,
      password: password,
      userName: name,
      email: email,
      phone : {
        landline: landline,
        mobile: mobile
      },
      photoUrl: 'https://address-book-demo.herokuapp.com/images/hills.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    }).then(
      (success) => {
      console.log(success);
      this.redirectComponent('');
    }).catch(
      (err) => {
      console.log(err);
      this.error = err;
    });

    /*this.authService.signupWithEmailAndPass(email, password).then(
      (success) => {
      console.log(success);
      this.router.navigate(['']);
    }).catch(
      (err) => {
      console.log(err);
      this.error = err;
    });*/

  }

  redirectComponent(page: string) {
    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          if (page !== '') {
            this.router.navigate(['/' + page.toLowerCase()]);
          }else {
            this.router.navigate(['']);
          }
        }
      });
  }

  ngOnInit() {
  }

}
