import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[] = [  ];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    console.log("From service:",this.tasks);
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
