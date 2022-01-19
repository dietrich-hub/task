import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TodoModel} from "../../model/task.model";
import {TaskService} from "../../services/task.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  @ViewChild("textareaT") area : ElementRef | undefined;
  acitveTodoForm : boolean=false;
  activeRememberForm : boolean=false;
  todosList : TodoModel[] | any;
  todosSubcription : Subscription | undefined;
  todos : TodoModel | undefined;
  todoForm : FormGroup | any;


  constructor(private taskService : TaskService, private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.todosSubcription = this.taskService.todosSubject.subscribe(
      (todosEmit : any[])=>{
        this.todosList = todosEmit;
    }
    );

    this.taskService.emitTodosSubject();
    //this.todos = this.taskService.getTodo();

    this.todoForm = this.formBuilder.group({
      description : ['',Validators.required]
    });
  }
  onActiveTodoFormt() : void{
    this.acitveTodoForm = !this.acitveTodoForm;
}
onActiveRememberForm() : void{
    this.activeRememberForm = !this.activeRememberForm;
}
onSubmit(){

    const formValue = this.todoForm.value;
    const newTodo = new TodoModel(this.todosList.length+1,formValue['description'],true,false);
    this.taskService.addTodo(newTodo);
    this.todoForm.reset()

    // @ts-ignore
  //this.area?.nativeElement.innerHTML=""

    this.acitveTodoForm = false;
}

}
