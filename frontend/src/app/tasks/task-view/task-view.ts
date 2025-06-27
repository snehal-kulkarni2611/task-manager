import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../../src/app/core/services/task.service';
import { Task } from '../../../../src/app/core/models/task.model';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.html',
  imports:[MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule],
})
export class TaskView implements OnInit {
  task?: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.taskService.getTasks().subscribe(tasks => {
      this.task = tasks.find(t => t.id === id);
    });
  }
}
