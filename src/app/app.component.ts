import { Component } from '@angular/core';
import {Todo} from "./app.model";
import {getDateYYYYMMDD} from "./app.util";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todos: Todo[] = [];
  formState: "add" | "edit" = "add";

  form: Todo = {
    id: null,
    name: "",
    description: "",
    dueDate: getDateYYYYMMDD(new Date()),
    priority: "normal",
    isDone: false,
  }

  constructor(private appService: AppService) {
    this.todos = this.appService.getTasks();
  }

  public onDetail(task: Todo) {
    this.formState = "edit";
    this.form = {...task};
  }

  public onRemove(index: number) {
    this.todos.splice(index, 1);
    this.appService.setTasks(this.todos);
  }

  public onChangeDone(data: Todo) {
    data.isDone = !data.isDone;
    this.appService.setTasks(this.todos);
  }

  public onSubmit(data: Todo) {
    if (data.id) {
      for(let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id === data.id) {
          this.todos[i].name = data.name;
          this.todos[i].description = data.description;
          this.todos[i].priority = data.priority;
          this.todos[i].dueDate = data.dueDate;
          break;
        }
      }
      this.appService.setTasks(this.todos);
      this.onCancel();
      return;
    }
    this.todos.push({
      ...data,
      id: this.todos.length + 1,
    });
    this.appService.setTasks(this.todos);
    this.onCancel();
  }

  public onCancel() {
    this.formState = "add";
    this.form = {
      id: null,
      name: "",
      description: "",
      dueDate: getDateYYYYMMDD(new Date()),
      priority: "normal",
      isDone: false,
    };
  }
}
