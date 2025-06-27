export type TaskStatus = 'pending' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  created_at: string;
}
