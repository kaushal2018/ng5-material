import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Observable } from 'rxjs/Observable';
import { AuthorListService } from '../../providers/abc.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthorListService]
})
export class HomeComponent implements OnInit {
  public activities$: Observable<any>;

  constructor(private authService: AuthService, private activityService: AuthorListService) { }
  
  ngOnInit() {
    //this.authService.isLoggedIn();
    // console.log(this.authService.currentUser);

    // this.activities$ = this.activityService.getActivities();

    // this.activities$.forEach(item => {
    //     console.log('Item:', item);
    // });
    let Joe = function(age, sex) {
      this.age = age;
      this.sex = sex;
      this.secret = "I eat cookies at midnight";
    }
    
    let babyJoe = new Joe(2, "male");
    console.log(babyJoe.secret); //I eat cookies at midnight
  }

  helloWorld() {
    return 'Hello world!';
  }

}
