import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { JujaBtnModule, JujaCheckboxModule } from 'juja-library';



@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [
    CommonModule,
    JujaBtnModule,
    JujaCheckboxModule
  ],
  exports: [TodoComponent, TodoListComponent],
})
export class TodoModule { }
