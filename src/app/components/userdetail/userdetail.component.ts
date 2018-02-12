import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
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
  page: number;
  order: string;
  private sub: any;
  // private backgroundColor: any;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) { }

  ngOnInit() {

    this.sub = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined => {
      this.id = +combined[0].get('id');
      this.username = combined[0].get('username');
      this.page = +combined[1].get('page');
      this.order = combined[1].get('order');
    });

    // this.route.paramMap
    //   .subscribe(params => {
    //     this.id = +params.get('id');
    //     this.username = params.get('username');
    // });

    // this.route.queryParamMap
    //   .subscribe(params => {
    //     this.page = +params.get('page');
    //     this.order = params.get('order');
    // });
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = +params['id']; // (+) converts string 'id' to a number
    //   this.username = params['username'];
    // });

    this.usersObservable = this.getUsers('/users');
    //  enum Color {Red, Green, Blue}
    //  this.backgroundColor = Color[2];
  }

  getUsers(listPath): Observable<any[]> {
    return this.db.list(listPath, ref => {
      const qry = ref.orderByChild('userId' && 'userName').equalTo(this.id && this.username); return qry;
    }).valueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
