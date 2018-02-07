import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
    //this.authService.isLoggedIn();
    // console.log(this.authService.currentUser);
  }

}
