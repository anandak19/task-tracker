import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../interface/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-tracker.component.html',
  styleUrl: './task-tracker.component.scss'
})
export class TaskTrackerComponent implements OnInit{

  newTask: Task = {  title: '', description: '' };
  taskDetails: Task[] = []
  isReadOnly: boolean = true;
  selectedIndex: number | null = null;

  constructor(private tasksOperations: TasksService){}

  ngOnInit(): void {
    this.taskDetails = this.tasksOperations?.getTasks()
    console.log(this.taskDetails);
  }

  onSubmit(){
    if (!this.newTask.title || !this.newTask.description) {
      alert("Please enter both title and description")
      
    } else {
      const newTask: Task = {
        title: this.newTask.title,
        description: this.newTask.description
      };
      this.tasksOperations?.addTask(newTask)
      this.newTask.title = '';
      this.newTask.description = '';
    }
  }

  deleteTask(index: number): void {
    this.tasksOperations?.deleteTask(index)
  }


  toggleEdit(index: number): void {
    if (this.isReadOnly) {
      this.selectedIndex = index;
    } else {
      this.selectedIndex = null;
    }
    this.isReadOnly = !this.isReadOnly;
  }
}

