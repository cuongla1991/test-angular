import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from "../app.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: Todo[] = [];
  @Output() changeDone = new EventEmitter<Todo>();
  @Output() detail = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<number>();

  checkeds: number[] = [];

  searchText: string = "";

  constructor() {
  }

  public ngOnInit() {
  }

  public onChangeDone(data: Todo) {
    this.changeDone.emit(data);
  }

  public onDetail(data: Todo) {
    this.detail.emit(data);
  }

  public onRemove(index: number) {
    this.remove.emit(index);
  }

  public onChangeChecked(i: number) {
    if (this.checkeds.includes(i)) {
      this.checkeds = this.checkeds.filter(item => item !== i);
      return;
    }
    this.checkeds.push(i);
  }
}
