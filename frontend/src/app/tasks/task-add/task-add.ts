

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../../../src/app/core/services/task.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.html',
  imports:[MatCardModule, MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,ReactiveFormsModule],
})
export class TaskAdd {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['pending', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.createTask(this.taskForm.value).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}

