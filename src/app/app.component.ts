import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = '';
  showComponent(page: string) {
    if (page !== '') {
      this.title = page;
      this.router.navigate(['/' + page]);
    }else {
      this.title = 'Home';
      this.router.navigate(['']);
    }
  }
  logOut() {
    this.title = 'Login';
    this.router.navigate(['/login']);
  }
}
