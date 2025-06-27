import { Component } from '@angular/core';
import { SpinnerService } from '../../../../src/app/core/services/spinner.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner-wrapper" *ngIf="spinner.loading | async">
      <mat-progress-spinner mode="indeterminate" color="primary"></mat-progress-spinner>
    </div>
  `,
  imports:[MatProgressSpinnerModule,BrowserModule],
  styles: [`
    .spinner-wrapper {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
    }
  `]
})
export class SpinnerComponent {
  constructor(public spinner: SpinnerService) {}
}
