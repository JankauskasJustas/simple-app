import { TodoModule } from './../todo-list/todo.module';
import { HeaderModule } from './../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body.component';
import { JujaBtnModule, JujaCheckboxModule, JujaInputModule, JujaSpinnerModule } from 'juja-library';
import { TodoListComponent } from '../todo-list/todo-list.component';



@NgModule({
  declarations: [MainBodyComponent],
  imports: [
    CommonModule,
    HeaderModule,
    JujaBtnModule,
    TodoModule,
    JujaCheckboxModule,
    JujaInputModule,
    JujaSpinnerModule
  ],
  exports: [MainBodyComponent]
})
export class MainBodyModule { }
