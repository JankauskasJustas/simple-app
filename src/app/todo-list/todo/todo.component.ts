import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  constructor() { }
  @Input() id: string;
  @Output() deleteTodo = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onDeleteTodo() {
    if (this.id) {

      this.deleteTodo.emit(this.id);
    }
  }

}
