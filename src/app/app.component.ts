import { TodoListService } from './todo-list/todo-list.service';
import { Component } from '@angular/core';
import { generateId } from './generateId';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-app';

  constructor(
    private todoListService: TodoListService
  ) {
    if (!this.todoListService.checkTodos()) {

      const mockedTodoItems = [
        {
          name: "Walk the dog",
          done: false,
          id: generateId()
        },
        {
          name: "Take out the trash",
          done: false,
          id: generateId()
        },
        {
          name: "Read a book",
          done: true,
          id: generateId()
        },
        {
          name: "Walk the dog",
          done: false,
          id: generateId()
        },
        {
          name: "Walk the dog",
          done: false,
          id: generateId()
        },
      ];

      this.todoListService.setItems(mockedTodoItems);
    }
  }
}
