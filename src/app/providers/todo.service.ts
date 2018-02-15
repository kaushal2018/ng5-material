import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class TodoService {

  private readonly url = "http://jsonplaceholder.typicode.com/posts"

  constructor(private http: Http,private ngRedux: NgRedux<IAppState>) { }

  loadTodos() {
    this.ngRedux.dispatch({ type: 'FETCH_TODOS_REQUEST'});

    return this.http.get(this.url).subscribe(todos => {
      this.ngRedux.dispatch({ type: 'FETCH_TODOS_SUCCESS'});
    }, err => {
      this.ngRedux.dispatch({ type: 'FETCH_TODOS_ERROR'});
    });

  }

  addTodo(todo) {
    return this.http.post(this.url, todo);
  }

  toggleTodo() {
    
  }

}
