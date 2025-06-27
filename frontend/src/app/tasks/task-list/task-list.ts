import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../src/app/core/services/task.service';
import { Task } from '../../../../src/app/core/models/task.model';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  imports:[MatCardModule, MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,MatTableModule],
})
export class TaskList implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    console.log("Load Task")
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data:any) => {
      console.log(data)
      this.tasks = data;
    });
  }

  //edit Task
  editTask(id: string) {
    this.router.navigate(['/tasks/edit', id]);
  }

  // View task
  viewTask(id: string) {
    this.router.navigate(['/tasks/view', id]);
  }

  // delete Task
  deleteTask(id: string) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
    }
  }
}
