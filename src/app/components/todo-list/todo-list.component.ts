import {AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, NgZone, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, DoCheck, AfterViewChecked {

  public myList: { label: string, isCompleted: boolean }[];
  @ViewChild('container', {static: true}) el: ElementRef;

  @Input() set list(list) {
    this.myList = list;
  }

  get list() {
    this.blink();
    return this.myList;
  }

  constructor(private zone: NgZone) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  ngAfterViewChecked() {
  }

  blink() {
    this.el.nativeElement.classList.add('highlight-list');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight-list');
      }, 300);
    });
  }

}
