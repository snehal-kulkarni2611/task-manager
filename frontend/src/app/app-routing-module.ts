import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskView } from './tasks/task-view/task-view';
import { TaskEdit } from './tasks/task-edit/task-edit';
import { TaskAdd } from './tasks/task-add/task-add';
import { TaskList } from './tasks/task-list/task-list';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskList },  // task list
  { path: 'tasks/add', component: TaskAdd },  // add task
  { path: 'tasks/edit/:id', component: TaskEdit },  // edit task 
  { path: 'tasks/view/:id', component: TaskView },   // view task
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
