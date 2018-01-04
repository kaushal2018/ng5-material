import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      console.log(data);
      this.router.navigate(['']);
    });
  }

  loginFacebook() {
    this.authService.loginWithFacebook().then((data) => {
      console.log(data);
      this.router.navigate(['']);
    });
  }

}
