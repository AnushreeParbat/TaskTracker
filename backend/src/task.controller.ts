import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/add')
  @HttpCode(200)
  addTask(@Body() task: any): any {
    return this.taskService.addTask(task);
  }

  @Delete('/delete/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number): any {
    return this.taskService.deleteTask(id);
  }
}
