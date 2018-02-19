import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './providers/auth.service';
import { FavouriteChangedEventArgs } from './components/favourite/favourite.component';
import { Title } from '@angular/platform-browser';
import { JwtHelper } from 'angular2-jwt';
import { environment } from '../environments/environment';
import { NgRedux, select } from 'ng2-redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  exportAs: 'routerLinkActive'
})
export class AppComponent implements OnInit {

  @select ('counter') count;
  // @select (['messaging', 'newMessages']) newMessages;
  // // messaging.newMessages
  // @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;

  viewEnvMode = environment.envName;
  production = environment.production;
  backgroundColor = environment.navBarBackgroundColor;

  task = {
    assignee: {
      name: null
    }
  };
  canSave = false;
  courses = [];
  lastCourseItemIndex = 0;
  colSpan = 2;
  isActive = true;
  matTooltipPosition = 'after';
  viewMode = 'map';
  post = {
    isFavourite: true
  };
  isLoggedIn: Boolean;
  user_displayName: String;
  user_email: String;
  title: string;
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private titleService: Title,
    private route: ActivatedRoute
  ) {
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

          // console.log('Logged in');

          // let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          // this.router.navigate([returnUrl || '']);
          // auth.getIdToken().then(response => {
          //   console.log(response);
          //   console.log('---------');
          //   console.log(auth);
          // });
        }
      }
    );
    // alert(this.isLoggedIn); //this will alert undefined because observable response is pending here

  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = (event.url.substr(1) !== '') ? event.url.substr(1) : 'Home';
        this.titleService.setTitle( 'Ng5Material - ' + this.title );
      }
    });
    // alert(this.isLoggedIn); //this will alert undefined because observable response is pending here
    // this.loadCourses();
  }
  loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
      {id: 4, name: 'course4'},
      {id: 5, name: 'course5'}
    ];
    this.lastCourseItemIndex = this.courses.length;
    this.canSave = false;
  }
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
  onAddCourses() {
    this.lastCourseItemIndex += 1;
    this.courses.push({id: this.lastCourseItemIndex, name: 'course' + this.lastCourseItemIndex});
  }
  onRemoveCourses(course) {
    // let index = this.courses.indexOf(course);
    // this.courses.splice(index, 1);
    course.name = 'Removed';
    this.canSave = true;
  }
  onSaveCourses() {
    let elementsToBeRemoved = [];
    this.courses.forEach(element => {
      if (element.name === 'Removed') {
        let index = this.courses.indexOf(element);
        elementsToBeRemoved.push(index);
      }
    });
    // loop reverse to remove selected elements
    if (elementsToBeRemoved.length > 0) {
      for (let i = elementsToBeRemoved.length - 1; i >= 0; i--) {
        this.courses.splice(elementsToBeRemoved[i], 1);
      }
    }
    this.canSave = false;
  }
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
    // localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  onFavouriteChange(eventArgs: FavouriteChangedEventArgs) {
    // console.log('Favourite changed ');
    console.log('Favourite changed : ', eventArgs.newValue, eventArgs.anotherValue);
  }
}
