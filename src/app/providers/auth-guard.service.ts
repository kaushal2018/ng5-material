import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private isLoggedIn: Boolean = false;
  constructor(private router: Router, private authService: AuthService) {
    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          console.log('Logged out....' + this.isLoggedIn);
        } else {
          this.isLoggedIn = true;
          console.log('Logged in.....' + this.isLoggedIn);
        }
      }
    );
   }

  canActivate() {
    alert('---------------' + this.isLoggedIn);
    if (this.isLoggedIn) return true;

    this.router.navigate(['/login']);
    return false;
  }

}
