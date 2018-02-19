import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../../actions';
import { ITodo } from '../../../app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  submitted: boolean = false; // check if the form is submitted

  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<IAppState>) {    
  }

  ngOnInit() {
  }

  onSubmit(todoForm) {
    this.submitted = true;
    if ( todoForm.valid ) {
      this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
      localStorage.setItem('reduxState', JSON.stringify(this.ngRedux.getState()));
      
      // reset the form to default value
      todoForm.reset();
      todoForm.controls['priority'].setValue('low');
      this.submitted = false;
    }
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
    localStorage.setItem('reduxState', JSON.stringify(this.ngRedux.getState()));
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id });
    localStorage.setItem('reduxState', JSON.stringify(this.ngRedux.getState()));
  }
}