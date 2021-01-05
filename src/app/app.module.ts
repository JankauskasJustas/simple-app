import { MainBodyModule } from './main-body/main-body.module';
import { TodoListService } from './todo-list/todo-list.service';
import { UiTestModule } from './ui-test/ui-test.module';
import { routes } from './app.routes';
import { TodoModule } from './todo-list/todo.module';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JujaBtnModule } from 'juja-library';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    TodoModule,
    JujaBtnModule,
    RouterModule.forRoot(routes),
    UiTestModule,
    MainBodyModule],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
