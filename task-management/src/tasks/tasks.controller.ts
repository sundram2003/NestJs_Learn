import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { get } from 'http';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks') // routing at /tasks
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTask(@Query() filterDto: GetTasksFilterDto): Task[] {
    //if we have any filters defined, call tasksService.getTaskWith Filters
    //ohterwise, just call all tasks
    if (Object.keys(filterDto).length) {
      return this.tasksService.pw(filterDto);
    }
    return this.tasksService.getAllTasks();
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.delteTask(id);
  }
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
