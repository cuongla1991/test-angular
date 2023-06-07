import { Injectable } from '@angular/core';
import { Todo } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() { }

  getTasks(): Todo[] {
    const results = localStorage.getItem("data");
    if (!results) return [];
    return JSON.parse(results);
  }

  setTasks(tasks: Todo[]): void {
    localStorage.setItem("data", JSON.stringify(tasks));
  }
}
