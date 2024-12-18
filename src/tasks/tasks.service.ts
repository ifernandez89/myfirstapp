import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { UpdateTaskDto } from './dto/update.task.dto';

@Injectable()
export class TasksService {

  private tasks=[] 

  getTasks() {
    return this.tasks;
  }
  getTask(id:number) {
    const taskFound=this.tasks.find(task=>task.id===id)
    if(!taskFound){
      return new NotFoundException(`La tarea ${id} no fue encontrada`)
    }
    return taskFound
  }
  createTasks(task) {
    console.log(task)
    //this.tasks.push(task)
    this.tasks.push({
      ...task,
      id:this.tasks.length+1,
    })
    return task;
  }
  updateTasks(task:UpdateTaskDto) {
    console.log(task)
    return 'Actualizando Tareas';
  }
  deleteTasks(){
    return 'Eliminando Tareas'
}
updateTaskStatus(){
    return 'Actualizando el estado de una Tarea'
}
}
