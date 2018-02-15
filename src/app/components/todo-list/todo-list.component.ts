import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import { TodoService } from '../../providers/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  @select () todos;
  constructor(private ngRedux: NgRedux<IAppState>, private service: TodoService) { }

  ngOnInit() {
    this.service.loadTodos();
  }

  addTodo(input) {
    if(!input.value) return;

    // this.ngRedux.dispatch({ type: 'ADD_TODO', title: input.value });
    let todo = { type: 'ADD_TODO', title: input.value };

    // this.todos.push(todo);
    this.ngRedux.dispatch({ type: 'ADD_TODO', todo: todo, id: Date.now() });

    this.service.addTodo(todo).subscribe(t => {
      this.ngRedux.dispatch({ type: 'ADD_TODO_CORRELATE', todo: todo, id: Date.now() });
    });

    input.value = '';
  }
  
  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: 'ADD_TODO', id: todo.id });
    
  }
}
