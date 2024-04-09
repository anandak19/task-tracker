import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-tracker';
}
