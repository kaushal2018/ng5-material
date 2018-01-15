import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit, OnDestroy {
  usersObservable: Observable<any[]>;
  id: number;
  username: string;
  private sub: any;
  // private backgroundColor: any;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.username = params['username'];
   });
   this.usersObservable = this.getUsers('/users');
  //  enum Color {Red, Green, Blue}
  //  this.backgroundColor = Color[2];
  }

  getUsers(listPath): Observable<any[]> {
    return this.db.list(listPath, ref => {
      const qry = ref.orderByChild('userId' && 'userName').equalTo(this.id.toString() && this.username.toString()); return qry;
    }).valueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
