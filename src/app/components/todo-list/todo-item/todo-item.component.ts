import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit, DoCheck, AfterViewChecked {

  public myTodoItem: { label: string, isCompleted: boolean };
  @ViewChild('itemContainer', {static: true}) el: ElementRef;

  @Input() set todoItem(todoItem) {
    this.myTodoItem = todoItem;
  }

  get todoItem() {
    this.blink();
    return this.myTodoItem;
  }

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
  }

  ngDoCheck() {
  }

  blink() {
    this.el.nativeElement.classList.add('highlight-item');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight-item');
      }, 300);
    });
  }
}
