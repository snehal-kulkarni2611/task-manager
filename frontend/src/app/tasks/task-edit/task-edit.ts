import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../../src/app/core/services/task.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.html',
  imports:[MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatProgressSpinnerModule,MatSelectModule,MatTableModule]
})
export class TaskEdit implements OnInit {
  taskForm: FormGroup;
  taskId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['pending', Validators.required]
    });
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id')!;
    this.taskService.getTasks().subscribe((tasks:any) => {
      const task = tasks.find((t:any) => t.id === this.taskId);
      if (task) {
        this.taskForm.patchValue(task);
      }
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.updateTask(this.taskId, this.taskForm.value).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}
