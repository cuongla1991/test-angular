import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from "../app.model";
import { getDateYYYYMMDD } from "../app.util";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  @Input() formState: "add" | "edit" = "add";
  @Input() formData: Todo = {
    id: null,
    name: "",
    description: "",
    dueDate: getDateYYYYMMDD(new Date()),
    priority: "normal",
    isDone: false,
  };
  @Output() submit = new EventEmitter<Todo>();
  shouldValidate = false;

  constructor() {
  }

  public getMinDate() {
    return getDateYYYYMMDD(new Date());
  }

  public onSubmit() {
    this.shouldValidate = true;
    if (!this.formData.name) return;
    this.submit.emit(this.formData);
    this.shouldValidate = false;
  }
}
