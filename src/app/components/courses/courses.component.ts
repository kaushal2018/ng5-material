import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database-deprecated';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
// As of AngularFire 2.0.4 and above FirebaseListObservable and FirebaseObjectObservable 
// are now called AngularFireList and AngularFireObject.
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [AngularFireDatabase]
})
export class CoursesComponent {
  courses$: FirebaseListObservable<any[]>;
  // course$;
  // author$;
  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');

    // this.course$ = db.object('/courses/1');
    // this.author$ = db.object('/authors/1');
  }

  add(course: HTMLInputElement) {
    this.courses$.push(course.value)
    .then((success) => {
      console.log('Course added');
    })
    .catch((error) => {
      console.log('Error: ' + error);
    });

  //   this.courses$.push(
  //     {
  //     name: course.value,
  //     price: 150,
  //     isLive: true,
  //     sections: [
  //       {title: "Components"},
  //       {title: "Directives"},
  //       {title: "Templates"}
  //     ]
  //   }
  // );

    course.value = '';
  }

  update(course) {
    console.log(course.$key+'---'+course.$value);
    this.db.object('/courses/' + course.$key)
      .update({title: 'New value Updated'})
        .then((success) => {
          console.log('Course updated');
        })
        .catch((error) => {
          console.log('Error: ' + error);
        });

    // this.db.object('/courses/' + course.$key)
    //   .set(course.$value + ' Updated');

    // this.db.object('/courses/' + course.$key)
    //   .update({
    //     title: 'New Title',
    //     isLive: true
    //   });

      // .set({
      //   title: 'New title',
      //   isLive: true
      // });
  }

  delete(course) {
    this.db.object('/courses/' + course.$key).remove()
    .then((success) => {
      console.log('Course deleted');
    })
    .catch((error) => {
      console.log('Error: ' + error);
    });
  }

  // courses$;
  // courses: any[];
  // subscription: Subscription;
  // constructor(private db: AngularFireDatabase) {
  //   this.courses$ = db.list('/courses');
  //   this.subscription = db.list('/courses')
  //   .subscribe(courses => {
  //     this.courses = courses;
  //     console.log(this.courses);
  //   });
  // }

  // ngOnInit() {
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
