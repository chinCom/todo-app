import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
 

export class TodoListComponent {

  public taskArray: Task[];
  
  constructor() {
    this.taskArray = [];
  }

  onSubmit(taskForm: NgForm) {
    this.taskArray.push({
      taskName: taskForm.controls['task-value'].value,
      isCompleted: false
    });
    taskForm.reset();
  }

  taskValue!: string;
  isTaskInputBlank(): boolean {
    return !this.taskValue || /^\s*$/.test(this.taskValue);
  }

  onDeleteTask(i: number) {
    this.taskArray.splice(i, 1);
  }

  onCheck(i: number) {
    this.taskArray[i].isCompleted = !this.taskArray[i].isCompleted;
  }
}
