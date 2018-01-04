import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import { moveIn, fallIn } from '../../router.animations';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {
  state: string = '';
  error: any;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  hide = true;
  showSpinner: boolean = false;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginEmail(formData) {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      this.showSpinner = true;
      this.authService.loginWithEmail(this.emailFormControl.value, this.passwordFormControl.value).then(
        (success) => {
        console.log(success);
        this.showSpinner = false;
        this.router.navigate(['']);
      }).catch(
        (err) => {
        console.log(err);
        this.showSpinner = false;
        this.error = err;
      });
    }
  }

}
