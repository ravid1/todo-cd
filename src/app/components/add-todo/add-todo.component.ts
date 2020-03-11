import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Output() onAddTodo: EventEmitter<string> = new EventEmitter();
  public todoText = '';
  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    if (this.todoText) {
      this.onAddTodo.emit(this.todoText);
      this.todoText = '';
    }
  }

}
