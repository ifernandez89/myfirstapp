import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Patch,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('/tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({summary:'Get all tasks'})
  @ApiResponse({status:200,description:'Return all tasks'})
  @ApiResponse({status:403,description:'Forbidden'})
  getAllTasks(@Query() query: any) {
    console.log(query);
    //buscar en una bd
    //peticion a otro backend o api
    return this.tasksService.getTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    console.log(id);
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({summary:'Create a task'})
  createTasks(@Body() task: CreateTaskDto) {
    return this.tasksService.createTasks(task);
  }
  @Put() //actualiza una tarea-todo el objeto
  updateTasks(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTasks(task);
  }
  @Delete()
  deleteTasks() {
    return this.tasksService.deleteTasks();
  }
  @Patch() //actualiza solo una parte, un atributo
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
