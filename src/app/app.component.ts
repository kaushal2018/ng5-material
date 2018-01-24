import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  exportAs: 'routerLinkActive'
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Logged out');
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.displayName;
          this.user_email = auth.email;
          console.log('Logged in');
        }
      }
    );
  }
  title = '';
  showComponent(page: string) {
    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          if (page !== '') {
            this.title = page;
            this.router.navigate(['/' + page.toLowerCase()]);
          }else {
            this.title = 'Home';
            this.router.navigate(['']);
          }
        }
      });
  }
  logOut() {
    this.title = 'Login';
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
