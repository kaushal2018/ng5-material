import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './providers/auth.service';
import { FavouriteChangedEventArgs } from './components/favourite/favourite.component';
import { Title } from '@angular/platform-browser';
import { JwtHelper } from 'angular2-jwt'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  exportAs: 'routerLinkActive'
})
export class AppComponent implements OnInit {
  task = {
    assignee: {
      name: null
    }
  };
  canSave = false;
  courses = [];
  lastCourseItemIndex = 0;
  viewMode = 'map';
  post = {
    isFavourite: true
  };
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  title;
  constructor(private authService: AuthService, private router: Router, private titleService: Title) {
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
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = (event.url.substr(1) !== '') ? event.url.substr(1) : 'Home';
        this.titleService.setTitle( 'Ng5Material - ' + this.title );
      }
    });
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
    //localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  onFavouriteChange(eventArgs: FavouriteChangedEventArgs) {
    // console.log('Favourite changed ');
    console.log('Favourite changed : ', eventArgs.newValue, eventArgs.anotherValue);
  }
}
