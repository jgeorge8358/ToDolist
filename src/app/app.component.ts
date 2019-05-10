import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ToDoList';
  toDoList: Activity[];
  disableAddTask: boolean = false;
  public constructor (){
    this.toDoList = new Array();
  }
  ngOnInit(){
  }

  addTask(){
    if(!this.toDoList){
      this.toDoList = new Array();
    }
    this.toDoList.push({label: "", isSelected: false, isChanged:false});
    this.disableAddTask = true;
  }

  deleteTask(task){
    this.toDoList = this.toDoList.filter(t => t != task);
    this.setDisableAddTask();
  }

  taskLabelChanged(task){
    task.isChanged = true;
    this.disableAddTask = true;
  }

  save(task){
    task.isChanged = false;
    this.setDisableAddTask();
  }

  saveAll(){
   this.toDoList.forEach(t => {
     if(t.label && !t.isSelected){
       t.isChanged = false;
       this.setDisableAddTask();
     }
    });
    
    
  }

  completeAllTasks(){
    this.toDoList.forEach(t => {
      if(t.label && !t.isChanged){
        t.isSelected = true;
      }
     });
  }
  

  setDisableAddTask(){
    if(!this.toDoList.find(t => t.isChanged == true)){
      this.disableAddTask = false;
    }
  }
}

export class Activity {
  label: string;
  isSelected: boolean;
  isChanged:boolean;
}
