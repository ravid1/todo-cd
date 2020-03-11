import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {

  public todoList: any[] = [{label: 'test1', isCompleted: false},
                            {label: 'test2', isCompleted: false}];

  addTodo(todoText) {
    if (todoText) {
      // this.todoList.push({label: todoText, isCompleted: false});
      this.todoList = [...this.todoList, {label: todoText, isCompleted: false}];
    }
  }
}
