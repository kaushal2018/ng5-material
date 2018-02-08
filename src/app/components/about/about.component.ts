import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  usersObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  getUsers(listPath) {
    return this.db.list(listPath).valueChanges();
  }

  ngOnInit() {
    this.usersObservable = this.getUsers('/users');
  }
}
