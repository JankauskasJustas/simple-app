import { TodoListService } from './../todo-list/todo-list.service';
import { Component, OnInit } from '@angular/core';
import { generateId } from '../generateId';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  newTodoText: string;
  todoItems: { name: string, done: boolean, id: string }[];
  darkMode = false;
  isLoading = false;
  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit(): void {
    this.todoItems = this.todoListService.getTodos();

  }

  onInputValueChange(e) {
    this.newTodoText = e;
  }

  onAddClick() {
    this.isLoading = true;
    if (this.newTodoText) {
      setTimeout(() => {

        const newTodo = {
          name: this.newTodoText,
          done: false,
          id: generateId()
        };
        this.todoItems.push(newTodo);
        this.todoListService.setItems(this.todoItems);
        this.isLoading = false;
      }, 2000);
    }
  }

  onTodoDelete(id: string) {
    const requestedTodoIndex = this.todoItems.findIndex(todo => todo.id === id);
    this.todoItems.splice(requestedTodoIndex, 1);
    this.todoListService.setItems(this.todoItems);
  }

  onDarkModeChange(e) {
    this.darkMode = e;

    if (this.darkMode) {
      document.body.classList.toggle("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  onCheckChange(check: boolean, id: string) {
    const requestedTodo = this.todoItems.find(todo => todo.id === id);
    requestedTodo.done = check;
    this.todoListService.setItems(this.todoItems);
  }

}
