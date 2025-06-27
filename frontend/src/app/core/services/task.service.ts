import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'http://127.0.0.1:8000'; // 👈 FastAPI base URL

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    console.log("getTask")
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  createTask(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/task`, task);
  }

  updateTask(id: string, task: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/task/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/task/${id}`);
  }
}
