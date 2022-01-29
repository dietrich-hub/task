import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Remember, TodoModel} from "../../model/task.model";
import {TaskService} from "../../services/task.service";
import {Subscription, Observable,interval} from "rxjs";
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
  rememberForm : FormGroup | any;
  rememberList : Remember[] | any =[];
  rememberSubscription : Subscription | undefined;
  date=new Date();
  first : boolean=true;
  second: boolean=false;
  three : boolean=false;
  counterSubscription : Subscription|undefined;
  counterTimeSubscription : Subscription|undefined;
  time = new Date();



  constructor(private taskService : TaskService, private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {


    const counter=interval(5000) ;
    let counterNb = 3;
    let count=0;
   this.counterSubscription= counter.subscribe((c:number)=>{
     if (count<counterNb){
       count++;
     }else {
       count = 0;
     }

      if (count == 0){
        this.first = true;
        this.second = false;
        this.three = false;
      }
      if (count == 1){
        this.second = true;
      }
      if (count==2){
        this.three = true;
       // this.first = false;
        setTimeout(()=>{
          this.first = false;
          this.second = false;
        },4700);
      }
    });

   const countTime = interval(60000);
   this.counterTimeSubscription = countTime.subscribe((c:number)=>{
     this.time = new Date();
   })

    console.log(this.date.getDay());
    this.todosSubcription = this.taskService.todosSubject.subscribe(
      (todosEmit : any[])=>{
        this.todosList = todosEmit;
    }
    );

    this.taskService.emitTodosSubject();
    //this.todos = this.taskService.getTodo();


    this.rememberSubscription = this.taskService.remembersSubject.subscribe((rememberEmit : any[])=>{
      this.rememberList=rememberEmit;
    });
    this.taskService.onEmitRemembers();


    this.todoForm = this.formBuilder.group({
      description : ['',Validators.required]
    });
    this.initRemember();

    // @ts-ignore

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


onSubmitRemember(){
  const formValue = this.rememberForm.value;

  // @ts-ignore
  const newRemember = new Remember(this.rememberList.length+1,formValue['descriptionR']);
  this.taskService.addNewRemember(newRemember);
  this.rememberForm.reset()
  this.activeRememberForm = false;



}
initRemember(){
    this.rememberForm = this.formBuilder.group({
      descriptionR : ['',Validators.required]
    })
}

}
