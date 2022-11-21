import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  addTask(task: any): any {
    console.log('add task called');
    return 'task added';
  }

  deleteTask(id: number): any {
    console.log('delete task called');
    return 'task deleted';
  }
}
